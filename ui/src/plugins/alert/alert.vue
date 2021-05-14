<template>
    <div class="alert" v-show="message.isShow">
        <h1 class="header">{{message.title}}</h1>
        <div class="body">{{message.content}}</div>
        <div class="footer">
            <button @click="successEvent">确定{{title}}</button>
            <button @click="cancelEvent">取消</button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
import {Message} from './alert';
export default defineComponent({
    name:'Alert',
    props:{},
    setup(props){
        console.log(props)
        const msg=ref<Message>({
            Title:'abc',
            Content:'123',
            IsShow:true
        });
        const show=()=>{
            msg.value.IsShow=true;
        };
        const hide=()=>{
            msg.value.IsShow=false;
        };
        return{
            msg,
            show,
            hide
        }
    }
})
</script>
