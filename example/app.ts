// interface Flower {
//   petals: number;
//   height: number;
//   color: string;
//   fragrence: boolean;
//   water: (ml: number) => void;
// }

// interface Order<T> {
//   type: new (color?: string) => T
//   amount: number;
//   color?: string;
// }

// class Rose implements Flower {
//   petals = 5;
//   height = 0;
//   color: string;
//   fragrence = true;

//   constructor(color: string) {
//     this.color = color;
//   }

//   water = (ml: number) => {
//     this.height += ml / 200;
//   }
// }

// class Tulip implements Flower {
//   petals = 6;
//   height = 0;
//   color: string;
//   fragrence = true;

//   constructor(color: string) {
//     this.color = color;
//   }

//   water = (ml: number) => {
//     this.height += ml / 100;
//   }
// }

// const createBouquet = <T>(order: Order<T>): T[] => {
//   const bouquet: T[] = [];

//   for (let i = 0; i < order.amount; i++) {
//     bouquet.push(new order.type(order.color));
//   }

//   return bouquet;
// };

// const bouquet = createBouquet({
//   type: Tulip,
//   amount: 3,
//   color: 'pink',
// });

// console.log(bouquet);
