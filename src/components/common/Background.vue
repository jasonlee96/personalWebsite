<template>
  <div class="background-container">
    <slot />
    <Bubble />
  </div>
  
</template>

<script>
import Bubble from './Bubble.vue';

export default {
  name: 'Background',
  components: {
    Bubble
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background-container{
    position:relative;
    width: 1920px;
    height: 100%;
    background: #63e5ff;
    background-image: linear-gradient(#4bb4de, #3b8ac4); 
    z-index: -3;
  }
</style>
