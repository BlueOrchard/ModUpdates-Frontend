<template>
    <div class="post-mod">

        <!-- Title -->
        <h1 class="title"
            v-bind:class="{'loading': !this.query.title}">
                {{ this.query.title }} 
                <span v-if="this.query.download" class="grey">
                    {{ this.query.download.version }}
                </span>
        </h1>

        <!-- Tabs -->
        <div class="tabs" >
            <div v-for="tab in allTabs" 
                 v-bind:key="tab.value" 
                 v-on:click="switchTab(tab.value)"
                 v-bind:class="{'active-tab' : currentTab == tab.value}"
                 class="tab">
                    {{ tab.name }}
            </div>
        </div>

        <!-- Description Tab  -->
        <div class="description"
             v-html="this.query.description"
             v-bind:class="{'loading': !this.query.title}"
             v-show="currentTab == 'description'">
        </div>

        <!-- Files Tab -->
        <div class="files"
             v-show="currentTab == 'files'"
             v-for="(version, key) in this.query.versions"
             v-bind:key="key">
                <h3>Version {{ key }}</h3>

                <!-- Get Subversion. Ex 1.9.2 -->
                <div class="subversion"
                     v-for="subversion in version"
                     v-bind:key="subversion.id">
                        <div class="subversion-entry">
                            <div v-bind:class="subversion.type" class="release-type">{{ subversion.type }}</div>
                            <a v-bind:href="subversion.url" target="_blank">
                                {{ subversion.name }}
                            </a>
                        </div>
                        <!-- {{ subversion }} -->
                </div>
                
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Post",
    computed: mapState('singlePost', ['query']),
    data: function(){
        return {
            currentTab: "description",
            allTabs: [
                {
                    name: "Description",
                    value: "description"
                },
                {
                    name: "Files",
                    value: "files"
                },
            ]
        }
    },
    methods: {
        switchTab(value){
            this.currentTab = value;
        }
    },
    mounted: function(){
        this.$store.dispatch('singlePost/grabTest');
    }
}
</script>
