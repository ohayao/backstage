<template>
  <div class="menus">
    <ul>
      <template v-for="(item, index) in getMenus()" :key="index">
        <li :class="{ on: ons == item.href }">
          <!-- <a :href="item.href">{{ item.name }}</a> -->
          <router-link :to="item.href">{{ item.name }}</router-link>
        </li>
      </template>
    </ul>
  </div>
  <div class="content">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref, inject, watch } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from "vue-router";
import { ListItem, Item } from "../back/data";
export default defineComponent({
  setup() {
    const route = useRoute();
    const menuIndex = inject("menuIndex") as Ref<Number>;
    ListItem.forEach((v, i) => {
      if (v.href && v.href == route.path) {
        menuIndex.value = i;
        return;
      } else {
        if (v.children) {
          v.children.forEach((cv, ci) => {
            if (cv.href && cv.href == route.path) {
              menuIndex.value = i;
              return;
            }
          });
        }
      }
    });
    // getMenus 方法具有响应式
    const getMenus = (): Item[] | undefined => {
      return ListItem[menuIndex.value as number].children;
    };
    const ons = ref(route.path);
    onBeforeRouteUpdate((to) => {
      ons.value = to.path;
    });
    onBeforeRouteLeave((leave) => {
      ons.value = leave.path;
    });
    return {
      ons,
      menuIndex,
      getMenus,
    };
  },
});
</script>
<style lang="less" scoped>
.menus {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #006660;
  padding-top: 55px;
  ul {
    list-style: none;
  }
  li {
    border-bottom: solid 1px #22716e;
    border-top: solid 1px #333;
    transition: all 0.3s ease-in-out;
    a {
      color: #fff;
      text-decoration: none;
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: 10px 0 10px 10px;
      &active,
      &visited {
        color: #fff;
      }
      transition: all 0.5s ease-in;
    }
    &:first-child {
      border-top: none;
    }
    &:last-child {
      border-bottom: none;
    }
    &:hover,
    &.on {
      background-color: #238681;
      a {
        color: #c8ff00;
      }
    }
    &.on {
      a {
        text-align: right;
        padding-right: 10px;
        &::after {
          content: ">>";
          margin-left: 10px;
        }
      }
    }
  }
}
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  padding: 55px 0 0 200px;
  .container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: relative;
  }
}
</style>
