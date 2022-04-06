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
