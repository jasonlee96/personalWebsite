<template>
  <Background>
      <div class="title-box">
          <h1>{{project.title}}</h1>
      </div>
    <div class="content-box" ref="projectBox">
        <div class="content-inner-box">
            <a class="link" :href=project.url>
                <img class="image" :src="getImgPath(project.image)" alt="project">
                <div class="description">
                    <p>{{project.description}}</p>
                </div>
            </a>
        </div>
    </div>
  </Background>
</template>

<script>
import Background from './common/Background.vue';

  export default {
    name: 'ProjectItem',
    components: {
      Background
    },
    props: {
      project: Object
    },
    mounted(){
        this.$refs.projectBox.style.marginLeft = -(this.$refs.projectBox.offsetWidth/2)+"px";
        this.$refs.projectBox.style.marginTop = -((this.$refs.projectBox.offsetHeight/2)-110)+"px";
    },
    methods: {
        getImgPath(img){
            return require(`../assets/${img}`)
        }
    }
  }
</script>


<style scoped>
    .title-box h1{
        font-size: 45px;
    }
    .content-box{
        background: #445277;
        height: 700px;
        border-radius: 15px;
        box-shadow: 8px 8px 8px 2px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content-inner-box{
        width: 90%;
        height: 600px;
        background: #7CA9EE;
        border-radius: 15px;
        color: black;
        position:relative;
    }
    .link{
        margin: 0;
        display:flex;
        padding: 0;
        color: black;
        text-decoration: none;
        width: 100%;
        height:100%;
        cursor: pointer;
        z-index: 10;
        pointer-events: fill;
    }
    .description{
        position:absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-color: rgba(0,0,0,0.3);
        color: white;
        border-radius: 15px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .image{
        width:100%;
        height:100%;
        border-radius: 15px
    }
</style>