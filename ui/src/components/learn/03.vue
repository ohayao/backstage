<template>
  <div>
    <div class="block">
      <h3 class="title">{{ student.name }}获取事件的对象 [$event]</h3>
      <p>多个参数, $event放最后</p>
      <div class="clsdiv">
        <button class="btn" @click="getDomEvent($event)">获取</button>
        <button class="btn" @click="test('abcdefg', $event)">多个参数</button>
      </div>
    </div>
    <div class="block">
      <h3 class="title">事件修饰符</h3>
      <div>
        <p>[prevent,stop...]</p>
        <a href="http://www.baidu.com" @click="zuzhi($event)">事件中阻止跳转</a><br />
        <a href="http://www.baidu.com" @click.prevent="alerts()">修饰符阻止跳转</a><br />
      </div>
    </div>
    <div class="block">
      <h3 class="title">按键修饰符</h3>
      <div>
        <p>[tab,up,down,left...]</p>
        <input
          type="text"
          class="input"
          @keyup="enter($event)"
          ref="getText1"
          placeholder="尝试按回车键"
        /><br />
        <input
          type="text"
          class="input"
          @keyup.enter="enter2()"
          ref="getText2"
          placeholder="尝试按回车键"
        /><br />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "O3",
  data() {
    return {
      student: {
        name: "zhangsan",
      },
    };
  },
  methods: {
    alerts() {
      alert("没有跳转，但是执行了方法");
    },
    edit() {
      this.student.name = "lisi";
    },
    test(a: string, e: any) {
      //调用methods中的方法
      this.edit();
      alert(a + "  " + this.student.name);
    },
    getDomEvent(e: any) {
      console.log(e);
      e.srcElement.style.background = "#f00";
    },
    zuzhi(e: MouseEvent) {
      e.preventDefault();
    },
    enter(e: KeyboardEvent) {
      if (e.key == "Enter") {
        const abc = this.$refs.getText1 as HTMLInputElement;
        alert("提示：\n   当前输入的值=" + abc.value);
      }
    },
    enter2() {
      const abc = this.$refs.getText2 as HTMLInputElement;
      alert("回车!!!\n   当前输入框的值=" + abc.value);
    },
  },
});
</script>
