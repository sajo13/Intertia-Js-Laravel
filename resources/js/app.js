import './bootstrap';


import '../css/app.css';
import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress';
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";
import Layout from "./Shared/Layout.vue";

createInertiaApp({
    resolve: async name => {

        const page = (await import(`./Pages/${name}.vue`)).default;

        page.layout ??= Layout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .mount(el)
    },
});

InertiaProgress.init({
    color: 'red',
    showSpinner: true,
});
