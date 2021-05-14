<template>
  <div class="div">
    <h1>路由跳转</h1>
    <div class="model">
      <p><a href="/learn1/04?a=123">/learn1/04?a=123</a> query a={{ a }}</p>
      <p><a href="/learn1/04?b=c">/learn1/04?b=c</a> query b={{ b }}</p>
      <p><a @click="redirect('c')">router push方式</a> query c={{ c }}</p>
      <p><a @click="redirect('d')">router push方式</a> query d={{ d }}</p>
      <p>
        <a :href="'/learn1/04/abc_' + new Date().getTime() / 1e3">/learn1/04/:id</a>
        param id={{ id }}
      </p>
      <p>
        <router-link to="/learn1/04/aaa_123123">router-link方式</router-link>
      </p>
      <p>
        <router-link to="/learn1/04?a=123123"
          >router-link方式 /learn1/04?a=123</router-link
        >
      </p>
      <p><a @click="redirect('c')">router push方式</a> query c={{ c }}</p>
      <p><a @click="redirects()">location.href</a> query e={{ e }}</p>
    </div>
    <div class="model">
      <p>注意</p>
      <p>1. onBeforeRouteUpdate, onBeforeRouteLeave</p>
      <p>2. 原生a标签, js跳转, router.push, router-link标签接收参数不一样</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
interface IParam {
  [key: string]: any;
}
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    const a = route.query.a;
    const b = route.query.b;
    const c = ref<string>("");
    c.value = route.query.c as string;
    const d = ref<string>("");
    d.value = route.query.d as string;

    const e = ref<string>("");
    e.value = route.query.e as string;

    const id = ref<string>("");
    id.value = route.params.id as string;

    const redirect = (paramName: string): void => {
      var ps = <IParam>{};
      ps[paramName] = `secondis${new Date().getSeconds()}`;
      console.log(ps);
      router.push({
        path: "/learn1/04",
        query: ps,
      });
    };
    const redirects = (): void => {
      window.location.href = "/learn1/04?e=8888";
    };
    onBeforeRouteUpdate((to) => {
      c.value = to.query.c ? (to.query.c as string) : "";
      d.value = to.query.d ? (to.query.d as string) : "";
      id.value = to.params.id ? (to.params.id as string) : "";
      console.log(to);
    });

    onBeforeRouteLeave((leave) => {
      console.log(leave);
      c.value = leave.query.c ? (leave.query.c as string) : "";
      d.value = leave.query.d ? (leave.query.d as string) : "";
      console.log("leave", route.params.id);
    });

    return {
      a,
      b,
      c,
      d,
      e,
      id,
      redirect,
      redirects,
    };
  },
});
</script>
<style lang="less" scoped>
.div {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  .model {
    border: solid 3px #333;
    padding: 10px;
    margin: 10px;
    p {
      margin: 7px 3px;
      font-size: 14px;
      a {
        color: #f00;
        cursor: pointer;
        display: inline-block;
        width: 170px;
      }
    }
  }
}
</style>
