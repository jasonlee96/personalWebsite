<template>
  <section id="hello" class="flex-row shadow" style="margin-bottom:50px; height: 90vh;background:#363737;">
      <div class="common__content flex-col fade-block" style="margin: auto 0;text-align:center;">
        <div class="" style="">
            <span class="text-white font-size-title font-bold common__title">Hello, I'm Jason Lee</span>
        </div>

        <div class="" style="margin-top: 35px;">
            <span class="text-white font-size-24 font-bold common__title">Welcome to My Portfolio Website</span>
        </div>
      </div>
      <div class="common__content flex-col fade-block" style="margin:0;padding:0;">

        <v-img :src="LandingImg" class="img1 shadow"></v-img>

      </div>
    </section>
</template>

<script>
  import LandingImg from '../assets/img/landing.jpg';

  export default {
    name: 'HelloWorld',

    data: () => ({
      LandingImg
    }),
    mounted:function(){
      setTimeout(function(){
        var els = document.querySelectorAll(".fade-block");

        els.forEach(function(el){
          el.classList.add("fade-anim");
        })
      }, 500);
      
    },
  }
</script>
<style scoped>
.img1{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 500px;
}
  .fade-block{
    opacity:0.1;
    transition: opacity 2s ease-in;
  }
  .fade-anim{
    opacity: 1;
  }
</style>

