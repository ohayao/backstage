import { createStore } from 'vuex';
import {SOther} from './context/other';
export default createStore({
  // state:{
  //   userss:{}
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    SOther
  }
});
// import{SUser,IUser} from './context/session';
// import {SOther,IOther} from './context/other';

// const store= createStore({
//   modules:{
//     SUser,
//     SOther
//   }
// });
// export default store;
// export{
//   SUser,
//   IUser,
//   SOther,
//   IOther
// }
