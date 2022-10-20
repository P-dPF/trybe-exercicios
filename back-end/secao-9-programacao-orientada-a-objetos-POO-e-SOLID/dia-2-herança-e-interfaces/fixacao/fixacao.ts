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