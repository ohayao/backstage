import { InjectionKey } from 'vue';
import {createStore,useStore as aliasUserStore,Store} from 'vuex';
interface ISStudent{
    name:string;
    age:number;
    courses?:string[];
}

const Key:InjectionKey<Store<ISStudent>>=Symbol();
const RegistStroe=()=>{
    return aliasUserStore(Key);
};
const StudentStore=createStore<ISStudent>({
    state:{
        name:'小明',
        age:10
    },
    getters:{
        
    },
    mutations:{},
    actions:{
        
    }
});
export{
    ISStudent,
    Key,
    RegistStroe,
    StudentStore
}