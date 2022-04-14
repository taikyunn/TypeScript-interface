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
