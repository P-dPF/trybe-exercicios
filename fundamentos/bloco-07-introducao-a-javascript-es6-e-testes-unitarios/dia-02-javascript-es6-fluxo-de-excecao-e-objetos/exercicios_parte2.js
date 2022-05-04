const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

console.log(Object.keys(order.order.pizza));

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const phoneNumber = order.phoneNumber;
  const address = `${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  return console.log(`Olá ${deliveryPerson}, entrega para: ${customer}, Telefone: ${phoneNumber}, ${address}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  const foodOrder = Object.keys(order.order.pizza);
  const drinks = order['order']['drinks']['coke']['type'];
  const price = order['payment']['total'];
  return console.log(`Olá ${order.name}, o total do seu pedido de ${foodOrder[0]}, ${foodOrder[1]} e ${drinks} é R$${price},00`);
}

orderModifier(order);
