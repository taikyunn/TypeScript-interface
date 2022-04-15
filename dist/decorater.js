"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// classをdecorateするものがdecorator
function Logging(constructor) {
    console.log('logging...');
    console.log(constructor);
}
// デコレーター
// デコレーターはインスタンス生成時ではなくクラス生成時に作成される
let User = class User {
    constructor() {
        this.name = 'Tom';
        console.log('user was created');
    }
};
User = __decorate([
    Logging
], User);
const user4 = new User();
const user2 = new User();
const user3 = new User();
// デコレーターファクトリー
// デコレータを返す関数とする。
function Logging1(message) {
    return function Logging1(constructor) {
        console.log(message);
        console.log('logging...');
        console.log(constructor);
    };
}
// 引数を書く形でデコレーターを設定する
let User1 = class User1 {
    constructor() {
        this.name = 'James';
        console.log('user was created');
    }
};
User1 = __decorate([
    Logging1('test user')
], User1);
const user5 = new User1();
