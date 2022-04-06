// interfaceの継承
// クラスと違い複数継承できる。
interface Nameable {
  name: string;
  // ?をつけることであってもなくてもいいという指定ができる。
  // stringとundefined型が定義される。ただしstringとundefined型のユニオン型で定義するとエラーになる
  nickname?: string
}

// nicknameフィールドがなくてもエラーにならない。
const nameable: Nameable = {
  name: 'Tom',
};

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

  // メソッドにも?をつけることができる
  greeting1?(message: string): void;
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
  // class内でもフィールドに?を与えることで初期化しなくてもいいフィールドを設定できる
  sex?: string;
  static id: number = 0;
  // ?を使ったパラメーターは必要なパラメーターの後に書くこと。
  constructor(public name: string, public age: number, public experience: number, public initSex?: string) {
    // もし初期化する値があったら初期化・なかったらundefinedにする処理
    if (initSex) {
      this.sex = initSex;
    }
  }
  greeting(message: string): void {
    console.log('hello');
  }

  // パラメーターに?をつけることであってもなくてもいいを表現できる。
  greeting2(message?: string): void {
    if (message) {
      message.toUpperCase();
    }
    console.log('hello');
  }

  // デフォルト引数:引数がなかった時にデフォルトで設定できるもの
  greeting3(message: string = 'test'): void {
    if (message) {
      message.toUpperCase();
    }
    console.log(message);
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

const developer: Human = new Developer('Quill', 38, 3, 'tom');


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

const developer4 = new Developer('Quill', 38, 3, 'tom');

// デフォルト引数が指定されている場合は引数なしでもエラーにならない。
console.log(developer4.greeting3());
