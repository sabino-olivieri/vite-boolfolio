<template>
    <div class="container my-3">
        <div class="row g-3 justify-content-center">
            <div class="col-12 text-center">
                <h2>Lista progetti</h2>
            </div>

            <div class="col-12 col-md-6 col-lg-4" v-for="project in dataProjects.data" :key="project">
                <MyCard :project="project" />
            </div>

            <div class="col-12 d-flex gap-1 justify-content-center" v-if="arrayPage.length > 0">
                <MyPagination :dataProjects="dataProjects" :arrayPage="arrayPage" @buttonClicked="goToPage()" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import MyCard from '../components/MyCard.vue';
import MyPagination from '../components/MyPagination.vue';
import { store } from "../store";


export default {
    components: { MyCard, MyPagination },
    data() {
        return {
            per_page: "10",
            dataProjects: [],
            arrayPage: [],
            store
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects/').then((resp) => {
                this.dataProjects = resp.data.response;
                if (resp.data.response.links.length > 3) {
                    this.createArrayPage(resp.data.response.links)
                }
            });
        },
        createArrayPage(links) {
            this.arrayPage = links;
            this.arrayPage.shift();
            this.arrayPage.pop();
            // document.getElementById('go-top').click();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log(this.arrayPage);
        },
        goToPage() {
            axios.get(store.linkApi).then((resp) => {
                this.dataProjects = resp.data.response;
                if (resp.data.response.links.length > 3) {
                    this.createArrayPage(resp.data.response.links)
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped></style>