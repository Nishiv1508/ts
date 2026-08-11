const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  //the same type will be returned, if string is provided then string only will return. This is better than using any
  return val;
}

function identityFour<T>(val: T): T {
  //same word should be used in generics
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "Ford", type: 2431 });

// function getSearchProducts<T>(products: T[]): T {
//   return products[2];
// }
// const getMoreSearchProducts = <T>(products: T[]): T => {
//   const i = 1;
//   return products[i];
// };

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}
anotherFunction(3, {
  connection: "DB",
  username: "Nish",
  password: "n123",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
