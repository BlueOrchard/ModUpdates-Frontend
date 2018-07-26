<template>
    <div class="sidebar">
        <!-- Browse Route Sidebar -->
        <div v-if="this.$route.path.indexOf('/browse') > -1" class="browse">

        </div>

        <!-- Single Post Route Sidebar -->
        <div v-if="this.$route.path.indexOf('/mod') > -1" class="single-mod">
            <span class="button-subscribe">Subscribe</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar",
}
</script>
