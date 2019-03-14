export type FlowerType = 'tulip' | 'rose';

export interface Flower {
  petals: number;
  height: number;
  color: string;
  fragrence: boolean;
  water: (ml: number) => void;
  growthRate: number;
}

export interface Order<T> {
  type: new (color: string) => T
  amount: number;
  color: string;
}

interface ThornyFlower extends Flower {
  thorns: number;
}

class Waterable {
  growthRate = 50;
  height = 0;

  water = (ml: number) => {
    this.height += ml / this.growthRate;
  }
}

export class Rose extends Waterable implements ThornyFlower {
  petals = 5;
  color: string;
  fragrence = true;
  growthRate = 200;
  thorns = 12;

  constructor(color: string) {
    super();
    this.color = color;
  }
}

export class Tulip extends Waterable implements Flower {
  petals = 6;
  color: string;
  fragrence = true;
  growthRate = 100;

  constructor(color: string) {
    super();
    this.color = color;
  }
}

const createBouquet = <T>(order: Order<T>): T[] => {
  const bouquet: T[] = [];

  for (let i = 0; i < order.amount; i++) {
    bouquet.push(new order.type(order.color));
  }

  return bouquet;
};

const bouquet = createBouquet({
  type: Tulip,
  amount: 3,
  color: 'pink',
});
