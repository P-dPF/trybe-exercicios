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