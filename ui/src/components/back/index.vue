<template>
  <teleport to="body">
    <Header />
    <Menus />
  </teleport>
</template>

<script lang="ts">
import { defineComponent, provide, ref, watch } from "vue";
import Header from "../layout/header.vue";
import Menus from "../layout/menus.vue";
export default defineComponent({
  components: {
    Header,
    Menus,
  },
  setup() {
    const menuIndex = ref(0);
    provide("menuIndex", menuIndex);
    // watch(menuIndex, (nv, ov) => {
    //   console.log("watch", menuIndex.value, nv, ov);
    // });
  },
});
</script>
