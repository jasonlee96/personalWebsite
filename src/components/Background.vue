<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" class="background-container">
  </v-parallax>
</template>

<script>
export default {
  name: 'Background',
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background-container{
    position:fixed;
    width: 0%;
    z-index: -3;
  }
</style>