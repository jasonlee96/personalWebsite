<template>
  <Background>
      <div class="title-box">
          <h1>Skill</h1>
      </div>
    <div class="content-box" ref="skill">
        <div class="subcontent">
            <div class="title">
                Languages
            </div>
            <div class="content">
                <div class="lang">
                    <div class="lang-title">
                        <div class="symbol">&#9752;</div>Programming Language:
                    </div>
                    <div class="lang-content">
                        {{langs.program}}
                    </div>
                </div>
                <div class="lang">
                    <div class="lang-title">
                        <div class="symbol">&#9752;</div>Spoken Language:
                    </div>
                    <div class="lang-content">
                        {{langs.spoken}}
                    </div>
                </div>
            </div>
        </div>
        <div class="subcontent">
            <div class="title">
                Technical Skill
            </div>
            <div class="content">
                <div class="skill-box" v-for="({title, examples}) in skills" v-bind:key=title>
                    <div class="skill-title"><div class="symbol">&#9752;&#160;</div>{{title}}</div>
                    <div class="skill-example">{{examples}}</div>
                </div>
            </div>
        </div>
    </div>
  </Background>
</template>

<script>
import Background from './common/Background.vue';

  export default {
    name: 'Skill',
    components: {
      Background
    },
    props: {
      skills: Array,
      langs: Object
    },
    mounted(){
        this.$refs.skill.style.marginLeft = -(this.$refs.skill.offsetWidth/2)+"px";
        this.$refs.skill.style.marginTop = -((this.$refs.skill.offsetHeight/2)-100)+"px";
    }
  }
</script>

<style scoped>
    .subcontent{
        display: flex;
        flex-direction: column;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
        margin: 15px 10px;
    }
    .title{
        font-size: 45px;
        align-self: flex-start;
        margin-left:30px;
    }
    .content{
        align-self: flex-start;
        text-align: left;
        margin: 30px 0px;
        margin-left: 110px;
        margin-bottom: 0;
    }
    .lang{
        margin: 20px 0;
    }
    .lang-title{
        font-size: 30px;
        align-self: flex-start;
        margin: 10px 0px;
        display:flex;
        flex-direction: row;
    }
    .lang-content{
        font-size: 26px;
        margin: 10px 0px;
        margin-left: 50px;
    }
    .skill-box{
        display: flex;
        flex-direction: column;
        margin: 10px 0;
    }

    .skill-title{
        align-self: flex-start;
        font-size: 30px;
        margin: 0;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: row;
    }

    .skill-example{
        margin: 15px 0;
        margin-left: 70px;
        font-size: 26px;
        width: 1100px;
        align-self: center;
        text-align: start;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
    }
    .symbol{
        margin-right: 20px;
    }
</style>