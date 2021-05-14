<template>
    <div class="forUser">
        Welcome {{userName}}
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'ForUser',
    props:{
        userName: {
            type: String,
            defualt: '无名之辈'
        },
        sex:{
            type: String,
            require:true,
            default:'?'
        }
    }
})
</script>
<style lang="less" scoped>
.forUser{
    border: solid 10px #000;
    padding:10px;
    background-color: #f00;
    color:#fff;
}
</style>