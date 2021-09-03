<template>
    <section id="portfolio" class="common__container flex-row flex-wrap">
        <div class="common__full__content justify-center flex">
            <span class="text-primary font-size-title font-bold common__title" id="title">PORTFOLIO SHOWCASE</span>
        </div>

        <div class="common__content flex-col orderl-2">
            <span class="about__greeting text-primary font-size-24 font-bold">Portfolio 1</span>
            <span class="font-size-title font-bold common__margin__subcontent margin-top">Skillset Analysis</span>
            <span class="font-size-18 common__margin__subcontent margin-top">Final Year Project 
                <ul style="margin-left:30px;" class="font-size-16">
                    <li class="margin-top">To analyze the key technical skillset needed for particular job position.</li>
                    <li class="margin-top">Using unsupervised data mining technique to extract the key information from 10k job postings.</li>
                    <li class="margin-top">Eg. Web Developer (C#, C++, Database, Test, etc.)</li>
                    <li class="margin-top">* Backend deprecated, not longer hosting in Heroku. *</li>
                    <li class="margin-top">Tech involves: Python, React JS, MongoDB </li>
                </ul>
            </span>
        </div>

        <div class="common__content flex-col fade-port orderl-1" v-observe-visibility="{
            callback: FadeAnim,
            intersection: {
                threshold: 0.8,
            },
            once: true,
        }">
            <a href="https://jasonlee96.github.io/Skillset-analysis/">
                <v-img :src="ImgOne" class="img1 shadow rounded-box"></v-img>
            </a>
        </div>

        <div class="common__content flex-col fade-port-rev orderl-3" v-observe-visibility="{
            callback: FadeAnim,
            intersection: {
                threshold: 0.5,
            },
            once: true,
        }">
            <a href="https://github.com/jasonlee96/InvoiceGeneratorWinForm">
                <v-img :src="ImgTwo" class="img2 shadow rounded-box"></v-img>
            </a>
        </div>

        <div class="common__content flex-col orderl-4">
            <span class="about__greeting text-primary font-size-24 font-bold">Portfolio 2</span>
            <span class="font-size-title font-bold common__margin__subcontent margin-top">Invoice Generator</span>
            <span class="font-size-18 common__margin__subcontent margin-top">Personal Project 
                <ul style="margin-left:30px;" class="font-size-16">
                    <li class="margin-top">Implement throughout my free time.</li>
                    <li class="margin-top">Generates invoices using HTML template and convert into PDF format which can issue to customer</li>
                    <li class="margin-top">Additional Feature to send out the invoice automatically through mail client. (Not yet done)</li>
                    <li class="margin-top">Tech involves: .NET WinForm </li>
                </ul>
            </span>
        </div>
    </section>
</template>

<script>
import ImgOne from '../assets/img/img3.png';
import ImgTwo from '../assets/img/img4.png';
export default {
  name: 'Portfolio',
  components: {
    
  },
  data: ()=>({
      ImgOne,
      ImgTwo
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
.img2{
    margin: 0 -60px;
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
    width: 5px;
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