<template>
  <div class="global">this is global</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Global",
});
</script>
<style lang="less" scoped>
.global {
  position: absolute;
  top: 5px;
  right: 5px;
  border: solid 10px #000;
  padding: 10px;
}
</style>
