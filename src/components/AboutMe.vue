<template>
    <section id="about" class="common__container flex-row flex-wrap">
        <div class="common__content flex-col">
            <span class="about__greeting text-primary font-size-24 font-bold">Greetings!</span>
            <span class="font-size-title font-bold common__margin__subcontent margin-top">I am a Software Engineer.</span>
            <span class="font-size-18 common__margin__subcontent margin-top">A software engineer and Full stack developer who passionate on building website and application! 
                <ul style="margin-left:30px;" class="font-size-16">
                    <li class="margin-top">Two years software development experience in several industries such as Airline, Food & Beverage, E-Commerce, and etc.</li>
                    <li class="margin-top">As a lead developer who led a small team to ensure the project can be done smoother without issues.</li>
                    <li class="margin-top">Specialized in Backend development which mainly focus on .NET Core & .NET Framework</li>
                    <li class="margin-top">Frontend development using ASP.NET MVC, Razor Pages, ReactJS & VueJS.</li>
                    <li class="margin-top">Having experience on Azure DevOps to set up CI/CD pipeline for several projects to achieve auto deployment to respective server.</li>
                </ul>
            </span>
        </div>

        <div class="common__content flex-col fade-port" v-observe-visibility="{
            callback: FadeAnim,
            intersection: {
                threshold: 0.8,
            },
            once: true,
        }">
            <v-img :src="ImgOne" class="img1 shadow rounded-box"></v-img>
        </div>

        <div class="common__content flex-col fade-port-rev" v-observe-visibility="{
            callback: FadeAnim,
            intersection: {
                threshold: 0.5,
            },
            once: true,
        }">
            <v-img :src="ImgTwo" class="img2 shadow rounded-box"></v-img>
        </div>

        <div class="common__content flex-col">
            <span class="about__greeting text-primary font-size-24 font-bold">Web Developer</span>
            <span class="font-size-24 font-bold common__margin__subcontent margin-top">Currently working in AlphaRed Solution Sdn. Bhd.</span>
            <span class="font-size-18 common__margin__subcontent margin-top">
                <ul style="margin-left:30px;" class="font-size-16">
                    <li class="margin-top">Opportunities to involve into several industries such as Airline, F&B, E-commerce, and etc.</li>
                    <li class="margin-top">Able to adapt into the working environment quickly, understand senior's practice and apply accordingly.</li>
                    <li class="margin-top">Being a lead developer to lead several developers and interns to ensure better code practice applies.</li>
                    <li class="margin-top">Expose to most of the Microsoft technologies such as Azure DevOps, ASP.NET Frameworks, .NET Core Frameworks, and etc. </li>
                </ul>
            </span>
        </div>

        <div>

        </div>
    </section>
</template>

<script>
import ImgOne from '../assets/img/img1.jpg';
import ImgTwo from '../assets/img/img2.jpg';
export default {
  name: 'AboutMe',
  components: {
    
  },
  data: ()=>({
      ImgOne: ImgOne,
      ImgTwo: ImgTwo,
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
.about__greeting{
    width:280px;
    letter-spacing: 3px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 4px solid #17BCE1;
}
.img1{
    margin: 0 60px;
    width: 100%;
    height: 500px;
}
.img2{
    margin: 0 -60px;
    width: 100%;
    height: 500px;
}

.fade-port{
    transition: 1s ease-in;
    transform: translateX(15px);
    opacity: 0.01;
}
.fade-port-rev{
    transition: 1.5s ease-in;
    transform: translateX(-15px);
    opacity: 0.01;
}
.fade-anim{
    opacity: 1;
    transform: translateX(0%);
}
@media only screen and (max-width: 425px) {
    .img1, .img2{
        margin: 0;
    }
}
</style>