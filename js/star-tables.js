var commonStar = [
    {
        rollRangeMin: 1,
        rollRangeMax: 16,
        sizeMin: 0.02,
        sizeMax: 0.08,
        size: 0,
        type: "L-Type Brown Dwarf",
        appearance: "A deep purple star, too dim to be seen from great distances.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 1200
    },
    {
        rollRangeMin: 17,
        rollRangeMax: 75,
        sizeMin: 0.1,
        sizeMax: 0.2,
        size: 0,
        type: "M-Type Main Sequence",
        appearance: "A reddish-purple star, too dim to be seen from great distances.",
        goldilocksZone: 100,
        fuelScooping: false,
        discoveryReward: 1200
    },
    {
        rollRangeMin: 76,
        rollRangeMax: 87,
        sizeMin: 0.45,
        sizeMax: 0.8,
        size: 0,
        type: "K-Type Main Sequence",
        appearance: "A burning orange star.",
        goldilocksZone: 200,
        fuelScooping: true,
        discoveryReward: 1400
    },
    {
        rollRangeMin: 88,
        rollRangeMax: 94,
        sizeMin: 0.8,
        sizeMax: 1.2,
        size: 0,
        type: "G-Type Main Sequence",
        appearance: "A yellow star, like our own sun.",
        goldilocksZone: 100,
        fuelScooping: true,
        discoveryReward: 1200
    },
    {
        rollRangeMin: 95,
        rollRangeMax: 98,
        sizeMin: 1.0,
        sizeMax: 1.4,
        size: 0,
        type: "F-Type Main Sequence",
        appearance: "A blazing yellow-white star.",
        goldilocksZone: 1000,
        fuelScooping: true,
        discoveryReward: 1500
    }
];
var rareStar = [
    {
        rollRangeMin: 1,
        rollRangeMax: 65,
        sizeMin: 1.4,
        sizeMax: 2.1,
        size: 0,
        type: "A-Type Main Sequence",
        appearance: "A ghostly blue-white star.",
        goldilocksZone: 2000,
        fuelScooping: true,
        discoveryReward: 1500
    },
    {
        rollRangeMin: 66,
        rollRangeMax: 98,
        sizeMin: 3.0,
        sizeMax: 16.0,
        size: 0,
        type: "B-Type Main Sequence",
        appearance: "A brilliant blue star, five times larger than the sun.",
        goldilocksZone: null,
        fuelScooping: true,
        discoveryReward: 1500
    },
    {
        rollRangeMin: 99,
        rollRangeMax: 100,
        sizeMin: 20.0,
        sizeMax: 90.0,
        size: 0,
        type: "O-Type Main Sequence",
        appearance: "A blinding blue-white star, ten times larger than the sun.",
        goldilocksZone: null,
        fuelScooping: true,
        discoveryReward: 1500
    }
];
var specialStar = [
    {
        rollRangeMin: 1,
        rollRangeMax: 25,
        sizeMin: 0.3,
        sizeMax: 0.8,
        size: 0,
        type: "Red Giant",
        appearance: "An enormous dying red star, over 500 times the size of the sun.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 1200
    },
    {
        rollRangeMin: 26,
        rollRangeMax: 35,
        sizeMin: 0.3,
        sizeMax: 0.8,
        size: 0,
        type: "Carbon Star",
        appearance: "An enormous, ruby-red star, over 200 times the size of the sun.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 1200
    },
    {
        rollRangeMin: 36,
        rollRangeMax: 40,
        sizeMin: 0.8,
        sizeMax: 1.2,
        size: 0,
        type: "Yellow Giant",
        appearance: "An enormous yellow and white star, over 120 times the size of the sun.",
        goldilocksZone: null,
        fuelScooping: true,
        discoveryReward: 1400
    },
    {
        rollRangeMin: 41,
        rollRangeMax: 45,
        sizeMin: 1.4,
        sizeMax: 2.0,
        size: 0,
        type: "Blue Giant",
        appearance: "A colossal blue-white star over 30 times the size of the sun.",
        goldilocksZone: null,
        fuelScooping: true,
        discoveryReward: 1500
    },
    {
        rollRangeMin: 46,
        rollRangeMax: 46,
        sizeMin: 0.1,
        sizeMax: 1000.0,
        size: 0,
        type: "Black Hole (Stellar or Intermediate)",
        appearance: "A colorless warping void, between 30 - 1000 km wide.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 20000
    },
    {
        rollRangeMin: 47,
        rollRangeMax: 48,
        sizeMin: 1.4,
        sizeMax: 2.0,
        size: 0,
        type: "Neutron Star",
        appearance: "A tiny, brilliant white star, only 11 km in width.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 19000
    },
    {
        rollRangeMin: 49,
        rollRangeMax: 54,
        sizeMin: 0.3,
        sizeMax: 0.8,
        size: 0,
        type: "S-Type Star",
        appearance: "An enormous deep purple star, over 200 times the size of the sun.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 1200
    },
    {
        rollRangeMin: 55,
        rollRangeMax: 56,
        sizeMin: 0.8,
        sizeMax: 1.2,
        size: 0,
        type: "Wolf-Rayet Star",
        appearance: "A colossal brilliant white star, over 30 times the size of the sun.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 1200
    },
    {
        rollRangeMin: 57,
        rollRangeMax: 67,
        sizeMin: 0.8,
        sizeMax: 1.2,
        size: 0,
        type: "White Dwarf",
        appearance: "A tiny, brilliant white star, about the size of Earth.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 10000
    },
    {
        rollRangeMin: 68,
        rollRangeMax: 88,
        sizeMin: 0.45,
        sizeMax: 0.8,
        size: 0,
        type: "T-Tauri Star",
        appearance: "A burning orange star.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 1200
    },
    {
        rollRangeMin: 89,
        rollRangeMax: 98,
        sizeMin: 0.01,
        sizeMax: 0.05,
        size: 0,
        type: "T-Type Brown Dwarf",
        appearance: "A small, deep purple star, too dim to be seen from great distances.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 1200
    },
    {
        rollRangeMin: 99,
        rollRangeMax: 100,
        sizeMin: 0.005,
        sizeMax: 0.025,
        size: 0,
        type: "Y-Type Brown Dwarf",
        appearance: "A small, almost invisible star, no hotter than a domestic oven.",
        goldilocksZone: null,
        fuelScooping: false,
        discoveryReward: 1200
    }
];