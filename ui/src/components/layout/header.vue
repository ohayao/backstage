<template>
  <div class="header">
    <ul>
      <li>
        <a href="/">首页</a>
      </li>
      <li
        v-for="(item, index) in ListItem"
        :key="index"
        :class="{ on: index == menuIndex }"
      >
        <a @click="menuIndex = index" v-if="false">{{ item.name }}</a>
        <a @click="triggerMenus(index)">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent, inject, Ref } from "vue";
import { ListItem } from "../back/data";
export default defineComponent({
  setup() {
    let menuIndex = inject("menuIndex") as Ref<Number>;
    const triggerMenus = (index: Number): void => {
      menuIndex.value = index;
      if (ListItem[index as number].href) {
        router.push({
          path: ListItem[index as number].href as string,
        });
      }
    };
    return {
      menuIndex,
      ListItem,
      triggerMenus,
    };
  },
});
</script>
<style lang="less" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 55px;
  line-height: 55px;
  background-color: #012f2d;
  ul {
    list-style: none;
  }
  li {
    min-width: 100px;
    float: left;
    a {
      color: #fff;
      display: inline-block;
      width: 100%;
      text-align: center;
      cursor: pointer;
      &active,
      &visited {
        color: #fff;
      }
    }
    &.on {
      background-color: #006560;
      a {
        color: #c4ff3a;
      }
    }
  }
}
</style>
