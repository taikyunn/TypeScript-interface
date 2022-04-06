"use strict";
// nicknameフィールドがなくてもエラーにならない。
const nameable = {
    name: 'Tom',
};
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
    // ?を使ったパラメーターは必要なパラメーターの後に書くこと。
    constructor(name, age, experience, initSex) {
        this.name = name;
        this.age = age;
        this.experience = experience;
        this.initSex = initSex;
        // もし初期化する値があったら初期化・なかったらundefinedにする処理
        if (initSex) {
            this.sex = initSex;
        }
    }
    greeting(message) {
        console.log('hello');
    }
    // パラメーターに?をつけることであってもなくてもいいを表現できる。
    greeting2(message) {
        if (message) {
            message.toUpperCase();
        }
        console.log('hello');
    }
    // デフォルト引数:引数がなかった時にデフォルトで設定できるもの
    greeting3(message = 'test') {
        if (message) {
            message.toUpperCase();
        }
        console.log(message);
    }
}
Developer.id = 0;
// Humanを型として定義することはできる。
// ただしclass内で指定したexperienceに関してはuserからアクセスできない。
// 構造的部分型という
const user = new Developer('Quill', 38, 3);
// readonlyなので上書き不可
// user.age = 28;
// 以下の書き方もできる
const user1 = {
    name: 'Quill',
    age: 38,
    greeting(message) {
        console.log(message);
    }
};
const developer = new Developer('Quill', 38, 3, 'tom');
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
let addFunc1;
addFunc1 = (n1, n2) => {
    return n1 + n2;
};
const developer4 = new Developer('Quill', 38, 3, 'tom');
// デフォルト引数が指定されている場合は引数なしでもエラーにならない。
console.log(developer4.greeting3());
