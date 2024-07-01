<template>
    <nav class="navbar navbar-expand-lg bg-dark p-3">
        <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav gap-3">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'about'}">About</router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-item {
    a {
        color: white;
        text-decoration: none;
    }

    .router-link-active {
        text-decoration: underline;
        font-weight: bold;
    }
}
</style>