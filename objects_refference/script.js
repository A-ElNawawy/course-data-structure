class Car {
  constructor() {
    this.model = "";
  }
}

class Driver {
  constructor() {
    this.name = "";
    this.myCar = null;
  }
}

const main = () => {
  const a = [];
  a.push(1);
  a.push(2);
  a.push(3);
  console.log(a);

  const c1 = new Car();
  c1.model = "Fiat 128";
  console.log(c1);
  console.log(c1.model);

  const d1 = new Driver();
  d1.name = "Mahmoud";

  const d2 = new Driver();
  d2.name = "Ahmed";

  d1.myCar = c1;

  console.log(d1.myCar.model);

  c1 = null
  
  /*
  const obj = new Object()
  console.log(obj);
  const obj2 = {}
  console.log(obj2);
  */
};

main();
