<template>
  <div>
    <div class="block">
      <h3 class="title">Vuex 另一个页面</h3>
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
    const user = store.state.User as IUser;
    const oneHobby = ref("");
    const addHobbys = () => {
      if (oneHobby.value != "") user.Hobbys.push(oneHobby.value);
      oneHobby.value = "";
    };
    return {
      user,
      oneHobby,
      addHobbys,
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
