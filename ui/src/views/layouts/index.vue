<template>
  <div :class="'back '+ storeFramer.getters.getContainerClass">
    <Header></Header>
    <Sider></Sider>
    <Container>
      <router-view></router-view>
    </Container>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/views/layouts/header.vue';
import Sider from '@/views/layouts/sider.vue';
import Footer from '@/views/layouts/footer.vue';
import Container from '@/views/layouts/container.vue';
import {Key as keyFramer} from '@/store/modules/backframer';
import { useStore } from 'vuex';
export default defineComponent({
  components: {
    Header,
    Footer,
    Sider,
    Container
  },
  setup() {
    const storeFramer = useStore(keyFramer);
    const iFramer = storeFramer.state;
    console.log(storeFramer.getters.getNextClass)
    return {
        storeFramer,
      iFramer,
    };
  }
});
</script>
<style lang="less">
@import '@/assets/less/framer.less';
</style>
