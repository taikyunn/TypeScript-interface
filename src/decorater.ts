// classをdecorateするものがdecorator
function Logging(constructor: Function) {
  console.log('logging...');
  console.log(constructor);
}
function Component(template: string, selector: string) {
  // instanceの中身をnew()の後にかく
  return function(constructor: { new(...args: any[]): {name: string}}) {
    // HTML要素をセレクタ指定するメソッド
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if (mountedElement) {
      // 指定した要素の中身を書き換える
      mountedElement.innerHTML = template;
      // 指定したテキストの中身を書き換える
      mountedElement.querySelector('h1')!.textContent = instance.name;
    }
  }
}

// デコレーター
// デコレーターはインスタンス生成時ではなくクラス生成時に作成される
@Logging
@Component('<h1>{{name}}</h1>', '#app')
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

