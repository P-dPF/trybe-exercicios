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
