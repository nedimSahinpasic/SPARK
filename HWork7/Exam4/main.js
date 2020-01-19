class Auto {
  constructor(name, color, avgCons) {
    this.name = name;
    this.color = color;
    this.avgCons = avgCons;
  }

  avgConsPlus() {
    this.avgCons = this.avgCons + 0.5;
    return this.avgCons;
  }

}

class TrkaciAuto extends Auto {
  avgConsPlus() {
    this.avgCons = this.avgCons + 3;
    return this.avgCons;
  }
}

const car = new Auto("VW", "gray", 6);
console.log("VW Golf 2.0TDI trosi", car.avgConsPlus(), "litara na 100km");

const car_2 = new TrkaciAuto("Honda", "red", 9);
console.log("Honda Civic Type R trosi", car_2.avgConsPlus(), "litara na 100km kada se vozi na stazi");

//a fol je da druga klasa "trkaci auto" ekstenda prvu klasu "auto", i da metoda u drugoj klasi posto se isto zove override-a prvu metodu...

