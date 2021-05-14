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
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref,reactive,toRefs, computed, readonly, watchEffect, provide, inject } from 'vue';
export default defineComponent({
    setup() {
        const title2=inject('title2');
        const const2=inject('const2');
        const childchild1=reactive({x:123,y:456});
        provide('childchild1',childchild1);
        return{
           title2,
           const2
        }
    },
    inject:['title','const1','student']
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