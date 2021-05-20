<template>
  <div class="vuex">
    <h1>Vuex的基本使用方法</h1>
    <div class="model">
      <h3 class="title">State</h3>
      <div class="content">
        <pre><code>{{user}}</code></pre>
        <p><input type="text" v-model="nick" /></p>
        <p>
          <input type="text" v-for="(item, index) in hobby" :key="index" :value="item" />
        </p>
      </div>
    </div>
    <div class="model">
      <h3 class="title">Getters</h3>
      <div class="content">
        <button class="btn" @click="changeHobby">更改宠物</button>
        <span class="msg">
          <p class="tips">调用getters的方法</p>
          <p>{{ store.getters.hobbyString }}</p>
          <p class="tips">在一个getters中调用另一个getters</p>
          <p>{{ store.getters.hobbyStringFormat }}</p>
        </span>
      </div>
    </div>
    <div class="model">
      <h3 class="title">Mutations</h3>
      <div class="content">
        <button class="btn" @click="reverseNick">昵称翻转</button>
        <button class="btn" @click="changeHobbys">更改宠物</button>
        <span class="msg">
          <p class="tips">使用commit触发mutations方法</p>
          <p>{{ nick }} {{ hobby }}</p>
        </span>
      </div>
    </div>
    <div class="model">
      <h3 class="title">Actions</h3>
      <div class="content">
        <button class="btn" @click="actionsChangeHobby">翻转昵称</button>
        <button class="btn" @click="actionsAsyncChangeHobby">
          调用异步方法
        </button>
        <span class="msg">
          <p class="tips">使用dispatch触发actions方法</p>
          <p>{{ nick }} {{ hobby }}</p>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { Key as UserKey } from '@/store/modules/user';
import { Key as StudentKey } from '@/store/modules/student';
export default defineComponent({
  setup() {
    const pets = ['dog', 'cat', 'bird', 'fish', 'chick', 'duck', 'pig', 'tigger', 'snake'];
    const store = useStore(UserKey);
    const user = store.state;
    {
      //获取其它state模块
      const studentStore = useStore(StudentKey);
      const student = studentStore.state;
      console.log(student);
    }
    const rndPet = () => {
      return pets[(Math.random() * 10) | 0];
    };
    const changeHobby = () => {
      store.state.hobby![0] = rndPet();
    };
    const reverseNick = () => {
      store.commit('changeNick');
      //另一种写法
      setTimeout(() => {
        store.commit({
          type: 'changeNick'
        });
      }, 1e3);
    };
    const changeHobbys = () => {
      store.commit('changeHobby', { index: 0, value: rndPet() });
      store.commit({
        type: 'changeHobby',
        index: 1,
        value: rndPet()
      });
    };
    const actionsChangeHobby = () => {
      store.dispatch('changeNick');
      setTimeout(() => {
        store.dispatch({
          type: 'changeNicks',
          name: 'zhangsan'
        });
      }, 1e3);
    };
    const actionsAsyncChangeHobby = () => {
      store.dispatch('changeNicksAsync', { timeout: 1e3 * 2 }).then(() => {
        console.log('异步方法执行完毕');
      });
    };
    return {
      user,
      store,
      ...toRefs(user),
      changeHobby,
      changeHobbys,
      reverseNick,
      actionsChangeHobby,
      actionsAsyncChangeHobby
    };
  }
});
</script>
<style lang="less" scoped>
.vuex {
  margin: 0;
  padding: 10px;
  .btn {
    padding: 10px 15px;
    border: solid 1px rgb(119, 0, 255);
    background-color: rebeccapurple;
    color: #fff;
    outline: none;
    margin: 5px;
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 5px #000;
    }
  }
  input[type='text'] {
    padding: 10px 7px;
    margin: 5px;
  }
  .model {
    border: solid 1px #ccc;
    background-color: #fff;
    padding: 10px;
    margin: 10px 0;
    > .title {
      border-bottom: solid 1px rgb(37, 114, 255);
      padding-bottom: 5px;
      color: blue;
      margin-bottom: 10px;
    }
    > .content {
      background-color: #fbfbfb;
      padding: 10px;
    }
    span.msg {
      background-color: #e8e6ff;
      color: rgb(11, 1, 1);
      padding: 5px 15px;
      margin: 5px;
      display: block;
      clear: both;
      p {
        padding: 10px 5px;
        &.tips {
          color: #f00;
        }
      }
    }
  }
}
</style>
