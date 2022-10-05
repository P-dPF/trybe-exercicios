type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
};

const pizza1: Pizza = {
  flavor: 'calabresa',
  slices: 8,
}

const pizza2: Pizza = {
  flavor: 'marguerita',
  slices: 6,
}

const pizza3: Pizza = {
  flavor: 'nutella',
  slices: 4,
}

type standardFlavors = 'calabresa' | 'frango' | 'peperoni';

type VegFlavors = 'marguerita' | 'palmito' | 'cogumelo';

type sweetFlavors = 'nutella' | 'goiabada com queijo' | 'marshmallow';

interface PizzaComum extends Pizza {
  flavor: standardFlavors;
}

interface PizzaVeg extends Pizza {
  flavor: VegFlavors;
}

interface PizzaDoce extends Pizza {
  flavor: sweetFlavors;
  slices: 4;
}

const standardPizza1: PizzaComum = {
  flavor: 'calabresa',
  slices: 4,
}

const standardPizza2: PizzaComum = {
  flavor: 'frango',
  slices: 6,
}

const standardPizza3: PizzaComum = {
  flavor: 'peperoni',
  slices: 8,
}

const vegPizza1: PizzaVeg = {
  flavor: 'marguerita',
  slices: 4,
}

const vegPizza2: PizzaVeg = {
  flavor: 'palmito',
  slices: 8,
}

const sweetPizza1: PizzaDoce = {
  flavor: 'goiabada com queijo',
  slices: 4,
}