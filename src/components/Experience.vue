<template>
  <Background>
      <div class="title-box">
          <h1>Work Experience</h1>
      </div>
    <div class="content-box" ref="exp">
        <div class="experiences-box" v-for="({position, company, date}) in experiences" v-bind:key=position>
            <div class="position"><div>	&#9830;&#160;</div>{{position}}</div>
            <div class="company">{{company}}</div>
            <div class="info-box">
                <div class="date">{{date}}</div>
            </div>
           
        </div>
    </div>
  </Background>
</template>

<script>
import Background from './common/Background.vue';

  export default {
    name: 'Experience',
    components: {
      Background
    },
    props: {
      experiences: Array
    },
    mounted(){
        this.$refs.exp.style.marginLeft = -(this.$refs.exp.offsetWidth/2)+"px";
        this.$refs.exp.style.marginTop = -((this.$refs.exp.offsetHeight/2)-25)+"px";
    }
  }
</script>

<style scoped>
    .experiences-box{
        display: flex;
        flex-direction: column;
        margin: 30px 0px;
    }
    .experiences-box>div{
        margin: 15px 5px;
    }
    .info-box{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        width: 1000px;
        align-self: center;
        text-shadow: 2px 2px rgba(0,0,0,0.3);

    }
    .position{
        align-self: flex-start;
        font-size: 45px;
        margin: 0;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: row;
    }
    .position div{
        margin-right:20px;
        font-size: 40px;
    }
    .company{
        font-size: 35px;
        width: 1100px;
        align-self: center;
        text-align: start;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
    }
    .date{
        font-size: 30px;
    }
</style>