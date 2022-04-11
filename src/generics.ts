// generics:型を引数として受け取るために使用
// 関数と引数の()の間に<>を書いて使用する
// 一般的にはT(type)が使用される
function copy<T>(value: T): T {
  return value;
}

// 呼び出す側でも<>を同様に使用して型を設定することができる
console.log(copy<string>('hello'));

// 以下の書き方でも動く。Tに{name:string}という情報が入るため.nameの補完がされる
console.log(copy({name: 'tom'}).name);

// 型パラメーターに制約をつける extends
// 下記は型パラメータが{name: string}型のもののみを許容するという意味
function copy1<T extends {name: string}>(value: T): T {
  return value;
}

console.log(copy1({name: 'test'}));

// keyof演算子
// オブジェクトの型のキーを取り出してユニオン型で繋げるメソッド
type K = keyof {name: {}, age: number};

// Uはnameとageのユニオン型
// Uにはnameとageのみ入りそれ以外はエラーになる
function copy2<T extends {name: string}, U extends keyof T>(value: T, key: U): T {
  value[key]
  return value;
}
console.log(copy2({name: 'tom', age: 38}, 'age'));
