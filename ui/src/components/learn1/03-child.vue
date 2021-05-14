<template>
  <div class="div">
    <div class="model">
      <h3>子组件获取父组件的值</h3>
      <input type="text" v-model="name" />
      <input type="text" v-model="age" />
    </div>
    <div class="model">
      <h3>子组件向父自己传值</h3>
      <input type="text" v-model="title" />
      <input type="text" v-model="content" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, provide, reactive, toRefs } from "vue";
interface Student {
  name: String;
  age: Number;
}
interface News {
  title: String;
  content: String;
}
export default defineComponent({
  name: "03-child",
  setup() {
    const student = inject("student") as Student;
    const news = reactive(<News>{
      title: "hello",
      content: "world",
    });
    provide("news", news);
    return {
      ...toRefs(student),
      ...toRefs(news),
    };
  },
  provide() {
    return {
      news1: <News>{
        title: "hello1",
        content: "world1",
      },
    };
  },
});
</script>
<style lang="less" scoped>
.div {
  .model {
    padding: 10px;
    background-color: #fff;
    overflow: hidden;
  }
  input[type="text"],
  input[type="number"] {
    margin: 5px 0;
    padding: 10px 7px;
    width: 100%;
    max-width: 500px;
  }
}
</style>
