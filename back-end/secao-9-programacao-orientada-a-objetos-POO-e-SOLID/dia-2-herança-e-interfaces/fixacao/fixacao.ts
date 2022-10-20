class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  private sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  public sayHello2(): void {
    this.sayHello(); // Erro gerado por sayHello ser private
  }
}

const myFunc = (obj: Subclass): void => {
  obj.sayHello2()
}

// const supObj = new Superclass();

const subObj = new Subclass();

// myFunc(supObj);
myFunc(subObj);