"use strict";
// tsc --init
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YT {
    cameraMode;
    filter;
    burst;
    short;
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
}
class User {
    email;
    name;
    // public email: string;
    // name: string; //by default public
    city = "Ahmedabad"; //we can use # also for private data member
    _age = 20; // also can be written as protected
    count = 1;
    // constructor(email: string, name: string) {
    //   this.email = email;
    //   this.name = name;
    //   console.log(this.email, this.name);
    // }
    //this is also correct if u dont want to declare members at the top of class
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.email = email;
        this.name = name;
        console.log(this.email, this.name);
    }
    get getData() {
        return `city: ${this.city} and age: ${this._age}`;
    }
    get getCount() {
        return this.count;
    }
    set setCount(count) {
        this.count = count;
    }
    deleteToken() {
        console.log("Deleted");
    }
}
class SubUser extends User {
    isFamily = true;
    changeAge() {
        this._age = this._age + 1;
    }
}
const nish = new User("n@n.com", "Nishiv");
let data = nish.getData;
nish.setCount = 2;
console.log(nish.getCount);
console.log(data);
//# sourceMappingURL=script.js.map