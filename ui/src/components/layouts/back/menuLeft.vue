<template>
    <ul>
        <li v-for="item in sML.getters.children(pid)" :key="item.ID">
            <template v-if="sML.getters.hasChildren(item.ID)">
                <div :class="['title', item.IsShow ? 'active' : '']" @click.stop="toggleMenu(item.ID)">
                    <span :class="['fa', item.Icon]"></span>
                    <span>{{ item.Name }}</span>
                    <span :class="['fa', item.IsShow ? 'fa-angle-up' : 'fa-angle-down']"></span>
                </div>
                <MenuLeft :pid="item.ID" :class="[item.IsShow ? 'active' : '']"></MenuLeft>
            </template>
            <template v-else>
                <a @click.prevent.stop="goPage(item)" :class="[item.ID == sML.state.CurrentMenuID ? 'active' : '']">{{ item.Name }}</a>
            </template>
        </li>
    </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Key, IMenuItem } from "@/store/MenuLeft/index";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
    name: "MenuLeft",
    props: {
        pid: {
            type: Number,
            default: 0
        }
    },
    setup(props, context) {
        const sML = useStore(Key);
        const router = useRouter();

        const currentSelectID = ref(0);
        const goPage = (m: IMenuItem) => {
            if(sML.getters.isNewBlank(m)){
                console.log('???',m);
                //return
            }else{
            router.push({
                path: m.Href
            });
            }
            sML.commit("updateCurrentMenuID", {
                id: m.ID
            });
            sML.dispatch("toggleMenu", {
                id: m.ID
            });
            currentSelectID.value = m.ID;
        };
        return {
            sML,
            goPage,
            currentSelectID,
            toggleMenu: (id: number) => {
                sML.dispatch("toggleMenu", { id });
            }
        };
    }
});
</script>
