<template>
    <div class="sidebar">
        <div v-if="this.$route.path.indexOf('/browse') > -1" class="single-mod">
            <span class="button-subscribe">Placeholder</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar",
}
</script>
