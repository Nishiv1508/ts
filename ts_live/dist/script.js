"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// tsc --init
class User {
  email;
  name;
  #city = "Ahmedabad";
  _age = 20;
  constructor(email, name) {
    this.email = email;
    this.name = name;
    console.log(this.email, this.name);
  }
  get() {
    console.log(this.#city, this._age);
  }
}
const nish = new User("n@n.com", "Nishiv");
nish.get();
//# sourceMappingURL=script.js.map
