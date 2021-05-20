import * as user from './modules/user';
import * as student from './modules/student';

const stores=[
  {key:user.Key,name:user.UserStore},
  {key:student.Key,name:student.StudentStore}
];
export{
  stores
};