// Dino Nuggets Practice Site - Script

// --- Data Models ---

// Official List Data (Based on 2026 Rules & General Knowledge for Practice)
const dinoData = [
    // Dinosaurs
    { name: "Acrocanthosaurus", type: "Dinosaur", diet: "Carnivore", period: "Cretaceous", clue: "High-spined lizard, meat eater." },
    { name: "Allosaurus", type: "Dinosaur", diet: "Carnivore", period: "Jurassic", clue: "Different lizard, large predator." },
    { name: "Ankylosaurus", type: "Dinosaur", diet: "Herbivore", period: "Cretaceous", clue: "Fused lizard, armor and tail club." },
    { name: "Apatosaurus", type: "Dinosaur", diet: "Herbivore", period: "Jurassic", clue: "Deceptive lizard, long neck, whip tail." },
    { name: "Archaeopteryx", type: "Dinosaur", diet: "Carnivore", period: "Jurassic", clue: "First bird, feathered." },
    { name: "Coelophysis", type: "Dinosaur", diet: "Carnivore", period: "Triassic", clue: "Hollow form, small early predator." },
    { name: "Deinonychus", type: "Dinosaur", diet: "Carnivore", period: "Cretaceous", clue: "Terrible claw, pack hunter." },
    { name: "Diplodocus", type: "Dinosaur", diet: "Herbivore", period: "Jurassic", clue: "Double beam, very long tail." },
    { name: "Iguanodon", type: "Dinosaur", diet: "Herbivore", period: "Cretaceous", clue: "Iguana tooth, thumb spike." },
    { name: "Parasaurolophus", type: "Dinosaur", diet: "Herbivore", period: "Cretaceous", clue: "Near crested lizard, long crest." },
    { name: "Plateosaurus", type: "Dinosaur", diet: "Herbivore", period: "Triassic", clue: "Broad lizard, early long-neck." },
    { name: "Stegosaurus", type: "Dinosaur", diet: "Herbivore", period: "Jurassic", clue: "Roof lizard, plates on back." },
    { name: "Triceratops", type: "Dinosaur", diet: "Herbivore", period: "Cretaceous", clue: "Three-horned face." },
    { name: "Tyrannosaurus rex", type: "Dinosaur", diet: "Carnivore", period: "Cretaceous", clue: "Tyrant lizard king." },
    { name: "Velociraptor", type: "Dinosaur", diet: "Carnivore", period: "Cretaceous", clue: "Swift seizer, small predator." },
    
    // Marine/Flying Vertebrates
    { name: "Pterosaur", type: "Reptile", diet: "Carnivore", period: "Mesozoic", clue: "Flying reptile (not a dinosaur)." },
    { name: "Plesiosaur", type: "Reptile", diet: "Carnivore", period: "Mesozoic", clue: "Swimming reptile, Loch Ness style." },
    { name: "Ichthyosaur", type: "Reptile", diet: "Carnivore", period: "Mesozoic", clue: "Fish lizard, looks like a dolphin." },
    { name: "Mosasaur", type: "Reptile", diet: "Carnivore", period: "Cretaceous", clue: "Meuse river lizard, giant sea reptile." },
    { name: "Bony Fish", type: "Vertebrate", diet: "Various", period: "Various", clue: "Fish with a skeleton made of bone." },
    { name: "Shark", type: "Vertebrate", diet: "Carnivore", period: "Various", clue: "Cartilaginous fish, often found as teeth." },
    { name: "Ray", type: "Vertebrate", diet: "Carnivore", period: "Various", clue: "Flat cartilaginous fish." },

    // Invertebrates
    { name: "Trilobite", type: "Invertebrate", diet: "Various", period: "Paleozoic", clue: "Three-lobed ancient sea bug." },
    { name: "Ammonoid", type: "Invertebrate", diet: "Carnivore", period: "Mesozoic", clue: "Coiled shell, squid-like." },
    { name: "Eurypterid", type: "Invertebrate", diet: "Carnivore", period: "Paleozoic", clue: "Sea scorpion." },
    { name: "Asteroid (Sea Star)", type: "Invertebrate", diet: "Carnivore", period: "Various", clue: "Star-shaped echinoderm." },
    { name: "Bivalve", type: "Invertebrate", diet: "Filter Feeder", period: "Various", clue: "Two shells (Clams, Mussels)." },
    { name: "Brachiopod", type: "Invertebrate", diet: "Filter Feeder", period: "Paleozoic", clue: "Lamp shell, looks like a clam but different." },
    { name: "Coral", type: "Invertebrate", diet: "Filter Feeder", period: "Various", clue: "Colonial marine animal, builds reefs." },
    { name: "Crustacean", type: "Invertebrate", diet: "Various", period: "Various", clue: "Crabs, lobsters, shrimp." },
    { name: "Echinoid", type: "Invertebrate", diet: "Herbivore/Scavenger", period: "Various", clue: "Sea urchins and sand dollars." },

    // Trace Fossils & Other
    { name: "Coprolite", type: "Trace Fossil", diet: "N/A", period: "Various", clue: "Fossilized poop." },
    { name: "Track/Trackway", type: "Trace Fossil", diet: "N/A", period: "Various", clue: "Footprints left by an animal." },
    { name: "Burrow", type: "Trace Fossil", diet: "N/A", period: "Various", clue: "Tunnel dug by an animal." },
    { name: "Amber", type: "Preservation", diet: "N/A", period: "Various", clue: "Hardened tree resin." },
    { name: "Petrified Wood", type: "Plant", diet: "N/A", period: "Various", clue: "Wood turned to stone." }
];

const fossilModes = [
    { mode: "Petrification", desc: "Organic material is turned into stone." },
    { mode: "Amber", desc: "Organism trapped in sticky tree resin." },
    { mode: "Cast", desc: "A mold filled with minerals, creating a replica." },
    { mode: "Mold", desc: "An impression or hole left in the rock." },
    { mode: "Trace Fossil", desc: "Evidence of activity (footprint, poop)." },
    { mode: "Carbonization", desc: "A thin film of carbon left on rock." },
    { mode: "Freezing", desc: "Organism preserved in ice." },
    { mode: "Mummification", desc: "Organism dried out in a desert or cave." },
    { mode: "Tar/Asphalt", desc: "Organism trapped in a sticky tar pit." }
];

// Static Rule Questions
const staticQuestions = [
    {
        question: "What is a fossil?",
        choices: ["A living dinosaur", "The preserved remains or traces of ancient life", "A special rock from space", "A drawing of a dinosaur"],
        answerIndex: 1,
        explanation: "Fossils are the remains or traces of plants and animals that lived a long time ago.",
        source: "Generic practice",
        difficulty: "easy"
    },
    {
        question: "How many students can be on a Dino Nuggets team?",
        choices: ["1 student", "Up to 2 students", "Up to 3 students", "As many as you want"],
        answerIndex: 1,
        explanation: "The rules say a team can have up to 2 students.",
        source: "2026 Division A Event Manual",
        difficulty: "easy"
    },
    {
        question: "Which of these is a 'Trace Fossil'?",
        choices: ["A dinosaur bone", "A shark tooth", "A footprint", "A piece of amber"],
        answerIndex: 2,
        explanation: "Trace fossils show activity, like footprints, burrows, or poop (coprolites)!",
        source: "2026 Division A Event Manual",
        difficulty: "medium"
    },
    {
        question: "If an insect gets stuck in sticky tree resin that hardens, what kind of fossil is it?",
        choices: ["Petrified Wood", "Amber", "Cast and Mold", "Frozen"],
        answerIndex: 1,
        explanation: "Amber is hardened tree resin that can trap small insects.",
        source: "2026 Division A Event Manual",
        difficulty: "medium"
    },
    {
        question: "What is a Coprolite?",
        choices: ["A type of shiny rock", "Fossilized poop", "A dinosaur egg", "A footprint"],
        answerIndex: 1,
        explanation: "Coprolites are fossilized dung (poop)! They help scientists know what dinosaurs ate.",
        source: "2026 Division A Event Manual",
        difficulty: "medium"
    },
    {
        question: "Which time period is NOT part of the Age of Dinosaurs (Mesozoic Era)?",
        choices: ["Triassic", "Jurassic", "Cretaceous", "Ice Age"],
        answerIndex: 3,
        explanation: "Dinosaurs lived during the Triassic, Jurassic, and Cretaceous periods.",
        source: "Generic practice",
        difficulty: "hard"
    }
];

let quizQuestions = []; // Will be populated dynamically

const matchingItems = [
    { id: 1, text: "Herbivore", type: "term", matchId: 1 },
    { id: 1, text: "Eats Plants", type: "def", matchId: 1 },
    
    { id: 2, text: "Carnivore", type: "term", matchId: 2 },
    { id: 2, text: "Eats Meat", type: "def", matchId: 2 },
    
    { id: 3, text: "Paleontologist", type: "term", matchId: 3 },
    { id: 3, text: "Studies Fossils", type: "def", matchId: 3 },
    
    { id: 4, text: "Extinct", type: "term", matchId: 4 },
    { id: 4, text: "No longer living", type: "def", matchId: 4 },
    
    { id: 5, text: "Aquatic", type: "term", matchId: 5 },
    { id: 5, text: "Lives in water", type: "def", matchId: 5 }
];

// --- Binder Data ---
const dinoBinderData = [
  {
    "name": "Acrocanthosaurus",
    "description": "Large bipedal carnivore, known for high neural spines forming a ridge down its back.",
    "footprints": "Large, 3-toed theropod tracks; famous trackways in Paluxy River, TX.",
    "teeth": "Curved, serrated, blade-like for slicing meat.",
    "body_structures": "High spines on vertebrae (muscle attachment or display), powerful arms, large skull.",
    "coprolites": "Rare; likely contained bone fragments given its diet.",
    "environment": "Coastal plains, floodplains, swamps.",
    "other_info": "State Dinosaur of Oklahoma; name means 'high-spined lizard'."
  },
  {
    "name": "Allosaurus",
    "description": "Large bipedal carnivore, the most common predator of the Late Jurassic.",
    "footprints": "3-toed, clawed, typical theropod shape.",
    "teeth": "Serrated, recurved, like steak knives; shed frequently.",
    "body_structures": "Two small horns above eyes, large powerful arms with 3 fingers.",
    "coprolites": "Carnivore scat; rare direct association.",
    "environment": "Semi-arid plains, open forests (Morrison Formation).",
    "other_info": "Name means 'different lizard'; often called the 'Lion of the Jurassic'."
  },
  {
    "name": "Ankylosaurus",
    "description": "Heavily armored quadrupedal herbivore, built like a living tank.",
    "footprints": "Rounded, 5-toed front, 4-toed hind; seldom preserved clearly.",
    "teeth": "Small, leaf-shaped, designed for cropping plants, not chewing.",
    "body_structures": "Osteoderms (bony armor), massive tail club, wide low body.",
    "coprolites": "Likely amorphous plant matter; rare.",
    "environment": "Coastal plains, forests.",
    "other_info": "Last and largest of the ankylosaurs; tail club could shatter bone."
  },
  {
    "name": "Apatosaurus",
    "description": "Massive long-necked quadrupedal herbivore.",
    "footprints": "Large, round/horseshoe-shaped front (1 claw), oval hind (3 claws).",
    "teeth": "Peg-like or pencil-like, only at the front of the jaw for stripping leaves.",
    "body_structures": "Long neck, whip-like tail, massive pillar-like legs.",
    "coprolites": "Large piles of plant material; rare.",
    "environment": "Semi-arid plains, open woodlands.",
    "other_info": "Formerly known as Brontosaurus (though Brontosaurus is now considered valid by some, they are distinct genera)."
  },
  {
    "name": "Archaeopteryx",
    "description": "Small, bird-like dinosaur; the 'first bird'.",
    "footprints": "Small, 3 toes pointing forward, 1 backward (anisodactyl).",
    "teeth": "Small, conical, sharp teeth (unlike modern birds).",
    "body_structures": "Feathers (flight and tail), wings with claws, long bony tail, wishbone.",
    "coprolites": "Small pellets containing insect or small lizard remains.",
    "environment": "Tropical lagoons, islands (Solnhofen Limestone).",
    "other_info": "Transitional fossil between non-avian dinosaurs and birds; found in Germany."
  },
  {
    "name": "Coelophysis",
    "description": "Small, slender, agile bipedal carnivore.",
    "footprints": "Small, 3-toed tracks (ichnogenus Grallator).",
    "teeth": "Small, sharp, serrated, recurved.",
    "body_structures": "Hollow bones, long neck and tail, 4 fingers (only 3 functional).",
    "coprolites": "Found containing small reptile bones (debunking cannibalism theory).",
    "environment": "Desert, floodplains.",
    "other_info": "State Fossil of New Mexico; thousands found together at Ghost Ranch."
  },
  {
    "name": "Deinonychus",
    "description": "Wolf-sized, agile, bird-like predator; 'Terrible Claw'.",
    "footprints": "2-toed prints (walked on 3rd and 4th toes, 2nd toe held up).",
    "teeth": "Serrated, backward-curving.",
    "body_structures": "Large sickle-shaped claw on second toe, stiffened tail for balance, feathers.",
    "coprolites": "Carnivore; rare.",
    "environment": "Floodplains, forests, swamps.",
    "other_info": "Discovery sparked the 'Dinosaur Renaissance' (warm-blooded theory); inspired Jurassic Park 'raptors'."
  },
  {
    "name": "Diplodocus",
    "description": "Very long, slender sauropod herbivore.",
    "footprints": "Large, round front, oval hind; often no tail drag marks.",
    "teeth": "Peg-like, forward-pointing, only at front of mouth.",
    "body_structures": "Extremely long whip-like tail, long neck, spines along back.",
    "coprolites": "Plant matter.",
    "environment": "Semi-arid plains.",
    "other_info": "One of the longest dinosaurs; tail tip could potentially break the sound barrier."
  },
  {
    "name": "Iguanodon",
    "description": "Large, bulky herbivore that could walk on 2 or 4 legs.",
    "footprints": "3-toed, broad, blunt claws; often handprints found nearby.",
    "teeth": "Leaf-shaped with serrated edges, similar to an iguana.",
    "body_structures": "Conical thumb spike, horny beak, ossified tendons in tail.",
    "coprolites": "Plant material.",
    "environment": "Forests, swamps, floodplains.",
    "other_info": "One of the first three dinosaurs named; thumb spike was originally mistaken for a nose horn."
  },
  {
    "name": "Parasaurolophus",
    "description": "Duck-billed herbivore (hadrosaur) with a distinctive crest.",
    "footprints": "3-toed, broad, blunt; similar to other hadrosaurs.",
    "teeth": "Dental batteries containing hundreds of grinding teeth.",
    "body_structures": "Long, tubular crest extending backward from skull, duck-like bill.",
    "coprolites": "Woody plant material.",
    "environment": "Floodplains, forests.",
    "other_info": "Crest was hollow and likely used as a resonating chamber for making sounds."
  },
  {
    "name": "Plateosaurus",
    "description": "Bipedal prosauropod herbivore; ancestor to giant sauropods.",
    "footprints": "4-toed (walking), rarely handprints.",
    "teeth": "Leaf-shaped, serrated, for shredding tough plants.",
    "body_structures": "Long neck, strong tail, large thumb claw, small head.",
    "coprolites": "Plant matter.",
    "environment": "Desert, dry semi-arid environments.",
    "other_info": "One of the first large dinosaurs; often found in mass accumulations in Europe."
  },
  {
    "name": "Stegosaurus",
    "description": "Large herbivore with plates and tail spikes.",
    "footprints": "5-toed front, 3-toed hind.",
    "teeth": "Small, triangular, flat, leaf-shaped; weak chewing ability.",
    "body_structures": "Two rows of bony plates on back, four spikes on tail (thagomizer).",
    "coprolites": "Plant material.",
    "environment": "Semi-arid plains, open brush.",
    "other_info": "Brain was the size of a walnut; plates likely for display or thermoregulation."
  },
  {
    "name": "Triceratops",
    "description": "Large, three-horned quadrupedal herbivore.",
    "footprints": "5-toed front, 4-toed hind; resembles giant rhino tracks.",
    "teeth": "Dental batteries with shearing teeth for tough vegetation.",
    "body_structures": "Three horns (two brow, one nose), large bony frill, parrot-like beak.",
    "coprolites": "Fibrous plant material.",
    "environment": "Coastal plains, forests.",
    "other_info": "State Fossil of South Dakota; frill likely used for display or defense against T. rex."
  },
  {
    "name": "Tyrannosaurus rex",
    "description": "Massive bipedal carnivore; apex predator.",
    "footprints": "Massive, 3-toed, clawed; ichnogenus Tyrannosauripus.",
    "teeth": "Thick, banana-shaped, serrated, designed to crush bone.",
    "body_structures": "Tiny two-fingered arms, massive skull, binocular vision.",
    "coprolites": "Famous coprolites found containing pulverized bone fragments.",
    "environment": "Forests, floodplains, humid subtropical.",
    "other_info": "Had the strongest bite force of any land animal; name means 'Tyrant Lizard King'."
  },
  {
    "name": "Velociraptor",
    "description": "Small, bird-like, agile carnivore.",
    "footprints": "2-toed (walking), similar to Deinonychus but smaller.",
    "teeth": "Sharp, serrated, recurved.",
    "body_structures": "Sickle claw on second toe, feathers, long stiff tail, long skull.",
    "coprolites": "Carnivore; rare.",
    "environment": "Desert (Gobi Desert), sand dunes.",
    "other_info": "Actually the size of a turkey (much smaller than in movies); famous 'Fighting Dinosaurs' fossil."
  }
];

// --- Dynamic Question Generation ---

function generateDynamicQuiz() {
    const questions = [...staticQuestions]; // Start with static rules questions
    
    // Generate Diet Questions
    dinoData.forEach(item => {
        if (item.diet !== "N/A" && item.diet !== "Various") {
            questions.push({
                question: `What kind of eater was the ${item.name}?`,
                choices: generateOptions(item.diet, ["Carnivore", "Herbivore", "Omnivore", "Filter Feeder", "Insectivore"]),
                answerIndex: 0, // We will shuffle choices later, but for now let's handle it in the object creation or shuffle logic
                correctAnswer: item.diet,
                explanation: `${item.name} was a ${item.diet}.`,
                source: "Official List Analysis",
                difficulty: "medium"
            });
        }
    });

    // Generate Period Questions
    dinoData.forEach(item => {
        if (item.period !== "Various" && item.period !== "Mesozoic" && item.period !== "Paleozoic") {
             questions.push({
                question: `In which time period did the ${item.name} live?`,
                choices: generateOptions(item.period, ["Triassic", "Jurassic", "Cretaceous"]),
                answerIndex: 0,
                correctAnswer: item.period,
                explanation: `${item.name} lived during the ${item.period} period.`,
                source: "Official List Analysis",
                difficulty: "hard"
            });
        }
    });

    // Generate Clue Questions
    dinoData.forEach(item => {
        questions.push({
            question: `Which creature matches this description: "${item.clue}"?`,
            choices: generateOptions(item.name, dinoData.map(d => d.name)),
            answerIndex: 0,
            correctAnswer: item.name,
            explanation: `The clue describes ${item.name}.`,
            source: "Official List Clues",
            difficulty: "medium"
        });
    });

    return questions;
}

// Helper to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- Station Run Logic ---

let stations = [];
let currentStationIndex = 0;
let stationScore = 0;
let stationTimerInterval;
let stationSeconds = 0;

function showModeSelection() {
    document.getElementById('mode-selection').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('matching-container').classList.add('hidden');
    document.getElementById('station-container').classList.add('hidden');
    clearInterval(stationTimerInterval);
}

function startStationRun() {
    document.getElementById('mode-selection').classList.add('hidden');
    document.getElementById('station-container').classList.remove('hidden');
    
    generateStations();
    currentStationIndex = 0;
    stationScore = 0;
    stationSeconds = 0;
    
    updateStationTimer();
    stationTimerInterval = setInterval(() => {
        stationSeconds++;
        updateStationTimer();
    }, 1000);
    
    showStation(0);
}

function updateStationTimer() {
    const mins = Math.floor(stationSeconds / 60).toString().padStart(2, '0');
    const secs = (stationSeconds % 60).toString().padStart(2, '0');
    document.getElementById('station-timer').textContent = `Time: ${mins}:${secs}`;
}

function quitStationRun() {
    if(confirm("Are you sure you want to quit the station run?")) {
        showModeSelection();
    }
}

function generateStations() {
    stations = [];
    const totalStations = 10;
    
    for (let i = 0; i < totalStations; i++) {
        const typeRoll = Math.random();
        let station = {};
        
        if (typeRoll < 0.4) {
            // ID Station
            const item = dinoData[Math.floor(Math.random() * dinoData.length)];
            station = {
                type: "Identification",
                question: "Identify this specimen based on the clue.",
                visual: `[Clue]: ${item.clue}`,
                correct: item.name,
                options: generateOptions(item.name, dinoData.map(d => d.name)),
                explanation: `${item.name} is the correct answer.`
            };
        } else if (typeRoll < 0.7) {
            // Diet Station (Only for Dinos/Reptiles)
            const dinos = dinoData.filter(d => d.type === "Dinosaur" || d.type === "Reptile");
            const item = dinos[Math.floor(Math.random() * dinos.length)];
            station = {
                type: "Diet Analysis",
                question: `What was the diet of the ${item.name}?`,
                visual: `[Specimen]: ${item.name}`,
                correct: item.diet,
                options: ["Carnivore", "Herbivore", "Omnivore", "Insectivore"],
                explanation: `${item.name} was a ${item.diet}.`
            };
        } else {
            // Fossil Mode Station
            const mode = fossilModes[Math.floor(Math.random() * fossilModes.length)];
            station = {
                type: "Fossilization",
                question: "Identify the mode of preservation.",
                visual: `[Description]: ${mode.desc}`,
                correct: mode.mode,
                options: generateOptions(mode.mode, fossilModes.map(m => m.mode)),
                explanation: `This describes ${mode.mode}.`
            };
        }
        stations.push(station);
    }
}

function generateOptions(correct, allOptions) {
    const opts = [correct];
    while (opts.length < 4) {
        const rand = allOptions[Math.floor(Math.random() * allOptions.length)];
        if (!opts.includes(rand)) opts.push(rand);
    }
    return opts.sort(() => Math.random() - 0.5);
}

function showStation(index) {
    const station = stations[index];
    document.getElementById('station-number').textContent = `Station ${index + 1} of ${stations.length}`;
    document.getElementById('station-type').textContent = station.type;
    document.getElementById('station-visual').textContent = station.visual;
    document.getElementById('station-question').textContent = station.question;
    
    const optionsContainer = document.getElementById('station-options');
    optionsContainer.innerHTML = '';
    
    document.getElementById('station-feedback').className = 'hidden';
    document.getElementById('station-next-btn').classList.add('hidden');
    
    station.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'station-btn';
        btn.textContent = opt;
        btn.onclick = () => checkStationAnswer(btn, opt, station);
        optionsContainer.appendChild(btn);
    });
}

function checkStationAnswer(btn, selected, station) {
    if (document.getElementById('station-next-btn').classList.contains('hidden') === false) return; // Already answered
    
    const isCorrect = selected === station.correct;
    const feedback = document.getElementById('station-feedback');
    
    if (isCorrect) {
        btn.classList.add('correct');
        feedback.textContent = "Correct! " + station.explanation;
        feedback.className = 'correct';
        stationScore++;
    } else {
        btn.classList.add('incorrect');
        feedback.textContent = "Incorrect. " + station.explanation;
        feedback.className = 'incorrect';
        
        // Highlight correct
        const buttons = document.querySelectorAll('.station-btn');
        buttons.forEach(b => {
            if (b.textContent === station.correct) b.classList.add('correct');
        });
    }
    
    feedback.classList.remove('hidden');
    
    const nextBtn = document.getElementById('station-next-btn');
    nextBtn.classList.remove('hidden');
    
    if (currentStationIndex === stations.length - 1) {
        nextBtn.textContent = "Finish Run";
        nextBtn.onclick = finishStationRun;
    } else {
        nextBtn.textContent = "Next Station";
        nextBtn.onclick = () => {
            currentStationIndex++;
            showStation(currentStationIndex);
        };
    }
}

function finishStationRun() {
    clearInterval(stationTimerInterval);
    const container = document.getElementById('station-container');
    container.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <h2>Station Run Complete!</h2>
            <p style="font-size: 1.5em; margin: 20px 0;">Score: ${stationScore} / ${stations.length}</p>
            <p>Time: ${document.getElementById('station-timer').textContent.replace('Time: ', '')}</p>
            <button onclick="location.reload()" class="action-btn primary-btn">Return to Menu</button>
        </div>
    `;
}

// --- Quiz Logic ---

let currentQuestionIndex = 0;
let score = 0;
let quizCompleted = false;

function initQuiz() {
    document.getElementById('mode-selection').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    
    // Generate and Shuffle Questions
    const allQuestions = generateDynamicQuiz();
    // Pick 10 random questions
    quizQuestions = shuffleArray(allQuestions).slice(0, 10);
    
    // Fix answerIndex for shuffled choices
    quizQuestions.forEach(q => {
        if (q.correctAnswer) {
            // It's a dynamic question, we need to ensure choices are shuffled and answerIndex is correct
            // Note: generateOptions already returns a shuffled array where the first element was correct, 
            // but we need to re-shuffle to not always have the first option be correct.
            // However, generateOptions implementation in previous step:
            // function generateOptions(correct, allOptions) { const opts = [correct]; ... return opts.sort(...) }
            // So opts are already shuffled. We just need to find the index.
            q.answerIndex = q.choices.indexOf(q.correctAnswer);
        }
    });

    currentQuestionIndex = 0;
    score = 0;
    quizCompleted = false;
    showQuestion(currentQuestionIndex);
    
    document.getElementById('check-answer-btn').classList.remove('hidden');
    document.getElementById('next-question-btn').classList.add('hidden');
    document.getElementById('score-display').textContent = `Score: 0`;
    
    // Add event listeners
    document.getElementById('check-answer-btn').onclick = checkAnswer;
    document.getElementById('next-question-btn').onclick = nextQuestion;
}

function showQuestion(index) {
    const q = quizQuestions[index];
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices-container');
    const feedback = document.getElementById('feedback');
    
    questionText.textContent = `${index + 1}. ${q.question}`;
    choicesContainer.innerHTML = '';
    feedback.className = 'hidden';
    feedback.textContent = '';
    
    q.choices.forEach((choice, i) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.onclick = () => selectChoice(i);
        choicesContainer.appendChild(btn);
    });
    
    document.getElementById('check-answer-btn').classList.remove('hidden');
    document.getElementById('next-question-btn').classList.add('hidden');
    document.getElementById('check-answer-btn').disabled = true; // Disable until selection
}

let selectedChoiceIndex = -1;

function selectChoice(index) {
    if (document.getElementById('check-answer-btn').classList.contains('hidden')) return; // Already answered
    
    selectedChoiceIndex = index;
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
    
    document.getElementById('check-answer-btn').disabled = false;
}

function checkAnswer() {
    if (selectedChoiceIndex === -1) return;
    
    const q = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedChoiceIndex === q.answerIndex;
    const buttons = document.querySelectorAll('.choice-btn');
    const feedback = document.getElementById('feedback');
    
    buttons[selectedChoiceIndex].classList.remove('selected');
    
    if (isCorrect) {
        buttons[selectedChoiceIndex].classList.add('correct');
        feedback.textContent = "Correct! " + q.explanation;
        feedback.className = 'correct';
        score++;
    } else {
        buttons[selectedChoiceIndex].classList.add('incorrect');
        buttons[q.answerIndex].classList.add('correct'); // Show correct answer
        feedback.textContent = "Not quite. " + q.explanation;
        feedback.className = 'incorrect';
    }
    
    document.getElementById('score-display').textContent = `Score: ${score} / ${quizQuestions.length}`;
    
    document.getElementById('check-answer-btn').classList.add('hidden');
    document.getElementById('next-question-btn').classList.remove('hidden');
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
        document.getElementById('next-question-btn').textContent = "Finish Quiz";
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        selectedChoiceIndex = -1;
        showQuestion(currentQuestionIndex);
    } else {
        // Quiz Finished
        const quizUi = document.getElementById('quiz-ui');
        quizUi.innerHTML = `
            <div style="text-align: center;">
                <h3>Great Job!</h3>
                <p>You finished the practice quiz.</p>
                <p><strong>Final Score: ${score} out of ${quizQuestions.length}</strong></p>
                <button onclick="location.reload()" style="background-color: #2b7a78; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Try Again</button>
            </div>
        `;
    }
}

// --- Matching Game Logic ---

let selectedCards = [];
let matchedPairs = 0;

function initMatchingGame() {
    document.getElementById('mode-selection').classList.add('hidden');
    document.getElementById('matching-container').classList.remove('hidden');

    const gameContainer = document.getElementById('matching-game');
    gameContainer.innerHTML = ''; // Clear previous game
    selectedCards = [];
    matchedPairs = 0;
    document.getElementById('matching-feedback').classList.add('hidden');

    // Shuffle items
    const shuffledItems = [...matchingItems].sort(() => Math.random() - 0.5);
    
    shuffledItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.textContent = item.text;
        card.dataset.id = item.id;
        card.dataset.uniqueId = Math.random().toString(36).substr(2, 9); // Unique ID for DOM element
        card.onclick = () => handleCardClick(card);
        gameContainer.appendChild(card);
    });
}

function handleCardClick(card) {
    if (card.classList.contains('matched') || card.classList.contains('selected')) return;
    if (selectedCards.length >= 2) return;
    
    card.classList.add('selected');
    selectedCards.push(card);
    
    if (selectedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    const isMatch = card1.dataset.id === card2.dataset.id;
    const feedback = document.getElementById('matching-feedback');
    
    if (isMatch) {
        card1.classList.remove('selected');
        card2.classList.remove('selected');
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        
        feedback.textContent = "It's a match!";
        feedback.className = 'correct';
        feedback.classList.remove('hidden');
        
        if (matchedPairs === matchingItems.length / 2) {
            feedback.textContent = "You matched them all! Awesome!";
        }
        
        setTimeout(() => {
             if (matchedPairs !== matchingItems.length / 2) feedback.classList.add('hidden');
        }, 1500);
        
        selectedCards = [];
    } else {
        feedback.textContent = "Try again!";
        feedback.className = 'incorrect';
        feedback.classList.remove('hidden');
        
        setTimeout(() => {
            card1.classList.remove('selected');
            card2.classList.remove('selected');
            feedback.classList.add('hidden');
            selectedCards = [];
        }, 1000);
    }
}

// --- Binder Logic ---

let allDinoData = []; // Will be loaded from dino_data.json at runtime

function renderBinder(data = allDinoData) {
    const container = document.getElementById('binder-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!data || data.length === 0) {
        container.innerHTML = '<p style="text-align:center; width:100%;">No dinosaurs found matching your criteria.</p>';
        return;
    }
    
    data.forEach(dino => {
        const card = document.createElement('div');
        card.className = 'binder-card';
        
        // Image placeholder logic
        const images = dino.images || [];
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0;">${dino.name}</h3>
                <span style="background: #00d4ff; color: #000; padding: 6px 12px; border-radius: 20px; font-size: 0.85em; font-weight: 600;">${dino.period || 'Unknown'}</span>
            </div>
            <div class="binder-image-placeholder"></div>
            <div class="binder-content">
                <div class="binder-details">
                    <p><strong>Description:</strong> ${dino.description}</p>
                    <p><strong>Footprints:</strong> ${dino.footprints}</p>
                    <p><strong>Teeth:</strong> ${dino.teeth}</p>
                    <p><strong>Body Structures:</strong> ${dino.body_structures}</p>
                    <p><strong>Coprolites:</strong> ${dino.coprolites}</p>
                    <p><strong>Environment:</strong> ${dino.environment}</p>
                    <p><strong>Other Info:</strong> ${dino.other_info}</p>
                </div>
            </div>
        `;
        
        // After inserting basic HTML, populate image placeholder
        const placeholder = card.querySelector('.binder-image-placeholder');
        if (!images || images.length === 0) {
            placeholder.textContent = `[Image: ${dino.name}]`;
        } else if (images.length === 1) {
            const img = document.createElement('img');
            img.src = images[0];
            img.alt = dino.name;
            img.onerror = function() { this.style.display='none'; this.parentNode.textContent = `[Image: ${dino.name}]`; };
            placeholder.appendChild(img);
        } else {
            // Carousel
            const carousel = document.createElement('div');
            carousel.className = 'binder-image-carousel';

            const prev = document.createElement('button');
            prev.className = 'carousel-prev';
            prev.textContent = '◀';

            const img = document.createElement('img');
            img.alt = dino.name;
            img.src = images[0];
            img.onerror = function() { this.style.display='none'; };

            const next = document.createElement('button');
            next.className = 'carousel-next';
            next.textContent = '▶';

            let idx = 0;
            prev.onclick = () => {
                idx = (idx - 1 + images.length) % images.length;
                img.src = images[idx];
            };
            next.onclick = () => {
                idx = (idx + 1) % images.length;
                img.src = images[idx];
            };

            carousel.appendChild(prev);
            carousel.appendChild(img);
            carousel.appendChild(next);
            placeholder.appendChild(carousel);
        }

        // Details toggle and content
        const toggleRow = document.createElement('div');
        toggleRow.style.display = 'flex';
        toggleRow.style.justifyContent = 'space-between';
        toggleRow.style.alignItems = 'center';
        toggleRow.style.marginTop = '10px';

        const detailsBtn = document.createElement('button');
        detailsBtn.className = 'details-toggle';
        detailsBtn.textContent = 'Details ▸';

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'details-content';
        // Render details with simple formatting (paragraphs & bullet lists)
        detailsDiv.innerHTML = formatDetails(dino.details);

        // Handle references (array of URLs)
        let refDiv = null;
        if (dino.references && Array.isArray(dino.references) && dino.references.length) {
            refDiv = document.createElement('div');
            refDiv.className = 'binder-references';
            const strong = document.createElement('strong');
            strong.textContent = 'References: ';
            refDiv.appendChild(strong);

            dino.references.forEach((url, idx) => {
                const a = document.createElement('a');
                a.href = url;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.textContent = url;
                refDiv.appendChild(a);
                if (idx < dino.references.length - 1) {
                    refDiv.appendChild(document.createTextNode(' · '));
                }
            });
        }

        detailsBtn.onclick = () => {
            detailsDiv.classList.toggle('visible');
            detailsBtn.textContent = detailsDiv.classList.contains('visible') ? 'Details ▾' : 'Details ▸';
        };

        toggleRow.appendChild(detailsBtn);
        const editNote = document.createElement('small');
        editNote.style.color = '#aaa';
        editNote.textContent = 'Edit via chat';
        toggleRow.appendChild(editNote);

        card.appendChild(toggleRow);
        card.appendChild(detailsDiv);
        if (refDiv) card.appendChild(refDiv);

        container.appendChild(card);
    });
}

function filterBinder() {
    const searchText = document.getElementById('binder-search').value.toLowerCase();
    const dietFilter = document.getElementById('binder-diet-filter').value;
    const periodFilter = document.getElementById('binder-period-filter').value;

    const filteredData = allDinoData.filter(dino => {
        // Find corresponding entry in dinoData for metadata (diet only)
        const meta = dinoData.find(d => d.name === dino.name);
        
        const matchesSearch = dino.name.toLowerCase().includes(searchText) || 
                              dino.description.toLowerCase().includes(searchText);
        
        const matchesDiet = dietFilter === 'all' || (meta && meta.diet === dietFilter) || dino.diet === dietFilter;
        const matchesPeriod = periodFilter === 'all' || dino.period === periodFilter;

        return matchesSearch && matchesDiet && matchesPeriod;
    });
    
    renderBinder(filteredData);
}

// --- Helpers for details formatting ---
function escapeHtml(unsafe) {
    return unsafe.replace(/[&<>\"']/g, function (m) {
        return ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\'':"&#039;"})[m];
    });
}

function formatDetails(text) {
    if (!text || !text.trim()) return '[No details yet]';
    // Split into paragraphs by double newlines
    const paras = text.split(/\n\n+/);
    const out = paras.map(p => {
        const lines = p.split(/\n+/).map(l => l.trim());
        // If all lines start with '- ' treat as list
        if (lines.every(l => l.startsWith('- '))) {
            const items = lines.map(l => '<li>' + escapeHtml(l.replace(/^[-\s]+/, '')) + '</li>').join('');
            return '<ul>' + items + '</ul>';
        }
        return '<p>' + escapeHtml(lines.join(' ')) + '</p>';
    });
    return out.join('');
}

// Study resources used by the Study Plan UI
const studyResources = {
    'rules': `
        <h3>Read the "Dino Nuggets" rules 📋</h3>
        <p>Read the rules with an adult and make a checklist of allowed items: <strong>pencils</strong>, one field guide, and a calm partner. Safety first — always listen to the judge and follow time limits.</p>
        <p><strong>Try this:</strong> Set a 2-minute timer and see who can list the three most important rules.</p>
    `,

    'fossils': `
        <h3>What is a fossil? 🦴</h3>
        <p>Fossils are clues from long ago — the remains or traces of plants and animals that lived millions of years before us. They can be bones, teeth, footprints, or tiny things stuck in amber.</p>
        <p><strong>Try this (with an adult):</strong> Press a leaf into clay to make a mold. Let it dry or bake with an adult's help, then paint it — you made your own "fossil"!</p>
    `,

    'fossil-types': `
        <h3>Fossil Types 🔍</h3>
        <ul>
            <li><strong>Amber</strong> — tiny creatures trapped in sticky tree sap (like a time capsule).</li>
            <li><strong>Molds & casts</strong> — when a shape is left behind and later filled in by minerals.</li>
            <li><strong>Petrified</strong> — the real thing slowly turns to rock over ages.</li>
        </ul>
        <p><strong>Try this:</strong> Make three index cards with pictures (Amber / Mold & Cast / Petrified) and turn them into a matching game.</p>
    `,

    'invertebrates': `
        <h3>Invertebrates 🐚</h3>
        <p>Invertebrates are animals <em>without</em> backbones — like insects, snails, and squid. Many ancient invertebrates left fossils we study today.</p>
        <p><strong>Try this:</strong> Look through the binder and pick three invertebrates. Can you spot which ones lived in the ocean?</p>
    `,

    'geologic-time': `
        <h3>Geologic Time ⏳</h3>
        <p>Think of Earth's history like a super-long story with chapters: <strong>Triassic</strong> → <strong>Jurassic</strong> → <strong>Cretaceous</strong>. Different dinosaurs appear in different chapters.</p>
        <p><strong>Fun test:</strong> Pick a dinosaur from the binder and find which chapter it belongs to. Use the binder search to help!</p>
        <p><button class="link-btn" onclick="goToBinderAll()">Open binder</button></p>
    `
};

function openResource(key) {
    const body = document.getElementById('study-modal-body');
    const modal = document.getElementById('study-modal');
    if (!body || !modal) return alert('Open: ' + key);
    body.innerHTML = studyResources[key] || '<p>No info available.</p>';
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
}

function closeStudyModal() {
    const modal = document.getElementById('study-modal');
    if (modal) { modal.classList.remove('visible'); modal.setAttribute('aria-hidden', 'true'); }
}

function showBinderImagesOnly() {
    const filtered = allDinoData.filter(d => d.images && d.images.length);
    renderBinder(filtered);
    document.getElementById('binder').scrollIntoView({behavior: 'smooth'});
}

function goToBinderAll() {
    renderBinder(allDinoData);
    document.getElementById('binder').scrollIntoView({behavior: 'smooth'});
}

function filterByDiet(diet) {
    document.getElementById('binder-diet-filter').value = diet;
    document.getElementById('binder-search').value = '';
    filterBinder();
    document.getElementById('binder').scrollIntoView({behavior: 'smooth'});
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: 'smooth'});
}

// --- Initialization & reload helper ---

function loadBinderData() {
    fetch('dino_data.json')
        .then(res => res.json())
        .then(data => {
            allDinoData = data;
            renderBinder(allDinoData);
        })
        .catch(err => {
            console.error('Failed to load dino_data.json:', err);
            // Fallback to embedded binder data if fetch fails
            allDinoData = dinoBinderData;
            renderBinder(allDinoData);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial load
    loadBinderData();

    // Reload button
    const reloadBtn = document.getElementById('reload-binder');
    if (reloadBtn) reloadBtn.onclick = () => {
        reloadBtn.disabled = true;
        reloadBtn.textContent = 'Reloading...';
        loadBinderData();
        setTimeout(() => { reloadBtn.disabled = false; reloadBtn.textContent = '🔄 Reload Binder Data'; }, 800);
    };
});
