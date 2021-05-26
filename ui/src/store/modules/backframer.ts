import { InjectionKey } from 'vue';
import { createStore, useStore as aliasUserStore, Store } from 'vuex';
interface ISFramer {
  BtnClass: {
    CurIndex: number;
  };
  ContainerClass:{
      CurIndex:number;
  }
}

const Key: InjectionKey<Store<ISFramer>> = Symbol();
const RegistStroe = () => {
  return aliasUserStore(Key);
};
const FramerStore = createStore<ISFramer>({
  state: {
    BtnClass: {
      CurIndex: 0
    },
    ContainerClass:{
        CurIndex:0
    }
  },
  getters: {
    getNextClass(state): string {
      const clss = ['fa-angle-double-left', 'fa-angle-left','fa-angle-right'];
      return clss[state.BtnClass.CurIndex % clss.length];
    },
    getContainerClass(state):string{
        const clss=['','small','none'];
        return clss[state.ContainerClass.CurIndex%clss.length];
    }
  },
  mutations: {
      changeNextClass(state){
          state.BtnClass.CurIndex++;
          state.ContainerClass.CurIndex++;
      }
  },
  actions: {}
});
export { ISFramer, Key, RegistStroe, FramerStore };
