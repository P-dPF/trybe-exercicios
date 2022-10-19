// FIXAÇÃO 1 A 3 E 5 A 7
class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(
      `brand: ${this._brand}
      size: ${this._size}
      resolution: ${this._resolution}
      connections: ${this._connections}`
    );
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(newConnection: string | undefined) {
    if (!newConnection || this._connections.includes(newConnection)) {
      this._connectedTo = newConnection;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const newTv = new TV('Samsung', 55, '1920 x 1080', ['HDMI', 'WIFI']);
newTv.turnOn();

newTv.connectedTo = 'WIFI';
console.log(newTv.connectedTo);


// FIXAÇÃO 4

// console.log()
// console.error()
// console.table()