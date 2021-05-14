<template>
  <div>
    <div class="block">
      <h3 class="title">双向数据绑定 [v-model]</h3>
      <form>
        <p>姓名：<input type="text" v-model="student.name" /></p>
        <p>年龄：<input type="text" v-model="student.age" /></p>
        <p>
          职位：<select v-model="student.position">
            <option v-for="(item, index) in positions" :key="index" :value="item.value">
              {{ item.name }}
            </option>
          </select>
        </p>
        <p>
          性别：<input
            type="radio"
            name="sex"
            id="sex_0"
            value="0"
            v-model="student.sex"
          /><label for="sex_0">男</label>
          <input
            type="radio"
            name="sex"
            id="sex_1"
            value="1"
            v-model="student.sex"
          /><label for="sex_1">女</label>
        </p>
        <p>
          爱好：
          <span v-for="(item, index) in hobbys" :key="index">
            <input
              type="checkbox"
              :id="'cbx_' + item.value"
              :value="item.value"
              v-model="student.hobbys"
            />
            <label :for="'cbx_' + item.value">{{ item.name }}</label>
          </span>
        </p>
        <p>
          签名：
          <textarea
            rows="5"
            v-model="student.signname"
            @keyup.enter="submit()"
          ></textarea>
        </p>
        <p>
          <button type="submit" @click.prevent="submit($event)">提 交</button>
        </p>
      </form>
    </div>
    <div class="block">
      <h3 class="title">数据预览</h3>
      <pre><code>{{ student }}</code></pre>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "O4",
  data() {
    return {
      student: {
        name: "zhangsan",
        age: 10,
        sex: 0,
        position: 1003,
        hobbys: [20001, 20004, 20005],
        signname: "",
      },
      positions: [
        { name: "班长", value: 1001 },
        { name: "生活委员", value: 1002 },
        { name: "劳动委员", value: 1003 },
        { name: "课代表", value: 1004 },
        { name: "组长", value: 1005 },
        { name: "成员", value: 1006 },
      ],
      hobbys: [
        { name: "篮球", value: 20001 },
        { name: "足球", value: 20002 },
        { name: "排球", value: 20003 },
        { name: "羽毛球", value: 20004 },
        { name: "乒乓球", value: 20005 },
      ],
    };
  },
  methods: {
    submit() {
      alert("提交\n\n" + JSON.stringify(this.student));
    },
  },
});
</script>
<style lang="less">
.model {
  width: 450px;
  border: solid 3px #333;
  padding: 5px;
  margin: 10px;
}
form {
  p {
    overflow: hidden;
    margin: 5px 0;
    input,
    select {
      padding: 5px;
    }
    span {
      margin: 5px;
    }
    button {
      padding: 10px 50px;
      float: right;
    }
  }
}
</style>
