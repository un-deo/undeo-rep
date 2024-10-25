//document.getElementById("word").innerHTML += "<td>__</td>"
const hangmanWords = [
  "abandon",
  "ability",
  "absence",
  "academy",
  "accident",
  "account",
  "accuracy",
  "achieve",
  "activity",
  "addition",
  "address",
  "adjust",
  "advance",
  "advice",
  "affect",
  "afford",
  "against",
  "aircraft",
  "airport",
  "alcohol",
  "alliance",
  "already",
  "amazing",
  "ambition",
  "analysis",
  "announce",
  "anxiety",
  "apology",
  "apparent",
  "appeal",
  "approach",
  "approve",
  "argument",
  "arrange",
  "arrival",
  "article",
  "artist",
  "aspects",
  "assault",
  "assume",
  "athlete",
  "attempt",
  "attract",
  "average",
  "backpack",
  "balance",
  "balloon",
  "barrier",
  "battery",
  "because",
  "bedroom",
  "believe",
  "benefit",
  "besides",
  "between",
  "bicycle",
  "biology",
  "birthday",
  "blanket",
  "blessing",
  "boiling",
  "boredom",
  "bottle",
  "boundary",
  "bravery",
  "breadth",
  "brilliant",
  "building",
  "business",
  "cabinet",
  "campaign",
  "capture",
  "careful",
  "carriage",
  "carrier",
  "caution",
  "ceiling",
  "celebrate",
  "ceremony",
  "certain",
  "chamber",
  "channel",
  "charity",
  "charming",
  "chicken",
  "circuit",
  "citizen",
  "clarity",
  "classic",
  "climate",
  "clothes",
  "collect",
  "college",
  "combine",
  "comfort",
  "command",
  "comment",
  "common",
  "company",
  "compare",
  "compete",
  "complete",
  "concern",
  "concert",
  "conduct",
  "confirm",
  "connect",
  "consider",
  "contact",
  "contain",
  "content",
  "contest",
  "control",
  "convert",
  "cooking",
  "courage",
  "creature",
  "criminal",
  "critique",
  "curious",
  "customer",
  "database",
  "daylight",
  "decide",
  "declare",
  "default",
  "defense",
  "deliver",
  "demand",
  "density",
  "departure",
  "deposit",
  "describe",
  "deserve",
  "desire",
  "destroy",
  "develop",
  "diamond",
  "disagree",
  "disaster",
  "discuss",
  "disease",
  "dismiss",
  "display",
  "distance",
  "district",
  "diverse",
  "document",
  "domestic",
  "dominate",
  "doorway",
  "drawing",
  "driving",
  "dynamic",
  "earlier",
  "earnest",
  "economy",
  "edition",
  "educate",
  "elastic",
  "elegant",
  "element",
  "emotion",
  "emperor",
  "emphasis",
  "employee",
  "endless",
  "enforce",
  "engaged",
  "enhance",
  "enquiry",
  "episode",
  "equally",
  "essence",
  "establish",
  "estimate",
  "evening",
  "evidence",
  "exciting",
  "exercise",
  "exhibit",
  "expense",
  "explain",
  "explore",
  "exposure",
  "express",
  "factory",
  "faculty",
  "failure",
  "familiar",
  "fashion",
  "feature",
  "federal",
  "feeling",
  "fiction",
  "finance",
  "finding",
  "fitness",
  "floating",
  "football",
  "forever",
  "forgive",
  "fortune",
  "freedom",
  "frequent",
  "further",
  "gallery",
  "garment",
  "general",
  "generate",
  "generous",
  "genius",
  "gesture",
  "glowing",
  "gravity",
  "greeting",
  "grocery",
  "growing",
  "habitat",
  "harmony",
  "healthy",
  "hearing",
  "helpful",
  "heritage",
  "history",
  "holiday",
  "honesty",
  "horizon",
  "hospital",
  "hostage",
  "humanity",
  "humidity",
  "hunting",
  "husband",
  "identity",
  "illegal",
  "illness",
  "imagine",
  "immediate",
  "improve",
  "include",
  "income",
  "increase",
  "incredible",
  "indicate",
  "industry",
  "inform",
  "initial",
  "innocent",
  "inquiry",
  "insight",
  "inspire",
  "install",
  "instance",
  "institute",
  "intense",
  "interest",
  "internal",
  "interview",
  "invasion",
  "invest",
  "isolate",
  "jewelry",
  "journal",
  "justice",
  "justify",
  "kitchen",
  "kingdom",
  "knowledge",
  "landing",
  "landscape",
  "laughter",
  "learning",
  "library",
  "lifelong",
  "lighten",
  "limited",
  "literary",
  "location",
  "loyalty",
  "machine",
  "madness",
  "manager",
  "mandate",
  "marriage",
  "massive",
  "material",
  "maximum",
  "meaning",
  "measure",
  "medical",
  "meeting",
  "mention",
  "message",
  "midnight",
  "military",
  "mineral",
  "minimum",
  "mission",
  "mistake",
  "mixture",
  "momentum",
  "monitor",
  "monthly",
  "morning",
  "musical",
  "mystery",
  "narrative",
  "national",
  "natural",
  "navigate",
  "network",
  "nominate",
  "nothing",
  "notorious",
  "novelist",
  "nuclear",
  "observe",
  "obstacle",
  "obvious",
  "offering",
  "officer",
  "ongoing",
  "operate",
  "opinion",
  "opponent",
  "opposite",
  "optimum",
  "organic",
  "original",
  "outcome",
  "outdoor",
  "outline",
  "outlook",
  "outside",
  "overall",
  "overcome",
  "painting",
  "pandemic",
  "parallel",
  "parking",
  "passage",
  "passion",
  "patient",
  "pattern",
  "payment",
  "penalty",
  "perfect",
  "perform",
  "personal",
  "persuade",
  "picture",
  "pioneer",
  "platform",
  "pleasant",
  "pleasure",
  "plumber",
  "popular",
  "portion",
  "possess",
  "postpone",
  "poverty",
  "precious",
  "prepare",
  "present",
  "pressure",
  "prevent",
  "primary",
  "princess",
  "priority",
  "privacy",
  "problem",
  "process",
  "produce",
  "profile",
  "program",
  "project",
  "promise",
  "prospect",
  "protect",
  "protest",
  "provide",
  "publish",
  "purpose",
  "pursuit",
  "quality",
  "quarter",
  "question",
  "quickly",
  "quietly",
  "radiation",
  "railway",
  "reaction",
  "rebuild",
  "receive",
  "recover",
  "reflect",
  "refugee",
  "regular",
  "rehearse",
  "release",
  "reliable",
  "relevant",
  "relocate",
  "remember",
  "reminder",
  "renounce",
  "replace",
  "request",
  "require",
  "rescue",
  "reserve",
  "respect",
  "respond",
  "restore",
  "retailer",
  "revenue",
  "reverse",
  "revive",
  "risky",
  "romantic",
  "running",
  "satisfy",
  "schedule",
  "science",
  "seaside",
  "secrecy",
  "section",
  "security",
  "sensible",
  "sentence",
  "serious",
  "service",
  "setting",
  "several",
  "shallow",
  "shortage",
  "shoulder",
  "silence",
  "similar",
  "sincere",
  "singer",
  "situation",
  "slightly",
  "software",
  "soldier",
  "solution",
  "somehow",
  "someday",
  "speaker",
  "special",
  "spectrum",
  "speeding",
  "spending",
  "spiritual",
  "splendid",
  "spokesman",
  "sponsor",
  "station",
  "stealing",
  "strategy",
  "strength",
  "striking",
  "student",
  "struggle",
  "subject",
  "suggest",
  "summary",
  "supplier",
  "support",
  "surface",
  "surprise",
  "survival",
  "sweeping",
  "sympathy",
  "talented",
  "teaching",
  "teenager",
  "telephone",
  "tension",
  "theater",
  "therapy",
  "thousand",
  "thriller",
  "together",
  "tolerate",
  "tourism",
  "training",
  "transaction",
  "transfer",
  "translate",
  "treasure",
  "treatment",
  "triangle",
  "trigger",
  "trouble",
  "typical",
  "ultimate",
  "umbrella",
  "universe",
  "unknown",
  "unlawful",
  "unusual",
  "upgrade",
  "upstairs",
  "valuable",
  "variable",
  "variety",
  "vehicle",
  "venture",
  "victory",
  "violence",
  "visible",
  "visitor",
  "vitality",
  "volunteer",
  "vulnerable",
  "waiting",
  "walking",
  "warning",
  "wedding",
  "weekend",
  "welcome",
  "welfare",
  "whisper",
  "wildlife",
  "willing",
  "winning",
  "witness",
  "wonderful",
  "workshop",
  "worship",
  "writing",
  "yesterday",
  "youthful",
  "zealous",
  "zipping",
  "absence",
  "absorb",
  "abundant",
  "abuse",
  "academy",
  "account",
  "achieve",
  "acidic",
  "acknowledge",
  "acquire",
  "action",
  "activate",
  "adaptor",
  "advent",
  "advice",
  "aerial",
  "affinity",
  "agency",
  "agility",
  "airborne",
  "alcohol",
  "alert",
  "algebra",
  "allergy",
  "allocate",
  "allure",
  "amaze",
  "amber",
  "amend",
  "amplify",
  "ancestor",
  "angelic",
  "animate",
  "ankle",
  "announce",
  "anthem",
  "anxiety",
  "apology",
  "appeal",
  "apple",
  "approve",
  "aquatic",
  "archive",
  "argue",
  "arise",
  "aroma",
  "arrange",
  "arrest",
  "artistic",
  "ascend",
  "ashore",
  "aspect",
  "aspire",
  "assault",
  "assert",
  "assign",
  "assist",
  "athlete",
  "atmosphere",
  "attend",
  "attract",
  "auction",
  "audible",
  "author",
  "avenue",
  "baggage",
  "banish",
  "banner",
  "barrier",
  "battery",
  "bazaar",
  "beacon",
  "beloved",
  "beneath",
  "beside",
  "betray",
  "beware",
  "bicycle",
  "billion",
  "biology",
  "bizarre",
  "blanket",
  "blazing",
  "blessed",
  "bliss",
  "blizzard",
  "bloody",
  "blunder",
  "boiling",
  "bolster",
  "bonus",
  "boredom",
  "borrow",
  "bounty",
  "bracelet",
  "breach",
  "breathe",
  "briefly",
  "bristle",
  "broad",
  "brother",
  "bubble",
  "bucket",
  "buffet",
  "builder",
  "bullet",
  "bundle",
  "butter",
  "cactus",
  "calcium",
  "callous",
  "camera",
  "canopy",
  "captain",
  "capture",
  "careful",
  "carpet",
  "catalog",
  "cater",
  "ceiling",
  "cellar",
  "center",
  "chamber",
  "chaos",
  "charity",
  "cheer",
  "cherry",
  "chess",
  "chicken",
  "chief",
  "choice",
  "chorus",
  "circuit",
  "classic",
  "cliff",
  "climate",
  "clinch",
  "clinic",
  "clumsy",
  "cluster",
  "clutch",
  "coastal",
  "coconut",
  "collect",
  "college",
  "combat",
  "comedy",
  "comfort",
  "compact",
  "company",
  "compete",
  "complex",
  "compose",
  "compute",
  "concept",
  "confirm",
  "conflict",
  "conquer",
  "console",
  "consume",
  "contest",
  "cozy",
  "cradle",
  "craft",
  "crash",
  "crazy",
  "credit",
  "crescent",
  "crimson",
  "crisp",
  "crowded",
  "crucial",
  "crystal",
  "cuisine",
  "curious",
  "custom",
  "cylinder",
  "damage",
  "daring",
  "darkness",
  "dazzle",
  "decade",
  "decay",
  "decide",
  "declare",
  "decorate",
  "defeat",
  "defend",
  "define",
  "degrade",
  "deliver",
  "demand",
  "density",
  "depart",
  "depict",
  "deputy",
  "derive",
  "descent",
  "describe",
  "desert",
  "desire",
  "destroy",
  "detach",
  "detect",
  "develop",
  "device",
  "devote",
  "diagnose",
  "diamond",
  "diary",
  "digital",
  "dilemma",
  "dining",
  "dioxide",
  "disease",
  "disguise",
  "display",
  "dispose",
  "distance",
  "distinct",
  "diverse",
  "divine",
  "dolphin",
  "domain",
  "donate",
  "double",
  "doubt",
  "dragon",
  "drastic",
  "dream",
  "drift",
  "drizzle",
  "driver",
  "drum",
  "duchess",
  "dungeon",
  "durable",
  "dwarf",
  "dynamic",
  "eager",
  "eagle",
  "earthly",
  "eclipse",
  "educate",
  "equal",
  "equip",
  "era",
  "escape",
  "essence",
  "estate",
  "eternal",
  "ethnic",
  "evaluate",
  "evidence",
  "evolve",
  "exact",
  "exceed",
  "exchange",
  "excite",
  "exclaim",
  "execute",
  "exile",
  "expand",
  "expect",
  "expert",
  "expire",
  "explain",
  "explore",
  "expose",
  "extend",
  "fabric",
  "factor",
  "fade",
  "faint",
  "fairy",
  "false",
  "famous",
  "fancy",
  "fantasy",
  "farmer",
  "fashion",
  "fateful",
  "father",
  "fatigue",
  "feather",
  "feature",
  "federal",
  "fellow",
  "fence",
  "ferry",
  "festival",
  "fiction",
  "field",
  "fighter",
  "figure",
  "filter",
  "final",
  "finance",
  "finish",
  "firefly",
  "firmly",
  "flame",
  "flash",
  "flavor",
  "flee",
  "flight",
  "flinch",
  "flood",
  "flourish",
  "fluent",
  "focus",
  "foggy",
  "fold",
  "follow",
  "foolish",
  "footprint",
  "forbid",
  "forever",
  "forget",
  "formal",
  "fortune",
  "forward",
  "fossil",
  "fragile",
  "frankly",
  "freedom",
  "frequent",
  "friction",
  "friend",
  "frigid",
  "front",
  "frost",
  "fruit",
  "fulfill",
  "function",
  "furnish",
  "future",
  "galaxy",
  "gallery",
  "gamble",
  "garbage",
  "gather",
  "gaze",
  "gender",
  "general",
  "genius",
  "gesture",
  "giant",
  "glance",
  "glide",
  "global",
  "glory",
  "golden",
  "gossip",
  "govern",
  "graceful",
  "grade",
  "height",
  "helmet",
  "heritage",
  "heroic",
  "hidden",
  "highlight",
  "hinder",
  "hobby",
  "holiday",
  "honest",
  "horizon",
  "hornet",
  "hospital",
  "hostile",
  "hover",
  "humble",
  "humid",
  "humor",
  "hunger",
  "hurry",
  "husband",
  "hybrid",
  "ideal",
  "ignore",
  "illness",
  "image",
  "imitate",
  "immense",
  "immune",
  "impact",
  "import",
  "impress",
  "impulse",
  "include",
  "increase",
  "index",
  "indicate",
  "indoor",
  "indulge",
  "infant",
  "influence",
  "inform",
  "inhale",
  "inherit",
  "initial",
  "inject",
  "injury",
  "inmate",
  "innocent",
  "inquiry",
  "insane",
  "insight",
  "jealous",
  "jelly",
  "jewel",
  "jogging",
  "journal",
  "journey",
  "judge",
  "juice",
  "jumble",
  "jungle",
  "junior",
  "justice",
  "justify",
  "keen",
  "keeper",
  "kidnap",
  "kidney",
  "kingdom",
  "kitchen",
  "knight",
  "knock",
  "knowledge",
  "labor",
  "ladder",
  "landmark",
  "landscape",
  "language",
  "laptop",
  "large",
  "laser",
  "lasting",
  "laughter",
  "launch",
  "layer",
  "leader",
  "leaflet",
  "lecture",
  "legend",
  "leisure",
  "length",
  "lesson",
  "letter",
  "level",
  "liberty",
  "license",
  "lifelong",
  "list",
  "lively",
  "locate",
  "logical",
  "loyalty",
  "lucky",
  "lumber",
  "lunar",
];
let guessingWord;
let wordLenght;
chooseword();
let misses = 0;
let corectGuesses = 0;
let winCheck;

function chooseword() {
  guessingWord = hangmanWords[Math.floor(Math.random() * 1000)].toLowerCase();
  //console.log(guessingWord);
  displayWord();
}

function displayWord() {
  wordLenght = guessingWord.length;
  for (let i = 0; i < wordLenght; i++) {
    document.getElementById("word").innerHTML += `<td id="${i}">__</td>`;
  }
}

const buttons = document.getElementsByClassName("btn");
for (let button of buttons) {
  button.addEventListener("click", function () {
    if (guessingWord.includes(button.innerHTML)) {
      console.log("guessed ");
      button.style.background = "green";
      for (let y = 0; y < guessingWord.length; y++) {
        if (guessingWord[y] == button.innerHTML) {
          console.log("its " + y);
          document.getElementById(y).innerHTML = button.innerHTML;
          checkIfWon();
        }
      }
    } else {
      button.style.textDecoration = "line-through";
      button.style.background = "darkgray";
      misses++;
      if (misses == 12) {
        document.body.style.background = "red";
      }
    }
  });
}
function checkIfWon() {
  winCheck = "";
  for (let z = 0; z < guessingWord.length; z++) {
    winCheck += document.getElementById(z).innerHTML;
  }
  if (winCheck == guessingWord) {
    document.body.style.background = "green";
  }
}
document.getElementById("submit").addEventListener("click", function () {
  if (document.getElementById("input").value == guessingWord) {
    document.body.style.background = "green";
    document.getElementById("word").innerHTML = "Word: " + guessingWord;
  } else {
    misses += 2;
    document.getElementById("input").value = "";
  }
});
