<template>
  <div class="bind">
    <div class="temp">
      <h2>方法</h2>
      <p>
        他/她的名字是 <b>{{ student.name }}</b>
      </p>
      <p>
        <button @click="edit">改变他/她的名字</button><br />
        <button @click="get">获取他/她的名字</button>
      </p>
    </div>
    <div class="temp">
      <h2>Class 样式</h2>
      <div class="model">默认方式</div>
      <div class="model" :class="cls.yellow">绑定样式</div>
      <div class="model" :class="cls.yellow + ' ' + cls.blue">拼接样式</div>
      <div style="clear: both"></div>
      <div class="model" :class="{ ani: cls.isAni, yellow: cls.isYellow }">
        动态添加样式
      </div>
      <button @click="animate">{{ cls.isAni ? "给我停下来" : "给我动起来" }}</button>
      <button @click="changeColor">{{ cls.isYellow ? "给我还原" : "给我变黄" }}</button>
      <div style="clear: both"></div>
      <div class="model" :class="[cls.yellow, cls.blue]">数组形式绑定样式</div>
      <div class="model" :class="[cls.isAni ? cls.yellow : cls.blue]">
        三目运算绑定样式
      </div>
      <div class="model" :class="[!cls.isAni ? cls.yellow : cls.blue]">
        三目运算绑定样式
      </div>
    </div>
    <div class="temp">
      <h1>Style 样式</h1>
      <div class="model" :style="'color:' + style.color">style 样式</div>
      <div class="model" :style="{ color: style.color, fontSize: style.fontSize }">
        style 样式
      </div>
      <div class="model" :style="style.stl1">style 样式</div>
      <div class="model" :style="[style.stl1, style.stl2]">style 样式</div>
    </div>
    <div class="temp">
      <h1>应用</h1>
      <p>排行榜样式</p>
      <ul>
        <li
          v-for="(who, index) in top"
          :key="index"
          :class="{ a: index == 0, b: index == 1, c: index == 2, d: index == 3 }"
        >
          {{ index }}---->{{ who.name }}:{{ who.score }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(who, index) in top"
          :key="index"
          :style="[index == 0 ? style.stl1 : null, index == 1 ? style.stl2 : null]"
        >
          {{ index }}---->{{ who.name }}:{{ who.score }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "O2",
  data() {
    return {
      student: {
        name: "zhangsan",
      },
      cls: {
        yellow: "yellow",
        blue: "blue",
        isAni: false,
        isYellow: false,
        isBlue: true,
      },
      style: {
        color: "#fff",
        fontSize: "30px",
        stl1: {
          color: "#00ff00",
          fontSize: "18px",
        },
        stl2: {
          backgroundColor: "#360",
        },
      },
      top: [
        { name: "Zhang", score: "99" },
        { name: "Wang", score: "95" },
        { name: "Li", score: "92" },
        { name: "Zhao", score: "90" },
        { name: "who", score: "66" },
      ],
    };
  },
  methods: {
    edit() {
      this.student.name = "lisi";
    },
    get() {
      alert(this.student.name);
    },
    animate() {
      this.cls.isAni = !this.cls.isAni;
    },
    changeColor() {
      this.cls.isYellow = !this.cls.isYellow;
    },
  },
});
</script>
<style lang="less" scoped>
.bind {
  width: 100%;
  .temp {
    margin: 5px;
    padding: 10px;
    border: solid 3px #333;
    overflow: hidden;
    h1,
    h2,
    h3 {
      font-size: 18px;
      border-bottom: solid 1px #666;
      margin-bottom: 10px;
    }
    p {
      margin: 10px 0;
    }
    div.model {
      width: 150px;
      height: 150px;
      float: left;
      margin: 5px;
      border: solid 3px #000;
      font-size: 12px;
      background-color: #f00;
      color: #fff;
      text-align: center;
      line-height: 150px;
      &.yellow {
        color: yellow;
        font-size: 16px;
      }
      &.blue {
        border: solid 3px blue;
      }
    }
    ul {
      margin-top: 20px;
    }
  }
  .ani {
    animation: a-default 0.5s ease-in-out 0s infinite;
  }
  @keyframes a-default {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .a {
    color: red;
  }
  .b {
    color: yellow;
  }
  .c {
    color: green;
  }
  .d {
    color: gray;
  }
}
</style>
