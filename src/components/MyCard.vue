<template>

        <div class="card ms_card h-100">
            <div class="text-center">

                <img :src="project.image ? `${baseUrl}${project.image}` : 'https://placehold.co/800x450?text=Immagine+non+inserita&font=roboto'"
                    class="card-img-top" alt="..." loading="lazy">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ project.title }}</h5>
                <div class="d-flex gap-1 my-1 flex-wrap">
                    <span class="badge" :style="{ backgroundColor: technologies.color }" v-for="technologies in project.technologies" :key="technologies">
                        {{ technologies.name }}
                    </span>
                </div>

                <!-- <p class="card-text" v-if="project.description">{{ project.description }}</p> -->
                <a :href="project.site_url" class="text-decoration-none" target="_blank" v-if="project.site_url">{{ project.site_url }}</a>
            </div>
        </div>
    
</template>

<script>
export default {
    props: {
        project: Object,
    },
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/storage/'
        }
    }
}
</script>

<style lang="scss" scoped>
.ms_card {
    border: 0;

    .badge {
        padding: 10px;
        box-sizing: content-box;
        text-shadow: 0px 1px black,
            1px 0px black,
            0px -1px black,
            -1px 0px black;

    }
    .card-img-top {
        max-width: 350px;
        aspect-ratio: 16 / 9;
        object-fit: contain;
        object-position: center;

    }


}
</style>