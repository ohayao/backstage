<template>
    <div style="height: 2000px;padding:10px">
        <p>出现滚动条</p>
        <p>一直改变:{{ Date.now() }}</p>
        <p>刷新改变:{{ date }}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const date = ref(Date.now());
        return {
            date
        };
    },
    activated(){
    },
    deactivated(){
        
    }
});
</script>
