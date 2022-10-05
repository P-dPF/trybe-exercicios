// TYPE ALIASES
type Bird = {
  color: string;
  ageSpan: number;
};

type Sum = (firstNum: number, secondNum: number) => number;

type Address = {
  street: string;
  number: number;
  city: string;
  country: string;
};

// TYPE UNIONS
type MatterStates = 'líquido' | 'sólido' | 'gasoso';

type Id = number | string;

type OperationalSystems = 'linux' | 'mac os' | 'windows';

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';

// CLASSES
class Dog {
  _name: string;
  _age: number;
  _breed: string;

  constructor(name: string, age: number, breed: string) {
    this._name = name;
    this._age = age;
    this._breed = breed;

  }
}

class House {
  _stories: number;
  _isForRental: boolean;

  constructor(stories: number, isForRental: boolean) {
    this._stories = stories;
    this._isForRental = isForRental;
  }
}

class Flight {
  _number: number;
  _gate: string;
  _isConfirmed: boolean;

  constructor(number: number, gate: string, isConfirmed: boolean) {
    this._number = number;
    this._gate = gate;
    this._isConfirmed = isConfirmed;
  }
}

// INTERFACES
interface Car {
  brand: string;
  model: string;
  modelYear: Date;
  price: number;
  move: () => void;
}

interface Feline {
  species: string;
  weight: number;
  roar: () => void;
}

interface Aircraft {
  manufacturer: string;
  model: string;
  seats: number;
  fly: () => void;
}