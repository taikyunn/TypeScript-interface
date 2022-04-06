"use strict";
const human = {
    name: 'Tom',
    age: 38,
    greeting(message) {
        console.log(message);
    }
};
// implements:実装する。
// interfaceを実装するために使うのがimplements
// implementsは複数つけることができる
class Developer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(message) {
        console.log('hello');
    }
}
Developer.id = 0;
