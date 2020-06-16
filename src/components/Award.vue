<template>
  <Background>
      <div class="title-box">
          <h1>Education</h1>
      </div>
    <div class="content-box" ref="box">
        <div class="qualification-box" v-for="({major, university, date, cgpa}) in qualifications" v-bind:key=major>
            <div class="major"><div>&#187;&#160;</div>{{major}}</div>
            <div class="uni">{{university}}</div>
            <div class="info-box">
                <div class="date">{{date}}</div>
                <div class="cgpa">CGPA: {{cgpa}}</div>
            </div>
           
        </div>
    </div>
  </Background>
</template>

<script>
import Background from './common/Background.vue';

  export default {
    name: 'Award',
    components: {
      Background
    },
    props: {
      qualifications: Array
    },
    mounted(){
        this.$refs.box.style.marginLeft = -(this.$refs.box.offsetWidth/2)+"px";
        this.$refs.box.style.marginTop = -((this.$refs.box.offsetHeight/2))+"px";
    }
  }
</script>

<style>
    .title-box{
        position: absolute;
        top: 20px;
        left: 8%;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
    }

    .title-box h1{
        font-size: 70px;
        color: white;
    }
    
    .content-box{
        position: absolute;
        left: 50%;
        width: 1400px;
        color: white;
        top: 45%;
    }

    .content-box h1{
        font-size: 40px;
        margin: 0;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
    }
</style>

<style scoped>
    .qualification-box{
        display: flex;
        flex-direction: column;
        margin: 30px 0px;
    }
    .qualification-box>div{
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
    .major{
        align-self: flex-start;
        font-size: 45px;
        margin: 0;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: row;
    }
    .major div{
        margin-right:20px;
        font-size: 40px;
    }
    .uni{
        font-size: 35px;
        width: 1100px;
        align-self: center;
        text-align: start;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
    }
    .date{
        font-size: 30px;
    }
    .cgpa{
        font-size: 28px;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
        font-weight: 700;
    }
</style>