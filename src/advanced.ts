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
