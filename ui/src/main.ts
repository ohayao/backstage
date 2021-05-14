import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/global.less';

import Global from './plugins/global.vue';

import {SUser} from './store/context/session';

const app=createApp(App);
app.use(store);
app.use(SUser);
//app.use(SOther);
app.use(router);
app.component('Global',Global);
app.mount('body');