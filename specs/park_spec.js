const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 25);
    dinosaur3 = new Dinosaur('compsognathus', 'omnivore', 15);
    dinosaur4 = new Dinosaur ('gallimimus', 'omnivore', 20);
  })

  it('should have a name', function () {
    assert.strictEqual(park.name, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park.ticketPrice, 50);
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.dinosaurs.length, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    assert.strictEqual(park.dinosaurs.length, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.findBestDino(), dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual(park.findDinoSpecies('t-rex'), [dinosaur1]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.visitorsPerDay(), 90)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.visitorsPerYear(), 32850);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.revenuePerYear(), 1642500)
  });

  it('should remove all dinosaurs of a species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeSpecies('t-rex');
    assert.strictEqual(park.dinosaurs.length, 2);
  });

  it('should return a list of diets and counts of each', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.findDietCount(), {carnivore:1, herbivore: 1, omnivore: 2})
  })
});
