class Client {
  constructor (private name: string) { }
}

class OrderItem {
  constructor (private itemName: string, private price: number) { }

  getPrice() { return this.price; }
}

class Order {
  constructor (
    private client: Client,
    private items: OrderItem[],
    private paymentMethod: string,
    private discount?: number,
  ) { }

  calculateTotalPrice = (): number => {
    return this.items.reduce((acc, curr) => {
      acc += curr.getPrice();
      return acc;
    }, 0)
  }

  calculatePriceWithDiscount = (): number => {
    const fullPrice = this.calculateTotalPrice();

    if (this.discount) return fullPrice - (fullPrice * this.discount)
    return fullPrice; 
  }
}