<template>
  <div class="header">
    <span class="logo">Igloohome</span>
    <div class="user">
      <img src="../../assets/imgs/head.gif" alt="">
      <span>Administrator</span>
      <a href="#">退出</a>
    </div>
  </div>
  <div id="menu" @click="menu"><i :class="['fa',storeFramer.getters.getNextClass]"></i></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import {Key as keyFramer} from '@/store/modules/backframer';
export default defineComponent({
  name: 'Header',
  setup() {
    const storeFramer=useStore(keyFramer);
    const iFrmaer=storeFramer.state;
    const menu=()=>{
      storeFramer.commit('changeNextClass');
    };
    return{
      storeFramer,
      menu
    }
  }
});
</script>