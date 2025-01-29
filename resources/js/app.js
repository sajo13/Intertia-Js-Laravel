import './bootstrap';


import '../css/app.css';
import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress';
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
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
