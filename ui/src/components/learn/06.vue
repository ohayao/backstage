<template>
  <div>
    <div class="block">
      <h3 class="title">父组件向子组件传值 [props]</h3>
      <div class="block">
        <p>这里是父组件，父组件改变父组件中的属性，子组件会变化</p>
        <p>子组件无法改变父组件的属性值</p>
        <p>
          <b style="color: red">但是！！！非字面值是可以修改的，比如[数组,对象等...]</b>
        </p>
        <div class="block">
          <h3 class="">我当前的属性</h3>
          <pre><code>{{parent}}</code></pre>
          <p>
            <button class="btn" @click="changeBloodType">改变我的血型</button>
          </p>
        </div>
      </div>
    </div>
    <div class="block">
      <h3 class="title">这里是父组件引用子组件的位置</h3>
      <SixChild
        :bloodType="parent.bloodType"
        :hobbys="parent.hobby"
        :job="parent.job"
        :that="this"
        :alertFn="test"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SixChild from "./06-child.vue";

export default defineComponent({
  components: {
    SixChild,
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
    changeBloodType() {
      this.parent.bloodType = ["A", "B", "AB", "O"][(Math.random() * 10) % 3 | 0];
    },
    test(abc: String) {
      setTimeout(() => {
        alert("父组件弹框" + abc);
      }, 1e3 * 2);
    },
  },
});
</script>
<style lang="less" scoped>
.model {
  margin: 10px;
  padding: 10px;
  border: solid 5px #ccc;
}
</style>
