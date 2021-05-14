<template>
    <div class="div">
        <h1>组件通信 [Provide,Inject]</h1>
        <div class="model">
            <input type="text" v-model="title">
            <input type="text" v-model="const1">
            <input type="text" v-model="title2">
            <input type="text" v-model="const2">
            <div class="model">
                <input type="text" v-model="student.name">
                <input type="text" v-model="student.age">
                <input type="text" v-model="student.else.a">
            </div>
        </div>
        <div class="model" style="width:45%;float:left;">
            <h1>02-child.vue</h1>
            <TwoChild />
        </div>
        <div class="model" style="width:45%;float:left;">
            <h1>02-child-child.vue</h1>
            <TwoChildChild />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref,reactive,toRefs, provide,inject } from 'vue';
import TwoChild from './02-child.vue';
import TwoChildChild from './02-child-child.vue';
interface Student{
    name:String,
    age:number,
    else:Object
}
export default defineComponent({
    components:{
        TwoChild,
        TwoChildChild
    },
    data(){
        return{
            title:'1title noref',
            const1:ref('1const ref')
        }
    },
    setup() {
        let title2=ref('2title! ref');
        const hobbys=ref(['fishing','driving','shopping']);
        const student:Student=reactive({
            name:'zhangsan',
            age:18,
            else:{
                a:'a',
                b:1
            }
        });
        let const2='2const noref';
        provide('title2',title2);
        provide('const2',const2);
        provide('student',student);

        const childchild=inject('childchild');
        console.log(childchild);//无法获取到子组件传递的值

        const childchild1=inject('childchild1');
        console.log(childchild1);//无法获取到子组件传递的值

        return{
            title2,
            const2,
            hobbys,
            student,
            //...student,这样解构数据 会失去响应式
            ...toRefs(student),//解构student的数据 使得可以直接使用以及支持响应
            ...toRefs(student.else),
            childchild
        }
    },
    provide(){
        return{
            title:this.title,
            const1:this.const1
        }
    }
})
</script>
<style lang="less" scoped>
.div{
    width:100%;
    margin:0 auto;
    padding:20px;
    .model{
        border:solid 3px #333;
        padding:10px;
        margin:10px;
    }
    input[type='text'],input[type='number']{
        margin: 5px 0;
        padding:10px 7px;
        width:100%;
        max-width: 500px;
    }
    button{
        padding:5px 10px;
        border:solid 1px #ccc;
        background-color: #eee;
        color:#f00;
        cursor: pointer;
    }
}
</style>