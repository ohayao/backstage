import { InjectionKey } from 'vue';
import { createStore, useStore as aliasUserStore, Store } from 'vuex';

interface IMenuIsShow {
    IsShow: boolean;
}

interface IMenuItem extends IMenuIsShow {
    ID: number;
    PID: number;
    Name: string;
    Href: string;
    Icon: string;
    [key: string]: any;
}
interface IMenuInfo {
    Menus: IMenuItem[];
    CurrentMenuID: number;
}
const menus = (() => {
    const result = Array<IMenuItem>();
    let id = 1;
    result.push(<IMenuItem>{ PID: 0, ID: id++, Name: '菜单一', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 0, ID: id++, Name: '菜单二', Href: '', Icon: 'fa-user' });
    result.push(<IMenuItem>{ PID: 0, ID: id++, Name: '菜单三', Href: '', Icon: 'fa-home' });

    result.push(<IMenuItem>{ PID: 1, ID: id++, Name: '菜单一A', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 1, ID: id++, Name: '菜单一B', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 1, ID: id++, Name: '菜单一C', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 1, ID: id++, Name: '菜单一D', Href: '', Icon: 'fa-list' });

    result.push(<IMenuItem>{ PID: 2, ID: id++, Name: '菜单二A', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 2, ID: id++, Name: '菜单二B', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 2, ID: id++, Name: '菜单二C', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 2, ID: id++, Name: '菜单二D', Href: '', Icon: 'fa-list' });

    result.push(<IMenuItem>{ PID: 3, ID: id++, Name: '菜单三A', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 3, ID: id++, Name: '菜单三B', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 3, ID: id++, Name: '菜单三C', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 3, ID: id++, Name: '菜单三D', Href: '', Icon: 'fa-list' });

    result.push(<IMenuItem>{ PID: 5, ID: id++, Name: '菜单一B-test1', Href: '/admin/test1', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 5, ID: id++, Name: '菜单一B-test2', Href: '/admin/test2', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 5, ID: id++, Name: '菜单一B-C', Href: '', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 5, ID: id++, Name: '菜单一B-D', Href: '', Icon: 'fa-list' });

    result.push(<IMenuItem>{ PID: 6, ID: id++, Name: '菜单一C-百度', Href: 'http://www.baidu.com', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 6, ID: id++, Name: '菜单一C-google', Href: 'http://www.google.com', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 6, ID: id++, Name: '菜单一C-QQ', Href: 'http://www.qq.com', Icon: 'fa-list' });
    result.push(<IMenuItem>{ PID: 6, ID: id++, Name: '菜单一C-firefox', Href: '', Icon: 'fa-list' });

    return result;
})();

const Key: InjectionKey<Store<IMenuInfo>> = Symbol();
const RegistStroe = () => {
    return aliasUserStore(Key);
};

const storeMenuLeft = createStore<IMenuInfo>({
    state: {
        Menus: menus,
        CurrentMenuID: 17
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
        getItem(state) {
            return (id: number): IMenuItem => {
                return state.Menus.filter((x) => x.ID == id)![0];
            };
        },
        isNewBlank(state) {
            return (m: IMenuItem): boolean => {
                if (m.Href == '') return false;
                if (m.Href.indexOf('http://') == 0 || m.Href.indexOf('https://') == 0 || (m.IsOuter && m.IsOuter == true)) {
                    return true;
                }
                return false;
            };
        },
        navPaths(state, getters) {
            return getters._navPaths(state.CurrentMenuID);
        },
        _navPaths(state) {
            const res = Array<IMenuItem>();
            const fn = (id: number) => {
                const item = state.Menus.filter((x) => x.ID == id);
                if (item.length < 1) return;
                res.push(item[0]);
                if (item[0].PID > 0) fn(item[0].PID);
            };
            return (id: number): IMenuItem[] => {
                fn(id);
                return res.reverse();
            };
        },
        isInPaths(state, getters) {
            return (defaultID: number, curID: number): boolean => {
                const res = getters._navPaths(defaultID);
                for (let i = 0; i < res.length; i++) {
                    if (res[i].ID == curID) return true;
                }
                return false;
            };
        }
    },
    mutations: {
        updateCurrentMenuID(state, payload: { id: number }) {
            state.CurrentMenuID = payload.id;
        },
        updateIsShow(state, payload: { id: number }) {
            for (let i = 0, j = state.Menus.length; i < j; i++) {
                if (state.Menus[i].ID == payload.id) {
                    state.Menus[i].IsShow = !state.Menus[i].IsShow;
                    break;
                }
            }
        },
        updateIsShows(state, payload: { id: number }) {
            for (let i = 0, j = state.Menus.length; i < j; i++) {
                if (state.Menus[i].ID == payload.id) {
                    state.Menus[i].IsShow = true;
                    break;
                }
            }
        },
        updateSameLevelIsShow(state, payload: { id: number }) {
            const pid = state.Menus.filter((x) => x.ID == payload.id)[0].PID;
            for (let i = 0, j = state.Menus.length; i < j; i++) {
                if (state.Menus[i].PID == pid && state.Menus[i].ID != payload.id) {
                    state.Menus[i].IsShow = false;
                }
            }
        }
    },
    actions: {
        toggleMenu(ctx, payload: { id: number }) {
            ctx.commit('updateIsShow', payload);
            ctx.commit('updateSameLevelIsShow', { id: payload.id });
        },
        updateShowInPaths(ctx) {
            const ms = ctx.getters._navPaths(ctx.state.CurrentMenuID) as IMenuItem[];
            ms.forEach((x) => {
                ctx.commit('updateIsShow', { id: x.ID });
            });
        }
    }
});

export { IMenuItem, IMenuInfo, Key, RegistStroe, storeMenuLeft };
