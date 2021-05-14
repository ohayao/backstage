<template>
  <div class="content">
    <ul>
      <li><a href="/">首页</a></li>
      <li><a href="/">用户</a></li>
      <li><a href="/">博客</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin: -55px 0 0 0;
  padding-left: 200px;
  padding-top: 55px;
  ul {
    list-style: none;
  }
}
</style>
