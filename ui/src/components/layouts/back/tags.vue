<template>
    <ul class="tags">
        <li v-for="item in tags" :key="item.ID" :class="[item.ID == sML.state.CurrentMenuID ? 'active' : '']" @click="toggleMenu(item)">{{ item.Name }}</li>
    </ul>
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
import { Key, IMenuItem } from '@/store/MenuLeft/index';
import { useStore } from 'vuex';
export default defineComponent({
    name: 'Tags',
    setup() {
        const sML = useStore(Key);
        const _tags = Array<IMenuItem>();
        const tags = reactive(_tags);
        const curTag = sML.getters.getItem(sML.state.CurrentMenuID) as IMenuItem;
        tags.push(curTag);
        watch(
            () => sML.state.CurrentMenuID,
            (n, o) => {
                const tempTag = sML.getters.getItem(n) as IMenuItem;
                if (tags.filter((x) => x.ID == n).length < 1) {
                    if (tags.length >= 5) tags.shift();
                    tags.push(tempTag);
                }
            }
        );
        const toggleMenu = (menu: IMenuItem) => {
            sML.commit('updateCurrentMenuID', { id: menu.ID });
            const loop = (menu: IMenuItem) => {
                if (menu.PID != 0) {
                    const temp = sML.getters.getItem(menu.PID) as IMenuItem;
                    sML.commit('updateIsShows', { id: temp.ID });
                    sML.commit('updateSameLevelIsShow', { id: temp.ID });
                    loop(temp);
                }
            };
            loop(menu);
        };
        return {
            sML,
            tags,
            toggleMenu
        };
    }
});
</script>
