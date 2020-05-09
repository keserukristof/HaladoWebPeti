const faker = require('faker');
let database = { catches: [] };

let baits = [
  'Crankbaits',
  'Worm',
  'Stick Bait',
  'Corn',
  'Rat-L-Trap Original Crankbait',
  "Cabela's Mean Eye Blade Bait",
];

let fishong_poles = [
  'Daiwa Minispin Spinning Rod',
  'Okuma Celilo Ultra Light Trout Rods',
  'Shakespeare Ugly Stik GX2 Spinning Rod',
  'PLUSINNO Fishing Rod and Reel',
  'Entsport Camo Legend Baitcasting Rod',
  'Shimano Stimula Spin Rod',
  'Tailwater Outfitters Toccoa Fly Rod',
];

let techniques = [
  'Tenkara fishing',
  'Rock fishing',
  'Pitch Fishing',
  'Casting',
  'Bank fishing',
  'Kite fishing',
  'Kontiki Fishing',
];

let caughtFish = ['Catla', 'Cat shark', 'Flagfin', 'Flagfish', 'Shark', 'Pacific cod'];

let lake = [
  'Lake Velencei',
  'Lake Hévíz',
  'Lake Vadkert',
  'Woodland Flowage',
  'Grand Falls Flowage',
];

for (let i = 1; i <= 100; i++) {
  database.catches.push({
    id: i,
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    equipment: faker.lorem.word,
    bait: baits[faker.random.number({ min: 0, max: baits.length - 1 })],
    fishong_pole:
      fishong_poles[faker.random.number({ min: 0, max: fishong_poles.length - 1 })],
    preferred_technique:
      techniques[faker.random.number({ min: 0, max: techniques.length - 1 })],
    caughtFish: caughtFish[faker.random.number({ min: 0, max: caughtFish.length - 1 })],
    lake: lake[faker.random.number({ min: 0, max: lake.length - 1 })],
  });
}

for (let i = 1; i <= 20; i++) {
  database.catches.push({
    id: 101,
    name: 'Matt Smith',
    equipment: faker.lorem.word,
    bait: baits[faker.random.number({ min: 0, max: baits.length - 1 })],
    fishong_pole:
      fishong_poles[faker.random.number({ min: 0, max: fishong_poles.length - 1 })],
    preferred_technique:
      techniques[faker.random.number({ min: 0, max: techniques.length - 1 })],
    caughtFish: caughtFish[faker.random.number({ min: 0, max: caughtFish.length - 1 })],
    lake: lake[faker.random.number({ min: 0, max: lake.length - 1 })],
  });
}

console.log(JSON.stringify(database));
