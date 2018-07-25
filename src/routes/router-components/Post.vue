<template>
    <div class="post-mod">
        <h1 class="title"
            v-bind:class="{'loading': !this.query.title}"
        >{{ this.query.title }}</h1>

        <div v-html="this.query.description" class="description"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Post",
    computed: mapState('singlePost', ['query']),
    mounted: function(){
        this.$store.dispatch('singlePost/grabTest');
    }
}
</script>
