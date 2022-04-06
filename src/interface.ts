// interfaceの継承
// クラスと違い複数継承できる。
interface Nameable {
  name: string;
}

// interfaceの作成
// typeエイリアスと同じようなもの。ほとんど同じ
// interfaceはオブジェクトのみに使用できる。typeエイリアスは全てに使える。
// interfaceはオブジェクトのみに使用できる=よって分かりやすいのが特徴
interface Human extends Nameable {
  // 上書きすることもできる。
  name: string;
  // interfaceにもreadonlyがある
  readonly age: number;
  // interfaceのメソッドの書き方
  greeting(message: string): void;
}

const human = {
  name: 'Tom',
  age: 38,
  greeting(message: string) :void {
    console.log(message);
  }
}

// implements:実装する。
// interfaceを実装するために使うのがimplements
// implementsは複数つけることができる
class Developer implements Human {
  static id: number = 0;
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string): void {
    console.log('hello');
  }
}

// Humanを型として定義することはできる。
// ただしclass内で指定したexperienceに関してはuserからアクセスできない。
// 構造的部分型という
const user: Human = new Developer('Quill', 38, 3);
// readonlyなので上書き不可
// user.age = 28;

// 以下の書き方もできる
const user1: Human = {
  name: 'Quill',
  age: 38,
  greeting(message: string) {
    console.log(message);
  }
};

const developer: Human = new Developer('Quill', 38, 3);


type addFunc = (num1: number, num2: number) => number;
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

// interfaceで関数の型を定義する(上記と同じ)
interface addFunc1 {
  // メソッド名を書かない
  // 引数2つをとってnumber型の値をreturnするという記載
  (num1: number, num2: number): number;
}

let addFunc1: addFunc1;
addFunc1 = (n1: number, n2: number) => {
  return n1 + n2;
}
