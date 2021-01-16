<template>
  <Background>
    <div class="text-box animation" ref="home">
      <h1><span v-for="(word, index) in msg.split(' ')" v-bind:key=index ref="words">{{ word }} </span></h1>
    </div>
    <div class="info-box">
      <div class="header">View my profile from:</div>
      <div class="content">
        <a :href="links.github" title="GitHub Profile">
          <font-awesome-icon :icon="['fab', 'github-square']" />
        </a>
        <a :href="links.linkedin" title="LinkedIn Profile">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a :href="links.projectRepo" title="Source Code">
          <font-awesome-icon :icon="['fas', 'code-branch']" />
        </a>
      </div>
      
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
  import Vue from 'vue';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
  import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  library.add(faGithubSquare, faLinkedin, faCodeBranch)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  export default {
    name: 'HomePage',
    components: {
      Background
    },
    props: {
      msg: String,
      links: Object
    },
    methods: {
      isMobile() {
        return ( window.innerWidth <= 800 );
      },
      checkWidth(){
        let scrollText = document.getElementsByClassName("scroll-text")[0];

        let arrowLeft = document.getElementsByClassName("arrow-left")[0];
        let arrowRight = document.getElementsByClassName("arrow-right")[0];
        if(this.isMobile()){
          scrollText.innerText = "Scroll to Right";
          arrowLeft.style.left = "150px";
          arrowRight.style.right = "-175px";
        }else{
          scrollText.innerText = "Scroll to right using mouse wheel or arrow key";
          arrowLeft.style.left = "5px";
          arrowRight.style.right = "-473px";
        }
        let infoBox = document.getElementsByClassName("info-box")[0];
        if(document.documentElement.clientWidth > 1300){
          infoBox.style.left = (document.documentElement.clientWidth - 220) + "px";
        }
      }
    },
    mounted(){
      for (let i = 0; i < this.$refs.words.length; i++){
          this.$refs.words[i].style.animationDelay = 0.5 * i +"s";
      }

      
      this.checkWidth();

      this.$nextTick(function() {
      window.addEventListener('resize', this.checkWidth);
      
    })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 425px){
    .info-box .header{
      font-size: 25px !important;
    }
    .info-box .content{
      font-size: 35px !important;
    }

  }
  @media only screen and (max-width: 600px){
    .text-box{
      margin-left: -35vw !important;
    }
  }
  @media only screen and (max-width: 1300px){
    .info-box{
      left: 50% !important;
      bottom: 70px !important;
    }
  }
  .text-box{
    position: absolute;
    top: 25px;
    left: 50vw;
    color: white;
    top: 50vh;
    margin-left: -21vw;
    margin-top: -10vh;
  }

  .text-box h1{
    font-size: 7vmax;
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

  .animation{
    animation: waveform 4s infinite linear;
  }

  .info-box{
    position: absolute;
    bottom: 20px;
    left: 1700px;
    margin-left: -250px;
    color:white;
    display: flex;
    flex-direction: column;
    width: 500px;
    justify-content: space-evenly;
  }

  .info-box .content{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 40px;
    width: 400px;
    align-self: center;
    color:white;
    pointer-events: fill;
  }

  .content a{
    color: white;
    text-decoration: none;
    z-index: 10;
    pointer-events: fill;
    cursor: pointer;
    padding: 10px 20px;
  }

  .info-box .header{
    margin: 20px 10px;
    font-size: 30px;
  }

  @keyframes waveform{
    0%{
      transform: translate(0px, 0px) 
    }
    33%{
      transform: translate(-10px, 10px) rotateZ(2deg)
    }
    66%{
      transform: translate(10px, -10px) rotateZ(-2deg)
    }
    100%{
      transform: translate(0px, 0px)
    }
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
