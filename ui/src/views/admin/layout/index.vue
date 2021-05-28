<template>
    <div id="app" :class="[isFold ? '' : 'unfold']">
        <div class="menuLeft">
            <div class="logo">Igloohome</div>
            <MenuLeft :pid="0"></MenuLeft>
        </div>
        <Header></Header>
        <div class="container">
            <keep-alive>
                <iframe v-if="aMenu && sML.getters.isNewBlank(aMenu)" :src="aMenu.Href"></iframe>
                <div class="content" v-else>
                    <router-view v-show="isReload"></router-view>
                </div>
            </keep-alive>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, watch, ref, reactive, computed, provide, nextTick } from 'vue';
import MenuLeft from '@/components/layouts/back/menuLeft.vue';
import Header from '@/components/layouts/back/header.vue';
import { IMenuItem, Key } from '@/store/MenuLeft/index';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default defineComponent({
    components: {
        MenuLeft,
        Header
    },
    setup() {
        const sML = useStore(Key);
        const router = useRouter();
        const toOpenMenu = sML.getters.getItem(sML.state.CurrentMenuID) as IMenuItem;
        onMounted(() => {
            //设置默认展开的菜单
            sML.dispatch('updateShowInPaths');
            //打开默认的页面
            router.push({ path: toOpenMenu.Href });
        });
        //刷新页面
        const isReload = ref(true);
        provide('reload', () => {
            isReload.value = false;
            nextTick(() => {
                isReload.value = true;
            });
        });
        //侧边栏展开
        const isFold = ref(true);
        provide('fold', (): boolean => {
            isFold.value = !isFold.value;
            return isFold.value;
        });
        //是否展示标签
        const isShowTags = ref(false);
        provide('isShowTags', isShowTags);
        // provide('tags',():boolean=>{
        //     isShowTags.value=!isShowTags.value;
        //     console.log(isShowTags);
        //     return isShowTags.value;
        // });
        return {
            sML,
            aMenu: computed(() => {
                return sML.getters.getItem(sML.state.CurrentMenuID) as IMenuItem;
            }),
            isReload,
            isFold
        };
    }
});
</script>
<style lang="less">
@import '@/assets/less/layoutBack.less';
</style>
