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
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log('hello');
    }
}
Developer.id = 0;
// Humanを型として定義することはできる。
// ただしclass内で指定したexperienceに関してはuserからアクセスできない。
// 構造的部分型という
const user = new Developer('Quill', 38, 3);
// 以下の書き方もできる
const user1 = {
    name: 'Quill',
    age: 38,
    greeting(message) {
        console.log(message);
    }
};
