<template>
  <div class="block">
    <h3 class="title">这里是07子组件哦 {{ skills }}</h3>
    <div>转移到第二套课程中去了</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SevenChild",
  data() {
    return {
      skills: "coding",
    };
  },
  methods: {
    eat() {
      alert("07-child\n\neat meat!!");
    },
  },
});
</script>
