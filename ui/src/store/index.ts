import * as user from './modules/user';
import * as student from './modules/student';
import * as framer from './modules/backframer'
import * as treemenus from './modules/treemenus'
const stores = [
  { key: user.Key, name: user.UserStore },
  { key: student.Key, name: student.StudentStore },
  { key: framer.Key, name: framer.FramerStore },
  {key:treemenus.Key,name:treemenus.menuStore}
];
export { stores };
