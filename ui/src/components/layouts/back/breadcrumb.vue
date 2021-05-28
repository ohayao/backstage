<template>
    <ul class="breadCrumb">
        <li v-for="(item, index) in paths" :key="item.ID">
            <template v-if="index + 1 == paths.length">
                <span @click="toggleMenus(item)">{{ item.Name }}</span>
            </template>
            <template v-else>
                <span @click="toggleMenu(item)"><i :class="['fa', item.Icon]"></i>{{ item.Name }}</span>
            </template>
        </li>
    </ul>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { IMenuItem, Key } from '@/store/MenuLeft/index';

export default defineComponent({
    name: 'BreadCrumb',
    setup() {
        const sML = useStore(Key);
        const paths = computed(() => {
            return sML.getters.navPaths as IMenuItem[];
        });

        return {
            paths,
            toggleMenu: (menu: IMenuItem) => {
                const loop = (menu: IMenuItem) => {
                    sML.dispatch('toggleMenu', { id: menu.ID });
                    if (menu.PID != 0) {
                        const temp = sML.getters.getItem(menu.PID) as IMenuItem;
                        if (!temp.IsShow) loop(temp);
                    }
                };
                loop(menu);
            },
            toggleMenus: (menu: IMenuItem) => {
                const loop = (menu: IMenuItem) => {
                    if (menu.PID != 0) {
                        const temp = sML.getters.getItem(menu.PID) as IMenuItem;
                        sML.commit('updateIsShows', { id: temp.ID });
                        sML.commit('updateSameLevelIsShow', { id: temp.ID });
                        loop(temp);
                    }
                };
                loop(menu);
            }
        };
    }
});
</script>
