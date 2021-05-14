<template>
  <div>
    <div class="block">
      <h3 class="title">父组件主动获取子组件的属性及方法 [ref]</h3>
      <SevenChild ref="sevenChild" />
      <p>
        <button class="btn" @click="getChildAttr()">获取子组件的属性</button>
        <button class="btn" @click="execChildFn()">调用子组件的方法</button>
      </p>
      <p style="color: red">vue3中不能通过 this.$refs去获取子组件的对象，失败！！！</p>
    </div>
    <div class="block">
      <h3 class="title">子组件主动获取父组件的属性及方法</h3>
      这里是父组件引用子组件的位置
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SevenChild from "./07-child.vue";
interface TEST {
  [key: string]: any;
}
export default defineComponent({
  components: {
    SevenChild,
  },
  data() {
    return {
      parent: {
        name: "Father",
        age: 60,
        hobby: ["Fishing", "Driving", "Shopping"],
        bloodType: "O",
        job: {
          title: "Boss",
          salary: 8888,
          else: [0, 1, 2, 3],
        },
      },
    };
  },
  methods: {
    getChildAttr() {
      console.log(this.sc);
      const sc = this.$refs as TEST;
      alert(sc.sevenChild);
    },
    execChildFn() {
      //this.$refs.sevenChild;
    },
  },
  setup() {
    const sc = ref<null | HTMLElement>(null);
    return {
      sc,
    };
  },
});
</script>
