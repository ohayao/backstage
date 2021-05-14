import {createStore} from 'vuex';

interface IOther{
    Name:String;
    Password:String;
    Age:number;
    Hobbys:String[];
}

const SOther=createStore({
    state:{
        IOther:<IOther>{
            Name:'zhangsan',
            Password:'123',
            Age:10,
            Hobbys:['a']
        }
    },
    mutations:{
        hahaa(){
            console.log('hahahhaa');
        }
        // increment(state){
        //     state.IOther.Age+=3;
        // },
        // increments(state,num:number):void{
        //     state.IOther.Age+=num;
        // }
    },
    getters:{
        // hobbysToString(state):String{
        //     return state.IOther.Hobbys.reverse().join(',');
        // },
        // nameReverse(state):String{
        //     return state.IOther.Name.split('').reverse().join(',');
        // }
    },
    actions:{
        // subAge:(context)=>{
        //     //context 可以获取当前上下文
        //     context.state.IOther.Age--;
        // },
        // subAges:(context,num:number)=>{
        //     context.commit('increments',num);
        // }
    },
    modules:{}
});

export{
    SOther,
    IOther
};