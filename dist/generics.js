"use strict";
// generics:型を引数として受け取るために使用
// 関数と引数の()の間に<>を書いて使用する
// 一般的にはT(type)が使用される
function copy(value) {
    return value;
}
// 呼び出す側でも<>を同様に使用して型を設定することができる
console.log(copy('hello'));
// 以下の書き方でも動く。Tに{name:string}という情報が入るため.nameの補完がされる
console.log(copy({ name: 'tom' }).name);
// 型パラメーターに制約をつける extends
// 下記は型パラメータが{name: string}型のもののみを許容するという意味
function copy1(value) {
    return value;
}
console.log(copy1({ name: 'test' }));
// Uはnameとageのユニオン型
// Uにはnameとageのみ入りそれ以外はエラーになる
function copy2(value, key) {
    value[key];
    return value;
}
console.log(copy2({ name: 'tom', age: 38 }, 'age'));
