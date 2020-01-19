class Auto {
  constructor(name, color, km, avg_cons, ) {
    this.name = name;
    this.color = color;
    this.km = km;
    this.avg_cons = avg_cons;
    this.fuelLevel = 50;
  }
  drive() {
    this.currentFuelLevel();
    return this.km += 5;
  }
}

  Auto.prototype.currentFuelLevel = function () {
  this.fuelLevel = this.fuelLevel - (0.05*this.avg_cons);
}

const Suzuki = new Auto("Suzuki", "gray", 100000, 7);
const Citroen = new Auto("Citroen", "gray", 150000, 5);
console.log(Suzuki);
console.log(Citroen);
Suzuki.drive();
Citroen.drive();
console.log(Suzuki);
console.log(Citroen);

//nekakav je cudan tekst zadatka, imao sam osjecaj da je bolje dodati ovaj prototip koji se poziva iz drive metode... a usput sam htio probati i hoce to raditi sa "klasama",
//znao sam da sa obicnim konstruktorom (funkcijom) radi... malo sam se igrao...
