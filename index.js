//TS is a dev tool kind of wrapper of js. Code executes in js only
//String
let greetings = "Hello World";
greetings.toUpperCase();
console.log(greetings);
//Number
let userId = 642587; //If not written : number, TS automatically identifies it as a number so its optional to write it but in some cases we must have to write
userId.toFixed();
let myNum = 6;
//Boolean
let isLoggedIn = false;
//any
let hero; //By default TS will consider it as 'any' (let hero: any)
function getHero() {
    return "Thor";
}
hero = getHero();
// functions declaration in TS
function addTwo(num) {
    // in case of function params always keep the datatype assigned (Compulsory)
    return num + 2;
}
let myVal = addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("Meow");
function signUpUser(name, email, isPaid) { }
signUpUser("Meow", "test@gmail.com", true);
let loginUser = (name, email, isPaid = false) => { };
loginUser("N", "n@n.com");
// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
const greetHello = (s) => {
    return `Hello ${s}`;
};
const heroes = ["thor", "Spiderman", "ironman"];
heroes.map((hero) => {
    return `Hero is ${hero}`;
});
function consoleError(errmsg) {
    //No return type means void
    console.log(errmsg);
}
function handleError(errmsg) {
    //in this type of scenarios never is preferrred over void
    throw new Error(errmsg);
}
export {};
