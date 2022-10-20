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

}

const myFunc = (obj: Superclass): void => {
  obj.sayHello()
}

const supObj = new Superclass();

const subObj = new Subclass();

myFunc(supObj);
myFunc(subObj);