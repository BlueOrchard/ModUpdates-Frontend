<template>
    <div class="header">
        <div class="logo">
            <img src="./../assets/logo.png">
        </div>

        <div class="search">
            <input type="text" placeholder="Search ModUpdates">
            <button><i class="fas fa-search"></i></button>
        </div>

        <div class="nav-menu">
            <a href="">Browse</a>
            <a href="">Subscriptions</a>
        </div>

        <div class="right-profile">
            <div class="avatar-name">
                <p>Login</p>
            </div>
            <div class="avatar">
                <div class="white-border">
                    <img src="./../assets/avatar.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>
