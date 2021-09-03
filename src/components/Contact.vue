<template>
    <section id="contact" class="common__container flex-row flex-wrap">
        <div class="common__full__content justify-center flex">
            <span class="text-primary font-size-title font-bold common__title" id="title">CONTACT INFORMATION</span>
        </div>
        <div class="common__content flex-col orderl-2">
            <span class="about__greeting text-primary font-size-24 font-bold">Contact</span>
            <span class="font-size-title font-bold common__margin__subcontent margin-top">Jason Lee</span>
            <span class="font-size-18 common__margin__subcontent margin-top">
                <ul style="margin-left:30px;" class="font-size-16">
                    <li class="margin-top">jasonleezhiyong@gmail.com</li>
                    <li class="margin-top">018-784 9195</li>
                    <li class="margin-top">Instagram: @smileyx96</li>
                    <li class="margin-top">GitHub: @jasonlee96</li>
                </ul>
            </span>
        </div>

        <div class="common__content flex-col fade-port orderl-1" 
        v-observe-visibility="{
            callback: FadeAnim,
            intersection: {
                threshold: 0.8,
            },
            once: true,
        }">
            <v-img :src="ImgOne" class="img1 shadow rounded-box"></v-img>
        </div>

        <!-- <div class="common__full__content justify-center flex">
            <span class="text-primary font-size-title font-bold common__title">Tech involves in this portfolio: VueJS</span>
        </div> -->
    </section>
</template>

<script>
import ImgOne from '../assets/img/img5.jpg';
export default {
  name: 'Contact',
  components: {
    
  },
  data: () => ({
      ImgOne
  }),
  methods: {
    FadeAnim: function (isVisible, entry) {
        
      if(isVisible){
          entry.target.classList.add("fade-anim");
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img1{
    margin: 0 60px;
    width: 100%;
    height: 500px;
}

#title{
    padding:10px 20px;
    border: 5px solid #17BCE1;
    border-bottom:0;
    border-right:0;
}
@media only screen and (max-width: 425px) {
    .img1, .img2{
        margin: 0;
    }
}
@media only screen and (max-width: 1024px) {
    #title{
        border-bottom: 5px solid #17BCE1 !important;
        border-right: 5px solid #17BCE1 !important;
    }
    #title::before{
        display:none !important;
    }
    #title::after{
        display:none !important;
    }
}
#title::before{
    position: relative;
    display: block;
    content: "";
    border-bottom: 5px solid #17BCE1;
    width: 91%;
    height: 5px;
    left: -20px;
    top: 64px;
}

#title::after{
    position: relative;
    display: block;
    content: "";
    border-right: 5px solid #17BCE1;
    width: 27px;
    height: 85%;
    left: 499px;
    top: -70px;
}

.fade-port{
    transition: 1s ease-in;
    transform: translateX(15px);
    opacity: 0.01;
}
.fade-port-rev{
    transition: 1s ease-in;
    transform: translateX(-15px);
    opacity: 0.01;
}
.fade-anim{
    opacity: 1;
    transform: translateX(0%);
}
</style>