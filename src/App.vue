<template>
  <div id="app" ref="app">
    <HomePage v-bind:msg="this.message" v-bind:links="this.links" />
    <Bio v-bind:name="this.name" v-bind:position="this.pos" v-bind:scroll="this.scroll" v-bind:major="this.major"/>
    <Education v-bind:qualifications="this.qualifications"/>
    <Experience v-bind:experiences="this.experiences"/>
    <Skill v-bind:skills="this.skills" v-bind:langs="this.langs"/>
    <Title>Project Showcase</Title>
    <ProjectItem v-for="project in projects" v-bind:key="project.index" v-bind:project=project />
  </div>
</template>

<script>
import { HomePage, Bio, Education, Experience, Skill, ProjectItem } from './components';
import Title from './components/common/Title.vue';
import data from './resource/string';

export default {
  name: 'App',
  data() {
    return{
      scroll: 0,
      links: data.links,
      message: data.titleMessage,
      name: data.bioName,
      pos: data.latestPosition,
      major: data.major,
      qualifications: data.educations,
      experiences: data.experiences,
      skills: data.skills,
      langs: data.langs,
      projects: data.projects
    }
  },
  components: {
    HomePage,
    Bio,
    Education,
    Experience,
    Skill,
    Title,
    ProjectItem
  },
  methods:{
    scrollLeft: function() {
      this.scroll > 0 ? this.scroll -= 65 : this.scroll = 0;
      window.scrollTo(this.scroll, 0);
    },
    scrollRight: function() {
      let maxWidth = document.getElementById('app').offsetWidth - window.innerWidth;
      this.scroll < maxWidth ? this.scroll += 65 : this.scroll = maxWidth;
      window.scrollTo(this.scroll, 0);
    }
  },
  created(){
    window.addEventListener("unload", () => {
      window.scrollTo(0,0);
    });
  },
  mounted() {
    window.scrollTo(0,0);
    this.$refs.app.style.width = (this.$refs.app.children.length * 1920) + "px";
    window.addEventListener('wheel', (e) => {
      e.deltaY < 0 && this.scrollLeft();
      e.deltaY > 0 && this.scrollRight();
    });
    window.addEventListener('keydown', (e) => {
      e.keyCode === 37 && this.scrollLeft();
      e.keyCode === 39 && this.scrollRight();
    });
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
}
.shadow{
	box-shadow: rgba(59, 138, 196, 0.3) 0 0 10px;
}
</style>
