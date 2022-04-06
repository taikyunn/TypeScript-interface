// interfaceの作成
// typeエイリアスと同じようなもの。ほとんど同じ
// interfaceはオブジェクトのみに使用できる。typeエイリアスは全てに使える。
// interfaceはオブジェクトのみに使用できる=よって分かりやすいのが特徴
interface Human {
  name: string;
  age: number;
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

// 以下の書き方もできる
const user1: Human = {
  name: 'Quill',
  age: 38,
  greeting(message: string) {
    console.log(message);
  }
};

