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

// classに対してジェネリクスを使用する方法
class LightDatabase<T extends string | number | boolean> {
  private data : T[] = [];
  add(item: T){
    this.data.push(item);
  }
  remove(item: T){
    this.data.splice(this.data.indexOf(item), 1);
  }
  get(){
    return this.data;
  }
}
const lightDatabase = new LightDatabase<string>();
lightDatabase.add('apple');
lightDatabase.add('Banana');
lightDatabase.add('Grape');
lightDatabase.remove('Banana');
console.log(lightDatabase.get());

// interfaceに対してジェネリクスを使用する方法
interface TmpDatabase<T> {
  id: number;
  data: T[];
}

const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data:[32],
};

// typeに対してジェネリクスを使用する方法
type TmpDatabase2<T>  = {
  id: number;
  data: T[];
}

const tmpDatabase2: TmpDatabase<string> = {
  id: 3,
  data:['test'],
};

interface Todo {
  title: string;
  text: string;
}

// Partial:importしなくても使えるtsの型utilityライブラリ
// 全てオプショナルパラメータになる
type Todoable = Partial<Todo>

// Readonly:全てがreadonlyになる
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
});

fetchData.then(data => {
  data.toUpperCase();
})

const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

// defaultの型パラメータの設定
// =anyで作成できる
interface ResponseData<T extends {message: string} = any> {
  data: T,
  status: number,
}

let tmp: ResponseData;

// 型のfor文
type MappedTypes = {
  [P in 'tomato' | 'pumpkin']: P
}

interface Vegetables {
  tomato: string;
  pumpkin: string;
}

// readonly,?がつけられる
// -をつけるとreadonlyが消される
// ?に-をつけると?が消される。
type MappedVegetables = {
  -readonly [P in keyof Vegetables]-?: string
}

// ConditionalTypesの使い方。三項演算子のようなもの
// 下記は'tomato'型がstringに入るならnumber,入らないならbooleanになるという意味
type ConditionalTypes = 'tomato' extends string ? number: boolean

// infer R と書くことでanyのようなものになる。
// infer:推論する。ここではRが左側に書いてある型を推測する。
type ConditionalTypesInfer = {tomato: 'tomato'} extends {tomato: infer R} ? R : boolean;

// 左側がunion型の場合
type DistributiveConditionalTypes = ('tomato' | 'pumpkin') extends 'tomato' ? number : boolean

