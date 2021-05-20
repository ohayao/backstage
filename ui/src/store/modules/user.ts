import { InjectionKey } from 'vue';
import {createStore,useStore as aliasUserStore,Store} from 'vuex';
interface ISUser{
    nick:string;
    hobby?:string[];
}

const Key:InjectionKey<Store<ISUser>>=Symbol();
const RegistStroe=()=>{
    return aliasUserStore(Key);
};
const UserStore=createStore<ISUser>({
    state:{
        nick:'boss',
        hobby:['fish','dog']
    },
    getters:{
        hobbyString(state):string{
            return state.hobby!.join('-');
        },
        hobbyStringFormat(state,getters):string{
            return `${state.nick}'s hobby = ${getters.hobbyString}`;
        }
    },
    mutations:{
        changeNick(state){
            state.nick=state.nick.split('').reverse().join('');
        },
        changeHobby(state,payload:{index:number,value:string}){
            state.hobby![payload.index]=payload.value;
        }
    },
    actions:{
        changeNick(context):void{
            context.commit('changeNick');
        },
        changeNicks({commit},payload:{name:string}):void{
            console.log(payload.name);
            commit('changeNick');
        },
        async changeNicksAsync({commit},payload:{timeout:number}):Promise<void>{
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    commit('changeNick');
                    resolve();
                }, payload.timeout);
            });
        }
    }
});
export{
    ISUser,
    Key,
    RegistStroe,
    UserStore
}