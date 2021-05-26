<template>
  <div class="container">
    <div class="content">
      <Nav></Nav>
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/views/layouts/nav.vue';
export default defineComponent({
  name: 'Container',
  components: {
    Nav
  },
  setup() {}
});
</script>
