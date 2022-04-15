// classをdecorateするものがdecorator
function Logging(constructor: Function) {
  console.log('logging...');
  console.log(constructor);
}

// デコレーター
// デコレーターはインスタンス生成時ではなくクラス生成時に作成される
@Logging
class User {
  name = 'Tom';
  constructor() {
    console.log('user was created')
  }
}

const user4 = new User();
const user2 = new User();
const user3 = new User();

// デコレーターファクトリー
// デコレータを返す関数とする。
function Logging1(message: string) {
  return function Logging1(constructor: Function) {
    console.log(message)
    console.log('logging...');
    console.log(constructor);
  }
}

// 引数を書く形でデコレーターを設定する
@Logging1('test user')
class User1 {
  name = 'James';
  constructor() {
    console.log('user was created')
  }
}
const user5 = new User1()
