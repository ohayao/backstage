<template>
    <div class="div">
        <h1>数据绑定，响应式数据</h1>
        <div class="model">
            <h3>【Ref - String】 {{title}}</h3>
            <input type="text" v-model="title">
        </div>
        <div class="model">
            <h3>【Ref - Array】 {{hobbys}}</h3>
            <input type="text" v-model="hobbys"><br>
            <button @click="getAddGet">获取添加获取</button>
        </div>
        <div class="model">
            <h3>【Reactive - Object】 {{student}}</h3>
            <input type="text" v-model="student.name"><br>
            <input type="number" v-model="student.age"><br>
        </div>
        <div class="model">
            <h3>【Reactive - toRefs - Object】 {{name}}</h3>
            <input type="text" v-model="name"><br>
            <input type="number" v-model="age"><br>
        </div>
        <div class="model">
            <h3>【computed 计算属性】</h3>
            <p><b>{{name}}</b>的出生日期 <b>{{year}}</b></p>
        </div>
        <div class="model">
            <h3>【readonly 非响应数据】</h3>
            <button @click="changeRef()">ref数据变成非响应数据</button>
        </div>
        <div class="model">
            <h3>【watch 】</h3>
            <input type="number" v-model="b"><br>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref,reactive,toRefs, computed, readonly, watchEffect, watch } from 'vue';
interface Student{
    name:String,
    age:number,
    else:Object
}
export default defineComponent({
    setup() {
        let title=ref('Hello world!');
        //title=readonly(title); //在这里调用可以将响应数据变为非响应数据，但是在下面的方法中却不能
        const hobbys=ref(['fishing','driving','shopping']);
        const student:Student=reactive({
            name:'zhangsan',
            age:18,
            else:{
                a:'a',
                b:1
            }
        });
        const getAddGet=():void=>{
            console.log(hobbys.value);
            hobbys.value.push('working');
            console.log(hobbys.value);
        };
        const year=computed(()=>{
            return new Date().getFullYear()-student.age;
        });
        const changeRef=():void=>{
            title=readonly(title);
        };
        watchEffect(()=>{
            console.log(`${student.name}的年龄${student.age}`);
            //title的值改变，并不会监听到 ，只在加载成功后执行一次
            console.log(`title的值${title}`);
        });
        watch(year,(cur,last)=>{
            console.log(cur,last);
        });
        return{
            title,
            hobbys,
            getAddGet,
            student,
            //...student,这样解构数据 会失去响应式
            ...toRefs(student),//解构student的数据 使得可以直接使用以及支持响应
            year,
            changeRef,
            ...toRefs(student.else)
        }
    },
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