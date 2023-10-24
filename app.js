var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    quickList: [],
    input: '',
    selectedItem: false,
    items: [
      {
        'id': 1,
        'type': 'fish',
        'name': 'Anchovy',
        'price': 200
      },
      {
        'id': 2,
        'type': 'fish',
        'name': 'Angelfish',
        'price': 3000
      },
      {
        'id': 3,
        'type': 'fish',
        'name': 'Arowana',
        'price': 10000
      },
      {
        'id': 4,
        'type': 'fish',
        'name': 'Barred Knifejaw',
        'price': 5000
      },
      {
        'id': 5,
        'type': 'fish',
        'name': 'Barreleye',
        'price': 12000
      },
      {
        'id': 6,
        'type': 'fish',
        'name': 'Betta',
        'price': 2500
      },
      {
        'id': 7,
        'type': 'fish',
        'name': 'Bitterling',
        'price': 900
      },
      {
        'id': 8,
        'type': 'fish',
        'name': 'Black Bass',
        'price': 400
      },
      {
        'id': 9,
        'type': 'fish',
        'name': 'Blowfish',
        'price': 5000
      },
      {
        'id': 10,
        'type': 'fish',
        'name': 'Blue Marlin',
        'price': 10000
      },
      {
        'id': 11,
        'type': 'fish',
        'name': 'Bluegill',
        'price': 180
      },
      {
        'id': 12,
        'type': 'fish',
        'name': 'Carp',
        'price': 300
      },
      {
        'id': 13,
        'type': 'fish',
        'name': 'Catfish',
        'price': 800
      },
      {
        'id': 14,
        'type': 'fish',
        'name': 'Char',
        'price': 3800
      },
      {
        'id': 15,
        'type': 'fish',
        'name': 'Cherry Salmon',
        'price': 1000
      },
      {
        'id': 16,
        'type': 'fish',
        'name': 'Clownfish',
        'price': 650
      },
      {
        'id': 17,
        'type': 'fish',
        'name': 'Coelacanth',
        'price': 15000
      },
      {
        'id': 18,
        'type': 'fish',
        'name': 'Crawfish',
        'price': 200
      },
      {
        'id': 19,
        'type': 'fish',
        'name': 'Crucian Carp',
        'price': 160
      },
      {
        'id': 20,
        'type': 'fish',
        'name': 'Dab',
        'price': 300
      },
      {
        'id': 21,
        'type': 'fish',
        'name': 'Dace',
        'price': 240
      },
      {
        'id': 22,
        'type': 'fish',
        'name': 'Football Fish',
        'price': 2500
      },
      {
        'id': 23,
        'type': 'fish',
        'name': 'Freshwater Goby',
        'price': 400
      },
      {
        'id': 24,
        'type': 'fish',
        'name': 'Golden Trout',
        'price': 15000
      },
      {
        'id': 25,
        'type': 'fish',
        'name': 'Goldfish',
        'price': 1300
      },
      {
        'id': 26,
        'type': 'fish',
        'name': 'Great White Shark',
        'price': 15000
      },
      {
        'id': 27,
        'type': 'fish',
        'name': 'Guppy',
        'price': 1300
      },
      {
        'id': 28,
        'type': 'fish',
        'name': 'Hammerhead Shark',
        'price': 8000
      },
      {
        'id': 29,
        'type': 'fish',
        'name': 'Horse Mackerel',
        'price': 150
      },
      {
        'id': 30,
        'type': 'fish',
        'name': 'King Salmon',
        'price': 1800
      },
      {
        'id': 31,
        'type': 'fish',
        'name': 'Koi',
        'price': 4000
      },
      {
        'id': 32,
        'type': 'fish',
        'name': 'Loach',
        'price': 400
      },
      {
        'id': 33,
        'type': 'fish',
        'name': 'Mitten Crab',
        'price': 2000
      },
      {
        'id': 34,
        'type': 'fish',
        'name': 'Moray Eel',
        'price': 2000
      },
      {
        'id': 35,
        'type': 'fish',
        'name': 'Neon Tetra',
        'price': 500
      },
      {
        'id': 36,
        'type': 'fish',
        'name': 'Oarfish',
        'price': 9000
      },
      {
        'id': 37,
        'type': 'fish',
        'name': 'Ocean Sunfish',
        'price': 4000
      },
      {
        'id': 38,
        'type': 'fish',
        'name': 'Olive Flounder',
        'price': 800
      },
      {
        'id': 39,
        'type': 'fish',
        'name': 'Pale Chub',
        'price': 200
      },
      {
        'id': 40,
        'type': 'fish',
        'name': 'Pike',
        'price': 1800
      },
      {
        'id': 41,
        'type': 'fish',
        'name': 'Piranha',
        'price': 2500
      },
      {
        'id': 42,
        'type': 'fish',
        'name': 'Pond Smelt',
        'price': 320
      },
      {
        'id': 43,
        'type': 'fish',
        'name': 'Popeyed Goldfish',
        'price': 1300
      },
      {
        'id': 44,
        'type': 'fish',
        'name': 'Puffer Fish',
        'price': 250
      },
      {
        'id': 45,
        'type': 'fish',
        'name': 'Rainbowfish',
        'price': 800
      },
      {
        'id': 46,
        'type': 'fish',
        'name': 'Ranchu Goldfish',
        'price': 4500
      },
      {
        'id': 47,
        'type': 'fish',
        'name': 'Ray',
        'price': 3000
      },
      {
        'id': 48,
        'type': 'fish',
        'name': 'Red Snapper',
        'price': 3000
      },
      {
        'id': 49,
        'type': 'fish',
        'name': 'Ribbon Eel',
        'price': 600
      },
      {
        'id': 50,
        'type': 'fish',
        'name': 'Salmon',
        'price': 700
      },
      {
        'id': 51,
        'type': 'fish',
        'name': 'Sea Bass',
        'price': 400
      },
      {
        'id': 52,
        'type': 'fish',
        'name': 'Sea Butterfly',
        'price': 1000
      },
      {
        'id': 53,
        'type': 'fish',
        'name': 'Seahorse',
        'price': 1100
      },
      {
        'id': 54,
        'type': 'fish',
        'name': 'Softshelled Turtle',
        'price': 3750
      },
      {
        'id': 55,
        'type': 'fish',
        'name': 'Squid',
        'price': 500
      },
      {
        'id': 56,
        'type': 'fish',
        'name': 'Stringfish',
        'price': 15000
      },
      {
        'id': 57,
        'type': 'fish',
        'name': 'Sturgeon',
        'price': 10000
      },
      {
        'id': 58,
        'type': 'fish',
        'name': 'Suckerfish',
        'price': 1500
      },
      {
        'id': 59,
        'type': 'fish',
        'name': 'Sweetfish',
        'price': 900
      },
      {
        'id': 60,
        'type': 'fish',
        'name': 'Tadpole',
        'price': 100
      },
      {
        'id': 61,
        'type': 'fish',
        'name': 'Tilapia',
        'price': 800
      },
      {
        'id': 62,
        'type': 'fish',
        'name': 'Tuna',
        'price': 7000
      },
      {
        'id': 63,
        'type': 'fish',
        'name': 'Whale Shark',
        'price': 13000
      },
      {
        'id': 64,
        'type': 'fish',
        'name': 'Yellow Perch',
        'price': 300
      },
      {
        'id': 65,
        'type': 'fish',
        'name': 'Zebra Turkeyfish',
        'price': 500
      },
      {
        'id': 66,
        'type': 'other',
        'name': 'Fruit Native',
        'price': 100
      },
      {
        'id': 67,
        'type': 'other',
        'name': 'Fruit Exotic',
        'price': 500
      },
      {
        'id': 68,
        'type': 'shell',
        'name': 'Pearl-oyster shell',
        'price': 1200
      },
      {
        'id': 69,
        'type': 'shell',
        'name': 'Conch',
        'price': 350
      },
      {
        'id': 70,
        'type': 'shell',
        'name': 'Giant clam',
        'price': 450
      },
      {
        'id': 71,
        'type': 'shell',
        'name': 'Coral',
        'price': 250
      },
      {
        'id': 72,
        'type': 'shell',
        'name': 'Venus comb',
        'price': 150
      },
      {
        'id': 73,
        'type': 'shell',
        'name': 'Scallop',
        'price': 600
      },
      {
        'id': 74,
        'type': 'shell',
        'name': 'Sea-snail shell',
        'price': 90
      },
      {
        'id': 75,
        'type': 'shell',
        'name': 'Cowrie shell',
        'price': 30
      },
      {
        'id': 76,
        'type': 'shell',
        'name': 'Sand dollar',
        'price': 60
      },
      {
        'id': 77,
        'type': 'shell',
        'name': 'Oyster shell',
        'price': 450
      },
      {
        'id': 78,
        'type': 'bug',
        'name': 'Common Butterfly',
        'price': 160
      },
      {
        'id': 79,
        'type': 'bug',
        'name': 'Yellow Butterfly',
        'price': 160
      },
      {
        'id': 80,
        'type': 'bug',
        'name': 'Tiger Butterfly',
        'price': 240
      },
      {
        'id': 81,
        'type': 'bug',
        'name': 'Peacock Butterfly',
        'price': 2500
      },
      {
        'id': 82,
        'type': 'bug',
        'name': 'Common Bluebottle',
        'price': 300
      },
      {
        'id': 83,
        'type': 'bug',
        'name': 'Paper Kite Butterfly',
        'price': 1000
      },
      {
        'id': 84,
        'type': 'bug',
        'name': 'Great Purple Emperor',
        'price': 3000
      },
      {
        'id': 85,
        'type': 'bug',
        'name': 'Monarch Butterfly',
        'price': 140
      },
      {
        'id': 86,
        'type': 'bug',
        'name': 'Emperor Butterfly',
        'price': 4000
      },
      {
        'id': 87,
        'type': 'bug',
        'name': 'Agrias Butterfly',
        'price': 3000
      },
      {
        'id': 88,
        'type': 'bug',
        'name': 'Rajah Brooke\'s Birdwing',
        'price': 2500
      },
      {
        'id': 89,
        'type': 'bug',
        'name': 'Queen Alexandra\'s Birdwing',
        'price': 4000
      },
      {
        'id': 90,
        'type': 'bug',
        'name': 'Moth',
        'price': 130
      },
      {
        'id': 91,
        'type': 'bug',
        'name': 'Atlas Moth',
        'price': 3000
      },
      {
        'id': 92,
        'type': 'bug',
        'name': 'Madagascan Sunset Moth',
        'price': 2500
      },
      {
        'id': 93,
        'type': 'bug',
        'name': 'Long Locust',
        'price': 200
      },
      {
        'id': 94,
        'type': 'bug',
        'name': 'Migratory Locust',
        'price': 600
      },
      {
        'id': 95,
        'type': 'bug',
        'name': 'Rice Grasshopper',
        'price': 160
      },
      {
        'id': 96,
        'type': 'bug',
        'name': 'Grasshopper',
        'price': 160
      },
      {
        'id': 97,
        'type': 'bug',
        'name': 'Cricket',
        'price': 130
      },
      {
        'id': 98,
        'type': 'bug',
        'name': 'Bell Cricket',
        'price': 430
      },
      {
        'id': 99,
        'type': 'bug',
        'name': 'Mantis',
        'price': 430
      },
      {
        'id': 100,
        'type': 'bug',
        'name': 'Orchid Mantis',
        'price': 2400
      },
      {
        'id': 101,
        'type': 'bug',
        'name': 'Honeybee',
        'price': 200
      },
      {
        'id': 102,
        'type': 'bug',
        'name': 'Wasp',
        'price': 2500
      },
      {
        'id': 103,
        'type': 'bug',
        'name': 'Brown Cicada',
        'price': 0
      },
      {
        'id': 104,
        'type': 'bug',
        'name': 'Robust Cicada',
        'price': 0
      },
      {
        'id': 105,
        'type': 'bug',
        'name': 'Giant Cicada',
        'price': 0
      },
      {
        'id': 106,
        'type': 'bug',
        'name': 'Walker Cicada',
        'price': 400
      },
      {
        'id': 107,
        'type': 'bug',
        'name': 'Evening Cicada',
        'price': 0
      },
      {
        'id': 108,
        'type': 'bug',
        'name': 'Cicada Shell',
        'price': 0
      },
      {
        'id': 109,
        'type': 'bug',
        'name': 'Red Dragonfly',
        'price': 180
      },
      {
        'id': 110,
        'type': 'bug',
        'name': 'Darner Dragonfly',
        'price': 230
      },
      {
        'id': 111,
        'type': 'bug',
        'name': 'Banded Dragonfly',
        'price': 4500
      },
      {
        'id': 112,
        'type': 'bug',
        'name': 'Damselfly',
        'price': 0
      },
      {
        'id': 113,
        'type': 'bug',
        'name': 'Firefly',
        'price': 0
      },
      {
        'id': 114,
        'type': 'bug',
        'name': 'Mole Cricket',
        'price': 500
      },
      {
        'id': 115,
        'type': 'bug',
        'name': 'Pondskater',
        'price': 130
      },
      {
        'id': 116,
        'type': 'bug',
        'name': 'Diving Beetle',
        'price': 800
      },
      {
        'id': 117,
        'type': 'bug',
        'name': 'Giant Water Bug',
        'price': 2000
      },
      {
        'id': 118,
        'type': 'bug',
        'name': 'Stinkbug',
        'price': 120
      },
      {
        'id': 119,
        'type': 'bug',
        'name': 'Man-faced Stink Bug',
        'price': 1000
      },
      {
        'id': 120,
        'type': 'bug',
        'name': 'Ladybug',
        'price': 200
      },
      {
        'id': 121,
        'type': 'bug',
        'name': 'Tiger Beetle',
        'price': 1500
      },
      {
        'id': 122,
        'type': 'bug',
        'name': 'Jewel Bettle',
        'price': 2400
      },
      {
        'id': 123,
        'type': 'bug',
        'name': 'Violin Beetle',
        'price': 450
      },
      {
        'id': 124,
        'type': 'bug',
        'name': 'Citrus Long-horned Beetle',
        'price': 350
      },
      {
        'id': 125,
        'type': 'bug',
        'name': 'Rosalia Batesi Beetle',
        'price': 3000
      },
      {
        'id': 126,
        'type': 'bug',
        'name': 'Blue Weevil Beetle',
        'price': 0
      },
      {
        'id': 127,
        'type': 'bug',
        'name': 'Earth-boring Dung Beetle',
        'price': 300
      },
      {
        'id': 128,
        'type': 'bug',
        'name': 'Dung Beetle',
        'price': 0
      },
      {
        'id': 129,
        'type': 'bug',
        'name': 'Scarab Beetle',
        'price': 0
      },
      {
        'id': 130,
        'type': 'bug',
        'name': 'Drone Beetle',
        'price': 0
      },
      {
        'id': 131,
        'type': 'bug',
        'name': 'Goliath Beetle',
        'price': 8000
      },
      {
        'id': 132,
        'type': 'bug',
        'name': 'Saw Stag',
        'price': 0
      },
      {
        'id': 133,
        'type': 'bug',
        'name': 'Miyama Stag',
        'price': 0
      },
      {
        'id': 134,
        'type': 'bug',
        'name': 'Giant Stag',
        'price': 10000
      },
      {
        'id': 135,
        'type': 'bug',
        'name': 'Rainbow Stag',
        'price': 6000
      },
      {
        'id': 136,
        'type': 'bug',
        'name': 'Cyclommatus Stag',
        'price': 0
      },
      {
        'id': 137,
        'type': 'bug',
        'name': 'Golden Stag',
        'price': 0
      },
      {
        'id': 138,
        'type': 'bug',
        'name': 'Giraffe Stag',
        'price': 0
      },
      {
        'id': 139,
        'type': 'bug',
        'name': 'Horned Dynastid',
        'price': 0
      },
      {
        'id': 140,
        'type': 'bug',
        'name': 'Horned Atlas',
        'price': 0
      },
      {
        'id': 141,
        'type': 'bug',
        'name': 'Horned Elephant',
        'price': 0
      },
      {
        'id': 142,
        'type': 'bug',
        'name': 'Horned Hercules',
        'price': 0
      },
      {
        'id': 143,
        'type': 'bug',
        'name': 'Walking Stick',
        'price': 0
      },
      {
        'id': 144,
        'type': 'bug',
        'name': 'Walking Leaf',
        'price': 600
      },
      {
        'id': 145,
        'type': 'bug',
        'name': 'Bagworm',
        'price': 600
      },
      {
        'id': 146,
        'type': 'bug',
        'name': 'Ant',
        'price': 0
      },
      {
        'id': 147,
        'type': 'bug',
        'name': 'Hermit Crab',
        'price': 1000
      },
      {
        'id': 148,
        'type': 'bug',
        'name': 'Wharf Roach',
        'price': 200
      },
      {
        'id': 149,
        'type': 'bug',
        'name': 'Fly',
        'price': 60
      },
      {
        'id': 150,
        'type': 'bug',
        'name': 'Mosquito',
        'price': 130
      },
      {
        'id': 151,
        'type': 'bug',
        'name': 'Flea',
        'price': 0
      },
      {
        'id': 152,
        'type': 'bug',
        'name': 'Snail',
        'price': 250
      },
      {
        'id': 153,
        'type': 'bug',
        'name': 'Pill Bug',
        'price': 250
      },
      {
        'id': 154,
        'type': 'bug',
        'name': 'Centipede',
        'price': 300
      },
      {
        'id': 155,
        'type': 'bug',
        'name': 'Spider',
        'price': 480
      },
      {
        'id': 156,
        'type': 'bug',
        'name': 'Tarantula',
        'price': 8000
      },
      {
        'id': 157,
        'type': 'bug',
        'name': 'Scorpion',
        'price': 8000
      }
    ],
  },
  computed: {
    invTotal: function() {
      return this.quickList.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);
    }
  },
  methods: {
    autocompleteItems: function() {
      return this.items.map(item => ({text: `${item.name} (${item.type})`, value: item.name}));
    },
    selectItem: function() {
      this.selectedItem = this.items.find(item => item.name === this.input);
    },
    addToQuickList: function() {
      if (!this.selectedItem)
        return;
      this.quickList.push({...this.selectedItem, quantity: 1});
    },
    removeItem: function(index) {
      this.quickList.splice(index, 1);
    },
    clearQuickList: function() {
      this.quickList = [];
    }
  },
})
