<template>
    <div class="container my-3">
        <div class="row g-3 justify-content-center">
            <div class="col-12 text-center">
                <h2>Lista progetti</h2>
            </div>

            <div class="col-12 col-md-6 col-lg-4" v-for="project in dataProjects.data">
                <MyCard :project="project"/>
            </div> 
        </div>
    </div>
</template>

<script>
import axios from "axios";
import MyCard from '../components/MyCard.vue';

    export default {
    components: { MyCard },
        data() {
            return {
                per_page: "",
                dataProjects: [],
            }
        },
        created() {
            this.getProjects();
        },
        methods: {
            getProjects(){
                axios.get(`http://127.0.0.1:8000/api/projects/${this.per_page}`).then((resp)=>{
                    this.dataProjects = resp.data.response;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>