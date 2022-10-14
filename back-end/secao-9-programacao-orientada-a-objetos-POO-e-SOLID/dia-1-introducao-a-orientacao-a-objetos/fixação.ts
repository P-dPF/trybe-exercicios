class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    console.log(
      `brand: ${this.brand}
      size: ${this.size}
      resolution: ${this.resolution}
      connections: ${this.connections}`
    );
  }
}

const newTv = new TV('Samsung', 55, '1920 x 1080', ['HDMI', 'WIFI']);
newTv.turnOn();