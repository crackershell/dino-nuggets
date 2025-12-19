#!/usr/bin/env python3
"""Download first Wikimedia Commons image for each dinosaur reference in dino_data.json
Saves images to ./images/<DinosaurName>.jpg only when an upload.wikimedia.org URL is found.
"""
import json
import os
import re
from urllib.parse import urljoin

try:
    import requests
except Exception:
    requests = None

BASE = os.path.dirname(__file__)
DATA_PATH = os.path.join(BASE, '..', 'dino_data.json')
IMAGES_DIR = os.path.join(BASE, '..', 'images')

os.makedirs(IMAGES_DIR, exist_ok=True)

# Helpers

def get(url, timeout=15):
    if requests:
        return requests.get(url, timeout=timeout, headers={'User-Agent': 'dino-nuggets-bot/1.0'})
    else:
        from urllib.request import urlopen, Request
        req = Request(url, headers={'User-Agent': 'dino-nuggets-bot/1.0'})
        resp = urlopen(req, timeout=timeout)
        class R:
            status_code = resp.getcode()
            text = resp.read().decode('utf-8', errors='replace')
            content = resp.read()
        return R()

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

results = []

for d in data:
    name = d.get('name')
    refs = d.get('references', []) or []
    found = None
    for ref in refs:
        try:
            r = get(ref)
            if r.status_code and int(r.status_code) >= 400:
                continue
            text = r.text
            # Find commons file link
            m = re.search(r'https?://commons\.wikimedia\.org/wiki/File:[^"\s<>]+' , text)
            if not m:
                # Also look for plain wikimedia links
                m = re.search(r'https?://upload\.wikimedia\.org/[^"\s<>]+\.(?:jpg|jpeg|png|webp)', text)
                if m:
                    img_url = m.group(0)
                    found = ('direct', img_url)
                    break
            else:
                file_page = m.group(0)
                # fetch file page
                rf = get(file_page)
                txt2 = rf.text
                m2 = re.search(r'https?://upload\.wikimedia\.org/[^"\s<>]+\.(?:jpg|jpeg|png|webp)', txt2)
                if m2:
                    img_url = m2.group(0)
                    found = ('commons', img_url)
                    break
        except Exception as e:
            print(f"Warning: failed to fetch {ref} for {name}: {e}")
            continue
    if found:
        typ, img_url = found
        ext = os.path.splitext(img_url)[1].split('?')[0]
        safe_name = re.sub(r'[^A-Za-z0-9_\-]', '_', name)
        out_path = os.path.join(IMAGES_DIR, f"{safe_name}{ext}")
        try:
            rimg = get(img_url)
            if rimg.status_code and int(rimg.status_code) >= 400:
                print(f"Failed to download {img_url} for {name}: status {rimg.status_code}")
                results.append((name, False, img_url))
                continue
            content = rimg.content if hasattr(rimg, 'content') else rimg.text.encode('utf-8')
            with open(out_path, 'wb') as out:
                out.write(content)
            print(f"Saved {name} -> {out_path}")
            results.append((name, True, img_url))
        except Exception as e:
            print(f"Error downloading {img_url} for {name}: {e}")
            results.append((name, False, img_url))
    else:
        print(f"No Commons image found for {name}")
        results.append((name, False, None))

# Summary
print('\nSummary:')
for r in results:
    print(r)

