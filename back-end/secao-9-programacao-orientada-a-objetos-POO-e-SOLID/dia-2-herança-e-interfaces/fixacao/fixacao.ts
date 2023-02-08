// SINTAXE GERAL
class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (obj: Superclass): void => {
  obj.sayHello();
  if (obj.isSuper) {
    console.log('Super!');
  } else {
    console.log('Sub!');
  }
}

const supObj = new Superclass();

const subObj = new Subclass();

myFunc(supObj);
myFunc(subObj);

// INTERFACES
interface myInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements myInterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    const result = this.myNumber + myParam;
    return `A soma de ${this.myNumber} com ${myParam} é igual a ${result}`;
  }
}

const obj = new MyClass(10);
const sum = obj.myFunc(20);
console.log(sum);

// COMPOSIÇÃO
 interface Logger {
  log(param: string): void;
 }

class ConsoleLogger implements Logger {
  public log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 {
  public log(param: string): void {
    console.log(`Logger 2: ${param}`);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}
  save(key: string, value: string): void {
    this.logger.log(key, value);
  }
}