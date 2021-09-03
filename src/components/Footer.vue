<template>
  <div class="info-box bg-darker text-white">
      <div class="header">View my profile from <span class="arrow-down"></span></div>
      <div class="content">
          <LinkIcon v-bind:url="github" title="GitHub Profile" v-bind:icon="['fab', 'github-square']"/>
          <LinkIcon v-bind:url="linkedin" title="LinkedIn Profile" v-bind:icon="['fab', 'linkedin']"/>
          <LinkIcon v-bind:url="sourceCode" title="Source Code" v-bind:icon="['fas', 'code-branch']"/>
      </div>
      
    </div>
</template>

<script>
import { LinkIcon } from "./common";
export default {
  name: 'Footer',
  components: {
    LinkIcon
  },
  data: ()=>({
      github:"https://github.com/jasonlee96",
      linkedin:"https://www.linkedin.com/in/jasonleezhiyong/",
      sourceCode:"https://github.com/jasonlee96/personalWebsite"
  })
}
</script>

<style>
.info-box{
    position:fixed;
    bottom:-75px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 150px 150px 0 0;
    transition: 0.5s ease-in;
  }
  .info-box:hover, .info-box:active{
    bottom:0px;
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
    margin: 15px 10px;
    text-align:center;
    font-size: 20px;
  }
</style>