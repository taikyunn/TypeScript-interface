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
function Component(template, selector) {
    // instanceの中身をnew()の後にかく
    return function (constructor) {
        // HTML要素をセレクタ指定するメソッド
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
            // 指定した要素の中身を書き換える
            mountedElement.innerHTML = template;
            // 指定したテキストの中身を書き換える
            mountedElement.querySelector('h1').textContent = instance.name;
        }
    };
}
// デコレーター
// デコレーターはインスタンス生成時ではなくクラス生成時に作成される
// 複数指定することが可能。上から下に実行される
let User = class User {
    constructor() {
        this.name = 'Tom';
        console.log('user was created');
    }
};
User = __decorate([
    Logging,
    Component('<h1>{{name}}</h1>', '#app')
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
// 複数指定することが可能。下から上の順番で実行されるので注意
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
