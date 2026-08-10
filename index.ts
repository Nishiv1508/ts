//TS is a dev tool kind of wrapper of js. Code executes in js only

//String
let greetings: string = "Hello World";
greetings.toUpperCase();
console.log(greetings);

//Number
let userId: number = 642587; //If not written : number, TS automatically identifies it as a number so its optional to write it but in some cases we must have to write
userId.toFixed();
let myNum = 6;

//Boolean
let isLoggedIn: boolean = false;

//any
let hero; //By default TS will consider it as 'any' (let hero: any)
function getHero() {
  return "Thor";
}
hero = getHero();

// functions declaration in TS
function addTwo(num: number): number {
  // in case of function params always keep the datatype assigned (Compulsory)
  return num + 2;
}
let myVal = addTwo(5);

function getUpper(val: string): string {
  return val.toUpperCase();
}
getUpper("Meow");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("Meow", "test@gmail.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("N", "n@n.com");

// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const greetHello = (s: string): string => {
  return `Hello ${s}`;
};

const heroes = ["thor", "Spiderman", "ironman"];
heroes.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  //No return type means void
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  //in this type of scenarios never is preferrred over void
  throw new Error(errmsg);
}

//objects
const User = {
  name: "Nishiv",
  email: "abc@gmail.com",
  isActive: true,
};
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
createUser({ name: "Nishiv", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "TS", price: 500 };
}

//type alias
type User1 = {
  name: string;
  email: string;
  isActive: boolean;
};

function myFunc(user: User1): User1 {
  return { name: "", email: "", isActive: true };
}
myFunc({ name: "", email: "", isActive: true });

type User2 = {
  readonly _id: string; // readonly keyword means its uneditable
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; //? means entering this value is optional
};
let myUser: User2 = {
  _id: "1234",
  name: "Meow",
  email: "meow@gmail.com",
  isActive: false,
};
myUser.email = "m@gmail.com";
// myUser._id = "616895"; this is not allowed as _id is readonly

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

//Not a good practice
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

//arrays
const superHeroes: string[] = [];
const heroPower: Array<number> = [];

type user2 = {
  name: string;
  isActive: boolean;
};
const allUSers: user2[] = [];

const mlModels: number[][] = [[255, 255, 255], []];

superHeroes.push("spidey");
heroPower.push(2);
allUSers.push({ name: "", isActive: true });

//Union
let score: number | string = 33; //anyone datatype
score = 44;
score = "55";

type User3 = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};
let nish: User3 | Admin = { name: "Nishiv", id: 764 };
nish = { username: "Nishiv", id: 123 };

function getDbId(id: number | string) {
  // id.toLowerCase() -> This will throw error as id can be both string or number so have to check it first
  if (typeof id === "string") {
    return id.toLowerCase(); //Now this will work
  } else {
    return id + 2; // 100% value is number only
  }
}
getDbId(3);
getDbId("bkhwd");

const data: number[] | string[] = [1, 2, 3]; // either all number array or all strings array
const data1: (number | string)[] = ["fweh", 23, "wd"]; //anything number or string

let seatAllotment: "asile" | "middle" | "window" = "middle";
// seatAllotment = "crew"   -> not possible

export {};
