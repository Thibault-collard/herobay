<template>
  <div id="app">
    <Navbar> </Navbar>
    <GridHeroes> </GridHeroes>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import GridHeroes from './components/GridHeroes.vue'
  import Cart from './components/Cart.vue'
  export default {
    components: {
      Navbar,
      GridHeroes,
      Cart
    }
  }

</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
