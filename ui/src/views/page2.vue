<template>
  <div>
    <p>Hello world Page2!</p>
    <pre><code>{{user}}</code></pre>
    <p><input type="text" v-model="nick" /></p>
    <p>
      <input type="text" v-for="(item, index) in hobby" :key="index" :value="item" />
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { Key } from "@/store/modules/user";
export default defineComponent({
  setup() {
    const store = useStore(Key);
    const user = reactive(store.state);
    return {
      user,
      ...toRefs(user),
    };
  },
});
</script>
