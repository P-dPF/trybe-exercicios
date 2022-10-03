export function greeter(name: string):string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

// FIXAÇÃO
// EXERCÍCIO 1
export function losango(diagMaior:number, diagMenor:number): number {
  return (diagMaior * diagMenor) / 2;
}

// EXERCÍCIO 2
export function trapezio(baseMaior:number, baseMenor:number, altura:number):number {
  return ((baseMaior + baseMenor) * altura) / 2;
}

// EXERCÍCIO 3
export function circulo(raio:number):number {
  const PI:number = 3.14
  return PI * (raio ** 2);
}

// BÔNUS: EXERCÍCIOS DE ENUM
export enum Semana {
  DOMINGO = 1,
  SEGUNDA,
  TERÇA,
  QUARTA,
  QUINTA,
  SEXTA,
  SÁBADO,
}

export enum ArcoIris {
  VERMELHO = 'VERMELHO',
  LARANJA = 'LARANJA',
  AMARELO = 'AMARELO',
  VERDE = 'VERDE',
  AZUL = 'AZUL',
  ANIL = 'ANIL',
  VIOLETA = 'VIOLETA',
}