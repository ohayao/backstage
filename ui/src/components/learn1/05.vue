<template>
  <div>
    <div class="block">
      <h3 class="title">vuex</h3>
      <p>state 定义数据</p>
      <p>mutations 定义方法</p>
      <p>getters</p>
      <p>actions 支持异步 触发mutations里的方法</p>
      <p>modules 模块</p>
    </div>
    <div class="block">
      <h3 class="title">state mutaitions</h3>
      <pre><code>{{user}}</code></pre>
      <p><span>Name</span><input type="text" class="input" v-model="user.Name" /></p>
      <p>
        <span>Password</span><input type="text" class="input" v-model="user.Password" />
      </p>
      <p><span>Age</span><input type="number" class="input" v-model="user.Age" /></p>
      <p>
        <span>Hobby</span>
        <input
          type="text"
          class="input hobby"
          v-for="(item, index) in user.Hobbys"
          :key="index"
          v-model="user.Hobbys[index]"
        />
      </p>
      <p>
        <span>新增一个</span>
        <input
          type="text"
          class="input"
          placeholder="新增一个爱好：回车添加"
          @keyup.enter="addHobbys"
          v-model="oneHobby"
        />
      </p>
      <p>
        <button class="btn" @click="addAge">调用方法 增加年纪+3</button>
        <button class="btn" @click="SUser.commit('increments', 2)">
          调用带参数方法 增加年纪+2
        </button>
      </p>
    </div>
    <div class="block">
      <h3 class="title">getters</h3>
      <p>
        <button class="btn" @click="hobbysStr()">爱好转字符串</button>
        <button class="btn" @click="nameRvs()">姓名反转</button>
      </p>
    </div>
    <div class="block">
      <h3 class="title">actions</h3>
      <p>
        <button class="btn" @click="SUser.dispatch('subAge')">减少年纪 -1</button>
        <button class="btn" @click="SUser.dispatch('subAges', -5)">减少年纪 -5</button>
      </p>
    </div>
    <div class="block">
      <h3 class="title">modules</h3>
      <p>可以定义不同的状态管理（store）</p>
      <p>最后统一配置</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { IUser } from "../../store/context/session";
export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store);
    const user = store.state.User as IUser;
    //调用方法 增加年龄
    store.commit("increment");
    const addAge = (): void => {
      //调用方法 增加年龄
      store.commit("increment");
    };
    const hobbysStr = () => {
      console.log("xxx--->>>", store.getters.hobbysToString);
    };
    const nameRvs = () => {
      console.log("nameRvs--->>>", store.getters.nameReverse);
    };
    console.log("yyy--->>>", store.getters.hobbysToString);
    const oneHobby = ref("");
    const addHobbys = () => {
      if (oneHobby.value != "") user.Hobbys.push(oneHobby.value);
      oneHobby.value = "";
    };
    return {
      user,
      oneHobby,
      addHobbys,
      SUser: store,
      addAge,
      hobbysStr,
      nameRvs,
    };
  },
});
</script>
<style lang="less" scoped>
p {
  span {
    display: inline-block;
    width: 80px;
  }
  input {
    width: 80%;
    &.hobby {
      width: 90px;
      margin-right: 5px;
    }
  }
}
</style>
