const Dinosaur = require("./dinosaur");

const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    let dinoList = [];
    for (let dino of this.dinosaurs) {
        if (dino != dinosaur) {
            dinoList.push(dino);
        }
    }
    this.dinosaurs = dinoList
}

Park.prototype.findBestDino = function () {
    let bestDino = new Dinosaur(null, null, 0);
    for (let dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > bestDino.guestsAttractedPerDay) {
            bestDino = dino;
        }
    }
    return bestDino;
}

Park.prototype.findDinoSpecies = function (species) {
    let dinoList = [];
    for (let dino of this.dinosaurs) {
        if (dino.species === species) {
            dinoList.push(dino);
        }
    }
    return dinoList;
}

Park.prototype.visitorsPerDay = function () {
    let totalVisitors = 0;
    for (let dino of this.dinosaurs) {
        totalVisitors += dino.guestsAttractedPerDay;
    }
    return totalVisitors;
}

Park.prototype.visitorsPerYear = function () {
    return this.visitorsPerDay() * 365;
}

Park.prototype.revenuePerYear = function () {
    return this.visitorsPerYear() * this.ticketPrice;
}

Park.prototype.removeSpecies = function (species) {
    let dinoList = [];
    for (let dino of this.dinosaurs) {
        if (dino.species !== species) {
            dinoList.push(dino);
        }
    }
    this.dinosaurs = dinoList;
};

Park.prototype.findDietCount = function () {
    let dietCount = {}
    for (let dino of this.dinosaurs) {
        if (dietCount[dino.diet] === undefined) {
            dietCount[dino.diet] = 0
        }
        dietCount[dino.diet]++
    }
    return dietCount
}

module.exports=Park;