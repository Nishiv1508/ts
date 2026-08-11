"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    //the same type will be returned, if string is provided then string only will return. This is better than using any
    return val;
}
function identityFour(val) {
    //same word should be used in generics
    return val;
}
identityFour({ brand: "Ford", type: 2431 });
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
anotherFunction(3, {
    connection: "DB",
    username: "Nish",
    password: "n123",
});
class Sellable {
    cart = [];
    addToCart(products) {
        this.cart.push(products);
    }
}
//# sourceMappingURL=generics.js.map