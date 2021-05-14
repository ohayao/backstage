import {createStore} from 'vuex';

interface IUser{
    Name:String;
    Password:String;
    Age:number;
    Hobbys:String[];
}

const SUser=createStore({
    state:{
        User:<IUser>{
            Name:'zhangsan',
            Password:'123',
            Age:10,
            Hobbys:['a']
        }
    },
    mutations:{
        increment(state){
            state.User.Age+=3;
        },
        increments(state,num:number):void{
            state.User.Age+=num;
        }
    },
    getters:{
        hobbysToString(state):String{
            return state.User.Hobbys.reverse().join(',');
        },
        nameReverse(state):String{
            return state.User.Name.split('').reverse().join(',');
        }
    },
    actions:{
        subAge:(context)=>{
            context.state.User.Age--;
        },
        subAges:(context,num:number)=>{
            context.commit('increments',num);
        }
    },
    modules:{}
});

export{
    SUser,
    IUser
};