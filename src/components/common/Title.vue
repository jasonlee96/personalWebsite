<template>
  <Background>
    <div class="content-box" ref="titleBox">
        <h1><slot /></h1>
    </div>
  </Background>
</template>

<script>
import Background from './Background.vue';

  export default {
    name: 'Title',
    components: {
      Background
    },
    mounted(){
        this.$refs.titleBox.style.marginLeft = -(this.$refs.titleBox.offsetWidth/2)+"px";
        this.$refs.titleBox.style.marginTop = -((this.$refs.titleBox.offsetHeight/2)-110)+"px";
    }
  }
</script>

<style scoped>
    .content-box h1{
        font-size: 130px;
    }
</style>