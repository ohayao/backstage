<template>
    <ul class="tools">
        <li @click="toggleFold"><i :class="['fa', isFold ? 'fa-indent' : 'fa-outdent']"></i></li>
        <li @click="Refresh()" title="刷新"><i class="fa fa-sync-alt"></i></li>
        <li @click="isShowTags=!isShowTags"><i :class="['fa',isShowTags?'fa-tags':'fa-tag']"></i></li>
    </ul>
</template>
<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
export default defineComponent({
    name: 'Tools',
    setup() {
        //获取工具栏对应的方法
        const fnReload = inject('reload') as Function;
        const Refresh = () => {
            fnReload();
        };
        const isFold = ref(true);
        const fnFold = inject('fold') as Function;
        const toggleFold = () => {
            fnFold();
            isFold.value = !isFold.value;
        };
        const isShowTags=inject('isShowTags') as boolean;
        
        return {
            Refresh,
            toggleFold,
            isFold,
            isShowTags
        };
    }
});
</script>