import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {stores} from './store/index'

const app=createApp(App);
stores.forEach((s,i)=>{
    app.use(s.name,s.key);
});
app.use(router);
app.mount('body');
