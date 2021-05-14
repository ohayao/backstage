interface Item{
    name:String;
    href?:String;
    children?:Array<Item>;
}
const ListItem=Array<Item>();

(function genrater():void{
    ListItem.push({
        name:'首页',
        href:'/back',
    });
    ListItem.push({
        name:'Vue2?',
        href:'/back/learn',
        children:[
            {name:'绑定',href:'/back/learn/01'},
            {name:'方法样式',href:'/back/learn/02'},
            {name:'修饰符',href:'/back/learn/03'},
            {name:'双向绑定',href:'/back/learn/04'},
            {name:'计算监听',href:'/back/learn/05'},
            {name:'父子组件传值',href:'/back/learn/06'},
            {name:'不支持的传值',href:'/back/learn/07'},
        ]
    });
    ListItem.push({
        name:'Vue3?',
        href:'/back/learn1',
        children:[
            {name:'响应式数据',href:'/back/learn1/01'},
            {name:'组件通信',href:'/back/learn1/02'},
            {name:'组件通信测试',href:'/back/learn1/03'},
            {name:'路由Router',href:'/back/learn1/04'},
            {name:'状态Vuex',href:'/back/learn1/05'},
            {name:'状态Vuex配合',href:'/back/learn1/06'},
            {name:'不支持的传值',href:'/back/learn1/07'},
        ]
    });
    ListItem.push({
        name:'新闻',
        href:'/back/news',
        children:[
            {name:'新闻添加',href:'/back/news/add'},
            {name:'新闻列表',href:'/back/news/list'}
        ]
    });
    ListItem.push({
        name:'博客',
        href:'/back/blogs',
        children:[
            {name:'博客添加',href:'/back/blogs/add'},
            {name:'博客列表',href:'/back/blogs/list'}
        ]
    });
})();

export {
    Item,
    ListItem
}  