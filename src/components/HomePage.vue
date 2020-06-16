<template>
  <Background>
    <div class="text-box" ref="home">
      <h1><span v-for="(word, index) in msg.split(' ')" v-bind:key=index ref="words">{{ word }} </span></h1>
    </div>

    <div class="scroll-box">
        <div class="arrow-left">&lt;</div>
        <div class="scroll-text">Scroll to right using mouse wheel or arrow key</div>
        <div class="arrow-right">&gt;</div>
    </div>
  </Background>
  
</template>

<script>
  import Background from './common/Background.vue';

  export default {
    name: 'HomePage',
    components: {
      Background
    },
    props: {
      msg: String
    },
    mounted(){
      for (let i = 0; i < this.$refs.words.length; i++){
          this.$refs.words[i].style.animationDelay = 0.5 * i +"s";
      }
      console.log(this.$refs.home.offsetWidth);
      this.$refs.home.style.marginLeft = -(this.$refs.home.offsetWidth/2)+"px";
      this.$refs.home.style.marginTop = -(this.$refs.home.offsetHeight/2)+"px";
      console.log(this.$refs.home.offsetWidth);
      console.log(this.$refs)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text-box{
    width:838px;
    position: absolute;
    top: 25px;
    left: 50%;
    color: white;
    top: 50%;
  }

  .text-box h1{
    font-size: 150px;
    margin: 0;
  }

  .text-box span{
    animation: fade-in linear 2.5s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .text-box span:first-child{
    animation-delay: 0s;
  }

  .text-box span:last-child{
    animation-delay: 1s;
  }

  .scroll-box{
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -250px;
    display: flex;
    flex-direction: row;
    width: 500px;
    justify-content: space-evenly;
  }

  .scroll-text{
    color: white;
    font-size: 20px;
  }

  .arrow-left, .arrow-right{
    position:absolute;
    bottom: 10px;
    left: 5px;
    font-size: 24px;
    color: white;
    height: 25px;
    margin-bottom: -5px;
  }
  .arrow-right{
    right: -473px;
  }

  @keyframes fade-in {
    from{
      opacity: 0;
    }

    to{
      opacity: 1;
    }
  }
</style>
