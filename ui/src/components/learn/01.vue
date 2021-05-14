<template>
    <div>
        <div class="block">
            <h3 class="title">绑定 {{title}}</h3>
            <p>student.name={{student.name}}</p>
            <p>student.age={{student.age}}</p>
            <p>student.sign={{student.sign}}<br><span v-html="student.sign"></span></p>
            <p>
                student.home={{student.home}}<br>
                <a href="{{student.home}}">主页绑定失败</a><br>
                <a v-bind:href='student.home'>主页绑定成功</a><br>

                <a v-bind:[student.type1]="'http://www.baidu.com'">绑定动态属性</a><br>
                <a :[student.type2]="student.home">绑定动态属性</a>
            </p>
            <p>
                student.score={{student.score}}<br>
                循环<br>
                <ul>
                    <li v-for="(item,index) in student.score" :key="index">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="(value,key) in student.score" :key="key">{{key}}-->>>{{value + ' ' + key}}</li>
                </ul>
                <ul>
                    <li v-for="(course,index) in student.scores" :key="index">
                        <p>{{index}}--->{{course.name}}</p>
                        <ul>
                            <li v-for="(record,index1) in course.records" :key="index1">
                                {{index + '-' +index1}}. {{record.time}}:{{record.score}}
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>遍历对象</li>
                    <li v-for="(value,key,index) in student.object" :key="index">
                        {{index}}--->>>{{key}}={{value}}
                    </li>
                </ul>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    name:'O1',
    data(){
        return {
            title: 'Hello world!',
            student:{
                name:'zhangsan',
                age:4,
                home:'http://www.baidu.com',
                type1:'href',
                type2:'src',
                sign:'<h3 style="color:red">个人签名</h3>',
                score:[97,98,99,90],
                scores:[
                    {
                        name:'语文',
                        records:[
                            {
                                time:'初考',
                                score:90
                            },
                            {
                                time:'中考',
                                score:88
                            },
                            {
                                time:'高考',
                                score:98
                            }
                        ]
                    },
                    {
                        name:'数学',
                        records:[
                            {
                                time:'初考',
                                score:60
                            },
                            {
                                time:'中考',
                                score:78
                            },
                            {
                                time:'高考',
                                score:69
                            }
                        ]
                    }
                ],
                object:{
                    a:1,
                    b:'abc',
                    c:false,
                    d:new Date()
                }
            },
        }
    }
})
</script>
<style lang="less" scoped>
.bind{
    div{
        margin:5px;
        padding: 10px;
    }
    ul{list-style: none;}
    p{
        margin:7px 0;
        padding:5px;
    }
}
</style>