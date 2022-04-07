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
