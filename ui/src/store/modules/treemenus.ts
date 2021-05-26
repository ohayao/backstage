import { InjectionKey } from 'vue';
import { createStore, useStore as aliasUserStore, Store } from 'vuex';

interface IMenuItem {
  ID: number;
  PID: number;
  Name: string;
  Href?: string;
  Icon?: string;
  IsOuter?: boolean;
  [key: string]: any;
}
interface IMenuInfo {
  Menus: IMenuItem[];
  CurrentMenuID:number;
  OpenID: number;
}
const Key: InjectionKey<Store<IMenuInfo>> = Symbol();
const RegistStroe = () => {
  return aliasUserStore(Key);
};
const datas = require('@/mocks/menu.json') as Array<any>;
const menus = Array<IMenuItem>();
datas.forEach((v) => {
  menus.push(<IMenuItem>{
    ID: v.id,
    PID: v.parent_id,
    Name: v.name,
    Icon: v.icon,
    Href: v.href,
    IsOuter: v.is_outer
  });
});
const menuStore = createStore<IMenuInfo>({
  state: {
    Menus: menus,
    CurrentMenuID:0,
    OpenID: menus.filter((x) => x.PID == 0)[0].ID
  },
  getters: {
    children(state) {
      return (pid: number) => {
        return state.Menus.filter((x) => x.PID == pid);
      };
    },
    hasChildren(state) {
      return (id: number): boolean => {
        return state.Menus.filter((x) => x.PID == id).length > 0;
      };
    },
    isNewBlank(state) {
      return (m: IMenuItem): boolean => {
        if (!m.Href || m.Href == '') return false;
        if (m.Href.indexOf('http://') == 0 || m.Href.indexOf('https://') == 0 || (m.IsOuter && m.IsOuter == true)) {
          return true;
        }
        return false;
      };
    },
    navPaths(state){
        const res=Array<IMenuItem>();
        const fn=(id:number)=>{
            const item=state.Menus.filter(x=>x.ID==id);
            if(item.length<1) return;
            res.push(item[0]);
            if(item[0].PID>0) fn(item[0].PID);
        };
        fn(state.CurrentMenuID);
        return res.reverse();
    }
  },
  mutations: {
    changeOpenID(state, payload: { pid: number }) {
      state.OpenID = payload.pid;
    },
    updateCurrentMenuID(state,payload:{id:number}){
        state.CurrentMenuID=payload.id;
    },
    updateClicks(state, payload: { id: number }) {
      for (let i = 0, j = state.Menus.length; i < j; i++) {
        if (state.Menus[i].ID == payload.id) {
          if (typeof state.Menus[i].clicks == 'undefined') {
            state.Menus[i].clicks = true;
          } else {
            state.Menus[i].clicks = !state.Menus[i].clicks;
          }
          break;
        }
      }
    },
    updateSameLevelClicks(state, payload: { id: number }) {
      const pid = state.Menus.filter((x) => x.ID == payload.id)[0].PID;
      for (let i = 0, j = state.Menus.length; i < j; i++) {
        if (state.Menus[i].PID == pid && state.Menus[i].ID != payload.id) {
          if (typeof state.Menus[i].clicks == 'undefined') {
            state.Menus[i].clicks = false;
          } else if (state.Menus[i].clicks) {
            state.Menus[i].clicks = false;
          }
        }
      }
    }
  },
  actions: {
    toggleMenu(ctx, payload: { id: number }) {
      ctx.commit('updateClicks', payload);
      ctx.commit('updateSameLevelClicks', { id: payload.id });
    }
  }
});

export { IMenuItem, IMenuInfo, Key, RegistStroe, menuStore };
