<template>
  <ul :pid="pid">
    <li v-for="(item, key) in sMenu.getters.children(pid)" :key="key">
      <template v-if="sMenu.getters.hasChildren(item.ID)">
        <div @click.prevent.stop="toggleMenu(item.ID)" :class="item.clicks ? 'active' : ''">
          <i :class="['fa', item.Icon]"></i>
          <span>{{ item.Name }}</span>
          <i :class="['fa', item.clicks ? 'fa-angle-up' : 'fa-angle-down']"></i>
        </div>
        <TreeMenu :pid="item.ID" :class="item.clicks ? 'show' : 'hide'" />
      </template>
      <template v-else>
        <template v-if="sMenu.getters.isNewBlank(item)">
          <a :href="item.Href" :target="sMenu.getters.isNewBlank(item) ? '_blank' : ''">{{ item.Name }}</a>
        </template>
        <template v-else>
          <a @click.prevent="OpenPage(item)" :class="[item.ID==currentMenuID?'active':'']">{{ item.Name }}</a>
        </template>
      </template>
    </li>
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import TreeItem from '@/components/treemenus/item.vue';
import * as tm from '@/store/modules/treemenus';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  name: 'TreeMenu',
  components: {
    TreeItem
  },
  props: {
    datas: {
      type: Array
    },
    pid: Number
  },
  setup(props: any) {
    const sMenu = useStore(tm.Key);
    const router = useRouter();
    const currentMenuID = ref(0);
    const toggleMenu = (id: number) => {
      sMenu.dispatch({
        type: 'toggleMenu',
        id: id
      });
    };
    const OpenPage = (item: tm.IMenuItem) => {
      currentMenuID.value = item.ID;
      sMenu.commit('updateCurrentMenuID',{id:item.ID});
      router.push({
        path: item.Href!
      });
    };
    return {
      sMenu,
      toggleMenu,
      OpenPage,
      currentMenuID
    };
  }
};
</script>
