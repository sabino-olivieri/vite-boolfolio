import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import SingleProjectPage from "./pages/SingleProjectPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

export const router = createRouter({
    history: createWebHistory(),  // serve per la cronologia
    routes: [
        {
            path: "/",     // path è quello che vediamo nella barra dei ricerca del browser
            name: "home",    // etichetta definita per la rotta del codice
            component: HomePage // bisogna importarla
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage
        },
        {
            path: "/project/:slug",
            name: "single-project",
            component: SingleProjectPage,
        },
        {
            path: "/not-found",
            name: "not-found",
            component: NotFoundPage
        }

    ]
});