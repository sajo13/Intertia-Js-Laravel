
<template>
    <h1>Users</h1>


    <Nav />


    <div style="margin-top: 800px">
        <p>
            Current Time is: {{ time }}
        </p>

        <Link
            href="/users"
            class="text-blue-500"
            preserve-scroll
        >
            Refresh
        </Link>
    </div>
</template>

<script>
import Nav from '@/Shared/Nav.vue';
import  { Link } from '@inertiajs/inertia-vue3';

export default {
    props: {
        time : String
    },
    components: { Nav , Link},
};
</script>
