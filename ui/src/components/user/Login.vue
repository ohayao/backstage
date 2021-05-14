<template>
    <Global></Global>
    <div class="userLogin">
        <ForUser userName="zhangsan"></ForUser>
        UserLogin
        123
        1234
        12345
        Global是一个全局组件
        ForUser 是一个局部组件
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ForUser from '../../plugins/foruser.vue';
export default defineComponent({
    name: 'UserLogin',
    components:{
        ForUser
    }
})
</script>
<style lang="less" scoped>
    .userLogin{
        border: solid 1px #000;
        padding: 10px;
        margin:10px;
        overflow: hidden;
    }
</style>