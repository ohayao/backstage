<template>
  <div>
    <div class="block">
      <h3 class="title">这里是子组件哦</h3>
      <h3>这里显示父亲的属性{{ that }}</h3>
      <p>他的血型：【{{ bloodType }}】</p>
      <p>
        他的爱好：<span v-for="(item, index) in hobbys" :key="index">【{{ item }}】</span>
      </p>
      <p>
        他的工作<br />
        <pre><code>{{ job }}</code></pre>
      </p>
      <p>
        <button class="btn" @click="setBloodType()">尝试改变父亲的血型</button>
        <button class="btn" @click="setSalary()">尝试改变父亲的薪水</button>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SixChild",
  data() {
    return {};
  },
  props: ["bloodType", "hobbys", "job", "that", "alertFn"],
  methods: {
    setBloodType() {
      //this.bloodType='CD'; 方法中无法修改
      alert("提示\n无法修改血型，却可以获取到，给他添加一个爱好" + " " + this.bloodType);
      this.hobbys.push("子组件添加的挣钱");
    },
    setSalary() {
      this.job.salary = 9999 + ((Math.random() * 10000) | 0);
      this.job.title = ["Boss", "Manager", "Leader", "Employee"][
        (Math.random() * 10) % 4 | 0
      ];
    },
  },
  mounted() {
    var hobbys = this.hobbys;
    console.log(hobbys);
    this.hobbys.push("子组件添加的爱好" + ((new Date().getTime() / 1e3) | 0));
    //this.bloodType='EDD'; 无法更改
    this.job.else.push(4 + ((Math.random() * 999) | 0));
    console.log(this.that);
    this.alertFn("\n子组件中调用父组件的方法zhangsan");
  },
});
</script>
