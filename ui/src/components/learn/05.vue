<template>
  <div class="clsdiv">
    <div class="block">
      <h3 class="title">原生Javascript方法</h3>
      <p>翻转姓名{{ student.name }}=={{ student.name.split("").reverse().join("") }}</p>
      <p>3倍的年龄{{ student.age * 3 }}</p>
    </div>
    <div class="block">
      <h3 class="title">计算属性 [computed]</h3>
      <p>age={{ student.age }}</p>
      <p>计算获得出生年份:{{ getBorn }}</p>
      <button class="btn" @click="growthAge">增加年纪</button>
      <h3>筛选例子</h3>
      <p>
        <input type="text" class="input" v-model="searchKey" placeholder="编程语音查找" />
      </p>
      <ul class="searchList">
        <li v-for="(lan, index) in searchList" :key="index">{{ lan }}</li>
      </ul>
    </div>
    <div class="block">
      <h3 class="title">监听数据变化 [watch]</h3>
      <p>age={{ student.age }}</p>
      <p>当年纪增加时候触发</p>
      <p>编程语言查找的时候触发</p>
    </div>
    <div class="block">
      <h3 class="title">computed和wath的区别</h3>
      <pre><code>
计算属性computed : 
1. 支持缓存，只有依赖数据发生改变，才会重新进行计算
2. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化
3. computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值
4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed
5. 如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。
    </code></pre>
      <pre><code>
侦听属性watch：
1. 不支持缓存，数据变，直接会触发相应的操作；
2. watch支持异步；
3. 监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
4. 当一个属性发生变化时，需要执行对应的操作；一对多；
5. 监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数，
　　    immediate：组件加载立即触发回调函数执行，
　　    deep: 深度监听，为了发现对象内部值的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep无法监听到数组的变动和对象的新增，参考vue数组变异,只有以响应式的方式触发才会被监听到。
        </code></pre>
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
        signname: "",
      },
      code: [
        "actionscript",
        "bash",
        "c",
        "c++",
        "c#",
        "golang",
        "erlang",
        "javascript",
        "nodejs",
        "php",
        "java",
        "mongodb",
        "mysql",
      ],
      searchKey: "",
    };
  },
  methods: {
    growthAge(): void {
      this.student.age += 1;
    },
  },
  computed: {
    getBorn(): number {
      var age: number = this.student.age;
      var year = new Date().getFullYear();
      return year - age;
    },
    searchList(): Array<String> {
      let result = Array<String>();
      if (this.searchKey != "")
        result = (this.code as Array<String>).filter(
          (x) => x.indexOf(this.searchKey) > -1
        );
      return result;
    },
  },
  watch: {
    "student.age"(cur, old) {
      console.log("age change", cur, old);
    },
    searchKey(cur, old) {
      console.log("正在筛选" + this.searchKey, cur, old);
    },
  },
});
</script>
<style lang="less" scoped>
.searchList {
  border: solid 1px #ccc;
  padding: 5px 10px;
  li {
    font-size: 16px;
    margin: 3px 0;
    padding: 7px 0;
    border-bottom: solid 1px #ececec;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
