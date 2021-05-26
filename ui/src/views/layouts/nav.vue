<template>
  <div class="nav">
    <ul class="breads">
      <li v-for="(item,index) in breads" :key="index">
        <a href="#">{{item.Name}}{{item.Icon}}</a>
        </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import {Key} from '@/store/modules/treemenus';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
  name: 'Navs',
  setup() {
    const sMenu=useStore(Key);
    const menu=sMenu.state;
    const route=useRoute();
    const router=useRouter();
    console.log(menu);
    const breads=(computed(()=>{
      return sMenu.getters.navPaths;
    }));
    return{
      menu,
      breads
    };
  }
});
</script>
