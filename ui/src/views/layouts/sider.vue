<template>
  <div class="sider">
    <TreeMemu :pid="pid" :openid="openid" v-show="true" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import TreeMemu from '@/components/treemenus/menu.vue';
import { useStore } from 'vuex';
import {Key} from '@/store/modules/treemenus';
export default defineComponent({
  name: 'Sider',
  components: {
    TreeMemu
  },
  setup() {
    const sMenu=useStore(Key);
    const menus=sMenu.state;
    //const datas=menus.Menus;
    const router = useRouter();
    //const datas = reactive(require('@/mocks/menu.json'));
    const pid = 0;
    const openid=11;
    return {
      //datas,
      pid,
      openid
    };
  }
});
</script>
<style lang="less" scoped></style>
