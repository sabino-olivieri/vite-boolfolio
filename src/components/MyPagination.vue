<template>
    <button class="btn btn-primary" v-if="dataProjects.prev_page_url" @click="store.linkApi = dataProjects.prev_page_url, $emit('buttonClicked')">
        <i class="fa-solid fa-angles-left"></i>
    </button>


    <button class="btn" :class="page.active ? 'btn-light' : 'btn-outline-light'" v-for="page in arrayPage" @click="store.linkApi = page.url, $emit('buttonClicked')" :key="page">
        {{ page.label }}
    </button>

    <button class="btn btn-primary" v-if="dataProjects.next_page_url" @click="store.linkApi = dataProjects.next_page_url, $emit('buttonClicked')">
        <i class="fa-solid fa-angles-right"></i>
    </button>

</template>

<script>
import { store } from '../store';

export default {
    props: {
        dataProjects: Object,
        arrayPage: Array,
    },
    data() {
        return {
            store,
            
        }
    },
    emits: ['buttonClicked']
}
</script>

<style lang="scss" scoped></style>