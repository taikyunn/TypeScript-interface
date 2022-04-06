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
    speak() {
        console.log('bow-bow');
    }
}
class Bird {
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    // instanceof:Birdクラスから生成されたインスタンスだった場合という判定
    if (pet instanceof Bird) {
        pet.fly();
    }
}
// 関数の実行
havePet(new Bird());
havePet(new Dog());
// オブジェクトで呼び出すとhelloのみ出力される。
havePet({ speak() { console.log('hello'); }, fly() { console.log('not fly'); } });
