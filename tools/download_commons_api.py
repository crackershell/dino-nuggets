#!/usr/bin/env python3
"""Search Wikimedia Commons for missing dinosaur images and download top results.
Updates dino_data.json by adding downloaded image paths to the "images" array for each dinosaur.
"""
import json
import os
import re
import sys
from urllib.parse import quote

try:
    import requests
except Exception as e:
    print('requests required. Install with pip install requests')
    raise

BASE = os.path.dirname(__file__)
DATA_PATH = os.path.join(BASE, '..', 'dino_data.json')
IMAGES_DIR = os.path.join(BASE, '..', 'images')
os.makedirs(IMAGES_DIR, exist_ok=True)

API = 'https://commons.wikimedia.org/w/api.php'
HEADERS = {'User-Agent': 'dino-nuggets-bot/1.0 (contact: none)'}

with open(DATA_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

updated = False

for d in data:
    name = d.get('name')
    images = d.get('images', []) or []
    if images:
        print(f"Skipping {name}, already has images")
        continue

    # Search Commons for the dinosaur name
    query = f"{name} dinosaur"
    params = {
        'action': 'query',
        'format': 'json',
        'generator': 'search',
        'gsrsearch': query,
        'gsrlimit': '5',
        'prop': 'imageinfo',
        'iiprop': 'url|mime',
    }

    try:
        r = requests.get(API, params=params, headers=HEADERS, timeout=15)
        r.raise_for_status()
        res = r.json()
    except Exception as e:
        print(f"API error searching for {name}: {e}")
        continue

    pages = res.get('query', {}).get('pages', {})
    found_url = None
    for pid, p in pages.items():
        imageinfo = p.get('imageinfo')
        if not imageinfo:
            continue
        info = imageinfo[0]
        url = info.get('url')
        mime = info.get('mime')
        if not url or not mime:
            continue
        if mime.startswith('image/') and re.search(r'\.(jpg|jpeg|png|webp)$', url, re.IGNORECASE):
            found_url = url
            break

    if not found_url:
        print(f"No suitable commons image found for {name}")
        continue

    # Download image
    safe_name = re.sub(r'[^A-Za-z0-9_\-]', '_', name)
    ext = os.path.splitext(found_url.split('?')[0])[1]
    out_path = os.path.join(IMAGES_DIR, f"{safe_name}{ext}")
    try:
        rimg = requests.get(found_url, headers=HEADERS, timeout=20)
        rimg.raise_for_status()
        with open(out_path, 'wb') as out:
            out.write(rimg.content)
        print(f"Downloaded for {name}: {out_path}")
        # update data
        rel_path = os.path.relpath(out_path, os.path.join(BASE, '..'))
        if 'images' not in d or not d['images']:
            d['images'] = [rel_path.replace('\\', '/')]
        else:
            d['images'].append(rel_path.replace('\\', '/'))
        updated = True
    except Exception as e:
        print(f"Failed to download image for {name}: {e}")

if updated:
    with open(DATA_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print('Updated dino_data.json with new images')
else:
    print('No updates made')
