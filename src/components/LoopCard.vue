<template>
    <div class="loop-card">
        <router-link to="/mod">
            <div class="image">
                <div class="image-holder">

                </div>
            </div>
        </router-link>
         
        <router-link to="/post">
            <p class="title">Title Here</p>
        </router-link>

        <div class="versions">
            <span class="version"><i class="fas fa-code-branch"></i>1.13</span>
            <span class="version"><i class="fas fa-code-branch"></i>1.12</span>
            <span class="version"><i class="fas fa-code-branch"></i>1.11</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoopCard"
}
</script>

