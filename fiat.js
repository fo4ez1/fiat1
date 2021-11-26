let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  passengers: 2,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started && this.fuel >= 2) {
      alert("Бип!");
      this.fuel >= 2 ? (this.fuel -= 2) : (this.fuel = 0);
    } else if (this.fuel < 2) {
      alert("Сначала заправьтесь!");
    } else {
      alert("Сначала запустите двигатель!");
    }


  },
  showFuel: function () {
    alert("У меня в баке " + this.fuel + " литров бензина!");
  },
  addFuel: function (amount) {
    this.fuel += amount;
  },
};

fiat.showFuel();
fiat.addFuel(5);
fiat.showFuel();
fiat.start();
fiat.drive();
fiat.showFuel();
fiat.drive();
fiat.showFuel();
fiat.drive();
fiat.showFuel();