<template>
    <div class="div">
        <h1>组件通信 [Provide,Inject]</h1>
        <div class="model">
            <input type="text" v-model="name">
            <input type="text" v-model="age">
            <h3>获取子组件的值</h3>
            <input type="text" v-model="title">
            <input type="text" v-model="content">{{newss}}
        </div>
        <div class="model">
            <h1>03-child.vue</h1>
            <ThirdChild />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,reactive,toRefs, provide,inject } from 'vue';
import ThirdChild from './03-child.vue';
interface Student{
    name:String;
    age:Number;
}
interface News{
    title:String;
    content:String;
}
export default defineComponent({
    components:{
        ThirdChild,
    },
    inject:['news1'],
    data(){
        return{
            "newss":this.news1
        }
    },
    setup() {
        const student=reactive({name:'xiaoming',age:10});
        provide('student',student);
        const news:News=inject('news') as News;
        console.log('@@@@@@@@@@@',news);
        return{
            ...toRefs(student),
            ...toRefs(news)
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