// interfaceの作成
// typeエイリアスと同じようなもの。ほとんど同じ
// interfaceはオブジェクトのみに使用できる。typeエイリアスは全てに使える。
// interfaceはオブジェクトのみに使用できる=よって分かりやすいのが特徴
interface Human {
  name: string;
  age: number;
}

const human = {
  name: 'Tom',
  age: 38,
}
let developer: Human;
