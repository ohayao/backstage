<template>
    <div class="div">
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
            <input type="text" v-model="childchild.x">
            <input type="text" v-model="childchild.y">
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref,reactive,toRefs, computed, readonly, watchEffect, watch, inject, provide } from 'vue';
interface Student{
    name:String,
    age:number,
    else:Object
}
export default defineComponent({
    setup() {
        const title=inject('title');
        const const1=inject('const1');
        const title2=inject('title2');
        const const2=inject('const2');
        const student=inject('student');

        const childchild=reactive({x:123,y:456});
        provide('childchild',childchild);
        return{
           title,
           title2,
           const1,
           const2,
           student,
           childchild
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