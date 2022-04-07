"use strict";
const quill = {
    name: 'quill',
    role: 'font-end',
    follower: 1000,
};
;
const tom = {
    name: 'tom',
    role: 'back-end',
    follower: 2000,
};
// TypeGuard
// TypeOf
function toUpperCase(x) {
    // xがstring型だった場合のみtoUpperCaseを実行する
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    else {
        return '';
    }
}
function describeNomadWorkerProfile(nomadWorker) {
    // nameのみアクセスできる
    console.log(nomadWorker.name);
    // in:nomadWorkerというオブジェクトに'role'が存在しますか？という判定を行う
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
// instanceof
class Dog {
    constructor() {
        // タグ付きユニオン
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-bow');
    }
}
class Bird {
    constructor() {
        // タグ付きユニオン
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    // instanceof:Birdクラスから生成されたインスタンスだった場合という判定
    if (pet instanceof Bird) {
        pet.fly();
    }
}
// 関数の実行
havePet(new Bird());
havePet(new Dog());
// オブジェクトで呼び出すとhelloのみ出力される。
// havePet({ speak() { console.log('hello')}, fly() { console.log('not fly')}})
// HTMLElementは広い概念になっている。これをさらに厳しくするために型アサーションを使用する。
const input = document.getElementById('input');
// 型アサーション:HTMLElementではなくHTMLInputElementですと定義する
// 方法1
const input1 = document.getElementById('input');
input1.value = 'testValue';
// 方法2:こっちの使い方がベター。理由:JSX(React)では方法①だとタグだと間違えて認識される可能性があるため。
const input2 = document.getElementById('input');
// non-nullアサーションオペレーター
// nullではないということを言い切る方法
// input3とinput4は同じものである
const input3 = document.getElementById('input');
const input4 = document.getElementById('input');
const designer = {
    name: 'tom',
    age: '23',
    role: 'front',
    sex: 'men',
    1: 'web',
};
// designer.で定義されていないものを出力しようとしてもエラーにならない。使い方に注意
console.log(designer.test);
function toUpperCase1(x) {
    // xがstring型だった場合のみtoUpperCaseを実行する
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    else {
        return x;
    }
}
// 下記のようにtoUpperCase1('hello')と書いたらupperHelloは間違いなくstringだと見てわかる
// しかしホバーしてみるとstring|numberと出てくる。これはtsが型を認識れていない証拠
// この場合オーバーロードと言って同じ関数を書いて返り値と引数の型を細かく設定することでts側で細かく定義できる。
const upperHello = toUpperCase1('hello');
