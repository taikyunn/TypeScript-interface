// インターセクション(Intersection)型(AかつB)
type Engineer = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

// Engineer型かつBlogger型であるEngineerBlogger型の定義
type EngineerBlogger = Engineer & Blogger;

const quill: EngineerBlogger = {
  name: 'quill',
  role: 'font-end',
  follower: 1000,
}

// interfaceでの書き方
interface EngineerInterface {
  name: string;
  role: string;
}

interface BloggerInterface {
  name: string;
  follower: number;
}

interface EngineerBloggerInterface extends EngineerInterface, BloggerInterface{};

const tom: EngineerBloggerInterface = {
  name: 'tom',
  role: 'back-end',
  follower: 2000,
}

// 下記にてMixはnumber型と定義される。かつなので。
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// TypeGuard
// TypeOf
function toUpperCase(x: string | Number) {
  // xがstring型だった場合のみtoUpperCaseを実行する
  if (typeof x === 'string') {
    return x.toUpperCase();
  } else {
    return '';
  }
}

// in演算子
type NomadWorker = Engineer | Blogger;

function describeNomadWorkerProfile(nomadWorker: NomadWorker) {
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
  // タグ付きユニオン
  kind: 'dog' = 'dog';
  speak() {
    console.log('bow-bow')
  }
}

class Bird {
  // タグ付きユニオン
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet')
  }

  fly() {
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
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
const input1 = <HTMLInputElement>document.getElementById('input');
input1.value = 'testValue';

// 方法2:こっちの使い方がベター。理由:JSX(React)では方法①だとタグだと間違えて認識される可能性があるため。
const input2 = document.getElementById('input') as HTMLInputElement;

// non-nullアサーションオペレーター
// nullではないということを言い切る方法
// input3とinput4は同じものである
const input3 = document.getElementById('input')!;
const input4 = document.getElementById('input') as HTMLElement;

// インデックスシグネーチャー
// 本来型を定義して利用している場合は、定義されていないフィールドを使用することはできない。
// インデックスシグネチャーを利用すれば、新しくフィールドを追加できる。
interface Designer {
  name: string;
  age: string;
  // インデックスシグネチャーを与えた場合は必ず他のフィールドの値もstringになる。他は定義できない
  // []内の型をstringにするとkeyはstringもnumberもok
  // []内の型をnumberにするとkeyはstringはNG,numberはok
  [index: string]: string;
}

const designer: Designer = {
  name: 'tom',
  age: '23',
  role: 'front',
  sex: 'men',
  1: 'web',
}

// designer.で定義されていないものを出力しようとしてもエラーにならない。使い方に注意
console.log(designer.test);

// オーバーロード
// 上から順番に適用されていく
function toUpperCase1(x: string): string;
function toUpperCase1(x: number): number;
function toUpperCase1(x: string | Number) {
  // xがstring型だった場合のみtoUpperCaseを実行する
  if (typeof x === 'string') {
    return x.toUpperCase();
  } else {
    return x;
  }
}
// 下記のようにtoUpperCase1('hello')と書いたらupperHelloは間違いなくstringだと見てわかる
// しかしホバーしてみるとstring|numberと出てくる。これはtsが型を認識れていない証拠
// この場合オーバーロードと言って同じ関数を書いて返り値と引数の型を細かく設定することでts側で細かく定義できる。
const upperHello = toUpperCase1('hello');

// optional chaining
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}

const downloadedData: DownloadedData = {
  id: 1,
};

// もしdownloadedData.user.nameがあったらその値をなかったらundefinedを返す
// ?で表現している。
console.log(downloadedData.user?.name);
console.log(downloadedData.user?.name?.first);

// Nullish Coalescing ??
// undefinedだった場合の初期値を返す方法
const userData = downloadedData.user ?? 'no-user';

// オブジェクトが持ってるメンバーのフィールドの型にアクセスしたい時に使用する
// []を使うことでアクセスできる。
type id = DownloadedData['id'];
type user = DownloadedData['user'];
// union型も使用できる
type idUser = DownloadedData["id" | "user"];

// 型の互換性
let target: string = 'hello';
let source: 'hello' = 'hello';
target = source

// enum型とnumber型は互換性がある。
// つまりenum型の値にnumber型を入れることができる。
enum Color {
  RED,
  BLUE,
}
let target1 = Color.RED;
let source1 = 0;
target1 = source1;

// 以下の場合,source2の方の引数を2つにするとエラーになる
let target2 = function(a: string, b: string){};
let source2 = function(a: string){};
target2 = source2;

class AdvancedPerson {
  name: string = 'Peter';
  private age: number = 5;
}
class AdvancedCar {
  name: string = 'Prius';
  private age: number = 5;
}

let target3 = new AdvancedPerson();
let source3 = new AdvancedCar();
// 左側の値の数が大きくなってしまうとエラーになる。
// またprivateがあるとエラーになる
// target3 = source3;

// オーバーロードされた関数を定数として扱ってみる
interface TmpFunc {
  (x: string): number;
  (x: number): number;
}
const upperHello1 = toUpperCase;
upperHello1('hi');
upperHello1(32);

// オーバーロードした関数を使用する場合は全部に対応しておく必要がある。
const upperHello2: TmpFunc = function(x: number | string){return 0};

// 関数のインターセクション型:関数かつ関数のもの
interface FuncA {
  // interface内での関数の書き方
  (a: number, b: string): number;
  (a: string, b: number): number;
}

interface FuncB {
  (a: string): number;
}

// intersectionFuncはFuncAとFuncBをオーバーロードしたものになる。
// つまり全部が適用されている必要がある
// 下記の書き方の場合FuncAが優先される。(左側に書いたものが優先される)
let intersectionFunc: FuncA & FuncB;
// bはあってもなくてもいいので?がないとエラーになる
intersectionFunc = function(a: number | string, b?: number | string) {return 0};

// 関数のunion型
interface FuncC {
  (a: number): number;
}

interface FuncD {
  (a: string): string;
}

let unionFunc: FuncC | FuncD;
// パラメーター：インタセクション型 返り値: ユニオン型
unionFunc = function (a: string) { return 'hi' };
unionFunc = function (a: number) { return 34 };

// レストパラメーター
function advancedFunction(... args: number[]) {}

// タプル型で書くとレストパラメーターの要素数を指定できる
function advancedFunction1(... args: [number, string, boolean]) {}
advancedFunction1(0, 'hi', true);

// オプショナルパラメーター(?)を使うことであってもなくてもいいを表現
function advancedFunction2(... args: [number, string?, boolean?]) {}
advancedFunction2(1, 'hello');

// タプル+オプショナルパラメーターもできる
function advancedFunction3(... args: [number, string, boolean, ...number[]]) {}
advancedFunction3(2, 'hi', true, 2, 2, 3);

// readonlyを配列やタプルにつける
// タプル:...argsの後にreadonlyをつける
function advancedFunction4(... args: readonly [number, string, boolean, ...number[]]) {}

// 配列の場合
function advancedFunction5(... args: readonly number[]) {}

// constアサーション
// milkリテラル型になる
let milk = 'milk' as const;

// 配列の場合
// タプル型になりreadonly修飾子がつく
let array = [10, 20] as const;

// オブジェクト
// 定数オブジェクトになる
const peter = {
  name: 'Peter',
  age: 38,
} as const;

// 型の中でtypeofを使う
// peterの型を使いたい時はtypeof 値 で型を取得できる
type PeterType = typeof peter;
