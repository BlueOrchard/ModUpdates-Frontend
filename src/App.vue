<template>
  <div id="app">
    <Header />
    
    <div class="body-content">
      <SideBar/>
      <Body/>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Body from './components/Body.vue';
import SideBar from './components/SideBar.vue';

export default {
  name: 'app',
  components: {
    Header, Footer, Body, SideBar
  }
}
</script>
