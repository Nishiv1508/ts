// tsc --init

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {}
}

class YT implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string,
  ) {}
}

class User {
  // public email: string;
  // name: string; //by default public
  private readonly city: string = "Ahmedabad"; //we can use # also for private data member
  _age: number = 20; // also can be written as protected
  private count: number = 1;

  // constructor(email: string, name: string) {
  //   this.email = email;
  //   this.name = name;
  //   console.log(this.email, this.name);
  // }

  //this is also correct if u dont want to declare members at the top of class
  constructor(
    public email: string,
    public name: string,
  ) {
    this.email = email;
    this.name = name;
    console.log(this.email, this.name);
  }

  get getData(): string {
    return `city: ${this.city} and age: ${this._age}`;
  }

  get getCount(): number {
    return this.count;
  }

  set setCount(count: number) {
    this.count = count;
  }

  private deleteToken() {
    console.log("Deleted");
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeAge() {
    this._age = this._age + 1;
  }
}

const nish = new User("n@n.com", "Nishiv");
let data = nish.getData;
nish.setCount = 2;
console.log(nish.getCount);
console.log(data);

export {};
