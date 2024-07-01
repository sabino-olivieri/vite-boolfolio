<template>
    <div class="container my-3" v-if="project">
        <h2>{{ project.title }}</h2>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

    export default {
        data() {
            return {
                project : null
            }
        },
        created() {
            const slug = this.$route.params.slug;
            axios.get(`${store.firstLink}${slug}`).then((resp) => {
                this.project = resp.data.response;
            }).catch((error) => {
                if(error.response.status === 404){
                    this.$router.push({name: 'not-found'});
                }
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>