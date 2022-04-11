"use strict";
var _a, _b, _c, _d;
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
const downloadedData = {
    id: 1,
};
// もしdownloadedData.user.nameがあったらその値をなかったらundefinedを返す
// ?で表現している。
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name);
console.log((_c = (_b = downloadedData.user) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.first);
// Nullish Coalescing ??
// undefinedだった場合の初期値を返す方法
const userData = (_d = downloadedData.user) !== null && _d !== void 0 ? _d : 'no-user';
// 型の互換性
let target = 'hello';
let source = 'hello';
target = source;
// enum型とnumber型は互換性がある。
// つまりenum型の値にnumber型を入れることができる。
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
let target1 = Color.RED;
let source1 = 0;
target1 = source1;
// 以下の場合,source2の方の引数を2つにするとエラーになる
let target2 = function (a, b) { };
let source2 = function (a) { };
target2 = source2;
class AdvancedPerson {
    constructor() {
        this.name = 'Peter';
        this.age = 5;
    }
}
class AdvancedCar {
    constructor() {
        this.name = 'Prius';
        this.age = 5;
    }
}
let target3 = new AdvancedPerson();
let source3 = new AdvancedCar();
const upperHello1 = toUpperCase;
upperHello1('hi');
upperHello1(32);
// オーバーロードした関数を使用する場合は全部に対応しておく必要がある。
const upperHello2 = function (x) { return 0; };
// intersectionFuncはFuncAとFuncBをオーバーロードしたものになる。
// つまり全部が適用されている必要がある
// 下記の書き方の場合FuncAが優先される。(左側に書いたものが優先される)
let intersectionFunc;
// bはあってもなくてもいいので?がないとエラーになる
intersectionFunc = function (a, b) { return 0; };
let unionFunc;
// パラメーター：インタセクション型 返り値: ユニオン型
unionFunc = function (a) { return 'hi'; };
unionFunc = function (a) { return 34; };
// レストパラメーター
function advancedFunction(...args) { }
// タプル型で書くとレストパラメーターの要素数を指定できる
function advancedFunction1(...args) { }
advancedFunction1(0, 'hi', true);
// オプショナルパラメーター(?)を使うことであってもなくてもいいを表現
function advancedFunction2(...args) { }
advancedFunction2(1, 'hello');
// タプル+オプショナルパラメーターもできる
function advancedFunction3(...args) { }
advancedFunction3(2, 'hi', true, 2, 2, 3);
