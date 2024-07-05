<template>
    <div class="container my-3">
        <div class="row g-3 justify-content-center">
            <div class="col-12 d-flex justify-content-between">
                <h2>Lista progetti</h2>

                <select name="per_page" id="" v-model="selectedPerPage" @change="getProjects">
                    <option value="">Tutti</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>

            <div class="col-12 col-md-6 col-lg-3" v-for="project in dataProjects" :key="project">
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                    class="text-decoration-none">
                    <MyCard :project="project" />
                </router-link>
            </div>

            <div class="col-12 d-flex gap-1 justify-content-center" v-if="arrayPage.length > 0">
                <MyPagination :dataProjects="respObject" :arrayPage="arrayPage" @buttonClicked="goToPage()" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import MyCard from "../components/MyCard.vue";
import MyPagination from "../components/MyPagination.vue";
import { store } from "../store";

export default {
    components: { MyCard, MyPagination },
    data() {
        return {
            dataProjects: [],
            respObject: {},
            arrayPage: [],
            store,
            selectedPerPage: "5",
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            let myParams = {};
            if (this.selectedPerPage !== "") {
                myParams.per_page = this.selectedPerPage;
            }
            axios.get(store.firstLink, { params: myParams }).then((resp) => {
                
                this.dataProjects = resp.data.response.links
                    ? resp.data.response.data
                    : resp.data.response;
                    
                this.respObject = resp.data.response.links ? resp.data.response : {};
                if (resp.data.response.links) {
                    this.createArrayPage(resp.data.response.links);
                } else {
                    this.arrayPage = [];
                }
            });
        },
        createArrayPage(links) {
            if(links.length > 3) {

                this.arrayPage = links;
                this.arrayPage.shift();
                this.arrayPage.pop();
            } else {
                this.arrayPage = [];
            }
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            
        },
        goToPage() {
            axios.get(store.linkApi).then((resp) => {
                this.respObject = resp.data.response.links ? resp.data.response : {};
                this.dataProjects = resp.data.response.data;
                if (resp.data.response.links.length > 3) {
                    this.createArrayPage(resp.data.response.links);
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>