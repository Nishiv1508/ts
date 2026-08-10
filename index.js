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
//objects
const User = {
    name: "Nishiv",
    email: "abc@gmail.com",
    isActive: true,
};
function createUser({ name, isPaid }) { }
createUser({ name: "Nishiv", isPaid: false });
function createCourse() {
    return { name: "TS", price: 500 };
}
function myFunc(user) {
    return { name: "", email: "", isActive: true };
}
myFunc({ name: "", email: "", isActive: true });
let myUser = {
    _id: "1234",
    name: "Meow",
    email: "meow@gmail.com",
    isActive: false,
};
myUser.email = "m@gmail.com";
//arrays
const superHeroes = [];
const heroPower = [];
const allUSers = [];
const mlModels = [[255, 255, 255], []];
superHeroes.push("spidey");
heroPower.push(2);
allUSers.push({ name: "", isActive: true });
//Union
let score = 33; //anyone datatype
score = 44;
score = "55";
let nish = { name: "Nishiv", id: 764 };
nish = { username: "Nishiv", id: 123 };
function getDbId(id) {
    // id.toLowerCase() -> This will throw error as id can be both string or number so have to check it first
    if (typeof id === "string") {
        return id.toLowerCase(); //Now this will work
    }
    else {
        return id + 2; // 100% value is number only
    }
}
getDbId(3);
getDbId("bkhwd");
const data = [1, 2, 3]; // either all number array or all strings array
const data1 = ["fweh", 23, "wd"]; //anything number or string
let seatAllotment = "middle";
// seatAllotment = "crew"   -> not possible
//tuples
let user4 = ["hc", 131, true]; //in a specific mentioned order. Order of the array matters
let rgb = [255, 0, 255];
let newUser = [112, "abc@gmail.com"];
newUser[1] = "test@gmail.com";
const hcSeat = "window" /* SeatChoice.WINDOW */; //only options available in the enum can be put
const n = {
    dbId: 214,
    email: "b",
    userId: 469132,
    githubToken: "hdw",
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name, value) => {
        return 10;
    },
};
export {};
