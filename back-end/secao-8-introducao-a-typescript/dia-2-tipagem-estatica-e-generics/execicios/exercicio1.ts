class Car {
  _brand: string;
  _color: string;
  _doors: number;

  constructor(brand: string, color: string, doors: number){
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log('buzinar');
  };

  turnOn(): void {
    console.log('ligar');
  };

  turnOff(): void {
    console.log('desligar');
  };

  speedUp(): void {
    console.log('acelerar');
  };

  speedDown(): void {
    console.log('desacelerar');
  };

  stop(): void {
    console.log('parar');
  };

  turn(direction: string): void {
    console.log(`virar à ${direction}`);
  };
}