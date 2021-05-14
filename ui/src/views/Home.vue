<template>
    <div>
        <p>Home</p>
        <Alert :message="message" :isShow="false"></Alert>
        <Alert :isShow="false" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Alert from '../plugins/alert/alert.vue';
    export default defineComponent({
        name: 'Home',
        components:{
            Alert
        },
        data(){
            return{
                message:{
                    title:'abcdefg',
                    content:'content',
                    visible:true
                }
            }
        }
    });
</script>
