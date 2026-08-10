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

export {};
