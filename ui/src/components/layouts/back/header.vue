<template>
    <div :class="['header', isShowTags ? 'showTags' : '']">
        <Tools></Tools>
        <BreadCrumb></BreadCrumb>
        <Tags v-if="isShowTags"></Tags>
        <Avatar></Avatar>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import Tools from '@/components/layouts/back/tools.vue';
import BreadCrumb from '@/components/layouts/back/breadcrumb.vue';
import Tags from '@/components/layouts/back/tags.vue';
import Avatar from '@/components/layouts/back/avatar.vue';
export default defineComponent({
    name: 'Header',
    components: { Tools, BreadCrumb, Tags, Avatar },
    setup() {
        const isShowTags = inject('isShowTags') as boolean;
        return {
            isShowTags
        };
    }
});
</script>
