// tsc --init
class User {
  email: string;
  name: string;
  readonly #city: string = "Ahmedabad";
  _age: number = 20;

  constructor(email: string, name: string) {
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

export {};
