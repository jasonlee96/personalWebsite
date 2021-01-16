<template>
  <div id="app" ref="app">
    <Tab v-bind:active_tab="this.currentIndex" v-on:update-index="currentIndexChanged" ref="tab"/>
    <HomePage v-bind:msg="this.message" v-bind:links="this.links" id="section0" />
    <Bio v-bind:name="this.name" v-bind:position="this.pos" v-bind:major="this.major" id="section1" ref="bio"/>
    <Education v-bind:qualifications="this.qualifications" id="section2"/>
    <Experience v-bind:experiences="this.experiences" id="section3"/>
    <Skill v-bind:skills="this.skills" v-bind:langs="this.langs" id="section4"/>
    <Title id="section5">Project Showcase</Title>
    <ProjectItem v-for="project in projects" v-bind:key="project.index" v-bind:project=project id="section6"/>
  </div>
</template>

<script>
import { HomePage, Bio, Education, Experience, Skill, ProjectItem } from './components';
import Title from './components/common/Title.vue';
import Tab from './components/common/Tab.vue';
import data from './resource/string';

export default {
  name: 'App',
  data() {
    return{
      links: data.links,
      message: data.titleMessage,
      name: data.bioName,
      pos: data.latestPosition,
      major: data.major,
      qualifications: data.educations,
      experiences: data.experiences,
      skills: data.skills,
      langs: data.langs,
      projects: data.projects,
      THRESHOLD_LIMIT: 8,
      currentIndex: 0,
      threshold: 8,
      refreshThreshold: null
    }
  },
  components: {
    HomePage,
    Bio,
    Education,
    Experience,
    Skill,
    Title,
    ProjectItem,
    Tab
  },
  methods:{
    scrollNextPage: function(currentIndex, scrollFunction){
      window.removeEventListener('wheel', scrollFunction);
      let offset = document.getElementById('section'+currentIndex).offsetLeft;
      window.scrollTo({
        top: 0,
        left: offset,
        behavior: 'smooth'
      });
      window.addEventListener('wheel', scrollFunction);
      if(currentIndex == 1){
        this.$refs.bio.showAnimation();
      }
    },
    scrollFunction: function (e){
      clearTimeout(this.refreshThreshold);
      this.refreshThreshold = setTimeout(function(){ 
        this.threshold = this.THRESHOLD_LIMIT;
      }, 100);
      this.threshold--;

      if(this.threshold == 0){
        if(e.deltaY > 0){
          //scroll Right
          if(this.currentIndex < 6){
            this.currentIndex++;
            this.scrollNextPage(this.currentIndex, this.scrollFunction);
          }
          
          this.threshold = this.THRESHOLD_LIMIT;
        }
        if(e.deltaY < 0){
          // scroll Left
          if(this.currentIndex > 0){
            this.currentIndex--;
            this.scrollNextPage(this.currentIndex, this.scrollFunction);
          }
          this.threshold = this.THRESHOLD_LIMIT;
        }
      }
    },
    currentIndexChanged: function(index){
      this.currentIndex = index;
      this.scrollNextPage(this.currentIndex, this.scrollFunction);
    }
  },
  created(){
    window.addEventListener("unload", () => {
      window.scrollTo(0,0);
    });
  },
  mounted() {
    window.scrollTo(0,0);
    this.$refs.app.style.width = ((this.$refs.app.children.length - 1) * document.documentElement.clientWidth) + "px";

    window.addEventListener('wheel', this.scrollFunction);
    window.addEventListener('keydown', (e) => {
      if(e.keyCode === 38){
        console.log(this.currentIndex);
      }
      if(e.keyCode === 37 && this.currentIndex > 0){
        this.currentIndex--;
        this.scrollNextPage(this.currentIndex, this.scrollFunction);
        this.threshold = this.THRESHOLD_LIMIT;
      }
      if(e.keyCode === 39 && this.currentIndex < 6){
        this.currentIndex++;
        this.scrollNextPage(this.currentIndex, this.scrollFunction);
        this.threshold = this.THRESHOLD_LIMIT;
      }
    });

    this.$nextTick(function() {
      window.addEventListener('resize', function(){
        let app = document.getElementById("app");

        app.style.width = ((app.children.length - 1) * document.documentElement.clientWidth) + "px";
      });
      
    })
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap');
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  height: 100%;
  scroll-behavior: smooth;
  z-index: 0;
  pointer-events: none;
  overflow-y:hidden;
}
body{
  margin: 0;
  z-index:0;
  height: 100%;
  pointer-events: none;
}
html{
  margin: 0;
  z-index:0;
  pointer-events: none;
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden !important;
}
.shadow{
	box-shadow: rgba(59, 138, 196, 0.3) 0 0 10px;
}
</style>