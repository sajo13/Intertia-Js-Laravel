import './bootstrap';


import '../css/app.css';
import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress';
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import Layout from "./Shared/Layout.vue";

createInertiaApp({
    resolve: async name => {
        try {
            const sanitizedName = name.replace(/\.\.\//g, '');
            const importPath = `./Pages/${sanitizedName}.vue`;
            console.log(name);
            console.log('Dynamic import path:', importPath);

            const page = (await import(importPath)).default;
            if (page.layout === undefined) {
                page.layout = Layout;
            }
            return page;
        } catch (error) {
            console.error(`Error loading page: ${name}`, error);
            throw error;
        }
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el)
    },

    title: title => `My App - ${title}`

});

InertiaProgress.init({
    color: 'red',
    showSpinner: true,
});
