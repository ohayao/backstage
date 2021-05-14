import store from '@/store';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/user/login',
    name:'UserLogin',
    component:()=>import('../components/user/Login.vue'),
    meta:{
      title: 'login'
    },
    
  },
  {
    path:'/user/logins',
    name:'UserLogins',
    component:()=>import('../components/user/Login.vue')
  },
  
  {
    path:'/learn1/01',
    name:'1-01',
    component:()=>import('../components/learn1/01.vue')
  },
  {
    path:'/learn1/02',
    name:'1-02',
    component:()=>import('../components/learn1/02.vue')
  },
  {
    path:'/learn1/03',
    name:'1-03',
    component:()=>import('../components/learn1/03.vue')
  },
  {
    path:'/learn1/04/:id',
    name:'1-04',
    component:()=>import('../components/learn1/04.vue')
  },
  {
    path:'/learn1/04',
    name:'1-044',
    component:()=>import('../components/learn1/04.vue')
  },
  {
    path:'/back',
    redirect:'/back/user/login',
    component:()=>import('../components/back/index.vue'),
    children:[
      {
        path:'/back/user/login',
        component:()=>import('../components/user/Login.vue'),
        meta:{
          title: 'login'
        },
      },
    ]
  },
  {
    path:'/back/learn',
    redirect:'/back/learn/01',
    component:()=>import('../components/back/index.vue'),
    children:[
      {
        path:'/back/learn/01',
        name:'01',
        component:()=>import('../components/learn/01.vue')
      },
      {
        path:'/back/learn/02',
        name:'02',
        component:()=>import('../components/learn/02.vue')
      },
      {
        path:'/back/learn/03',
        name:'03',
        component:()=>import('../components/learn/03.vue')
      },
      {
        path:'/back/learn/04',
        name:'04',
        component:()=>import('../components/learn/04.vue')
      },
      {
        path:'/back/learn/05',
        name:'05',
        component:()=>import('../components/learn/05.vue')
      },
      {
        path:'/back/learn/06',
        name:'06',
        component:()=>import('../components/learn/06.vue')
      },
      {
        path:'/back/learn/07',
        name:'07',
        component:()=>import('../components/learn/07.vue')
      },
    ]
  },
  {
    path:'/back/learn1',
    redirect:'/back/learn1/01',
    component:()=>import('../components/back/index.vue'),
    children:[
      {
        path:'/back/learn1/01',
        component:()=>import('../components/learn1/01.vue')
      },
      {
        path:'/back/learn1/02',
        component:()=>import('../components/learn1/02.vue')
      },
      {
        path:'/back/learn1/03',
        component:()=>import('../components/learn1/03.vue')
      },
      {
        path:'/back/learn1/04',
        component:()=>import('../components/learn1/04.vue')
      },
      {
        path:'/back/learn1/05',
        component:()=>import('../components/learn1/05.vue')
      },
      {
        path:'/back/learn1/06',
        component:()=>import('../components/learn1/06.vue')
      },
      // {
      //   path:'/back/learn/07',
      //   component:()=>import('../components/learn/07.vue')
      // },
    ]
  },
  {
    path:'/back/news',
    redirect:'/back/news/list',
    component:()=>import('../components/back/index.vue'),
    children:[
      {
        path:'/back/news/add',
        component:()=>import('../components/back/news/add.vue')
      },
      {
        path:'/back/news/list',
        component:()=>import('../components/back/news/list.vue')
      },
    ]
  },
  {
    path:'/back/blogs',
    redirect:'/back/blogs/add',
    component:()=>import('../components/back/index.vue'),
    children:[
      {
        path:'/back/blogs/add',
        component:()=>import('../components/back/blogs/add.vue')
      },
      {
        path:'/back/blogs/list',
        component:()=>import('../components/back/blogs/list.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
let i=0;
const arrs=['-','--','---','----','---->'];
router.beforeEach((to,from,next)=>{
  if(to.meta.title) document.title = to.meta.title as string;
  else document.title=`${arrs[i++%5]}> UI`;
  if(to.path=='/user/login' || to.path=='/' ||to.path.indexOf('/learn')>-1){
    next()
  }else{
    if(to.path.indexOf('/back')>-1){
      next();
      return;
    }
    // if(store.state.sesuser){
    //   next()
    // }else{
    //   console.log('visit',to.path,' from',from.path);
    // }
  }
});
export default router
