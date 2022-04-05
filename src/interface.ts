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

