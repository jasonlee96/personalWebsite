<template>
    <Background>
        <div class="bio-box">
            <h1><span ref="word">I am</span></h1>
        </div>
        <div class="text-box" ref="box">
            <h1><span v-for="(word, index) in name.split(' ')" v-bind:key=index ref="words">{{ word }} </span></h1>
        </div>
        <div class="position-box" ref="box1"> 
            <h1><span v-for="(word, index) in position.split(' ')" v-bind:key=index ref="words">{{ word }} </span></h1>
        </div>
        <div class="major-box" ref="box2">
            <h1><span ref="word1">{{ major }}</span></h1>
        </div>
    </Background>
</template>

<script>
import Background from './common/Background.vue';

export default {
    name: 'Bio',
    components: {
      Background
    },
    props: {
      name: String,
      position: String,
      scroll: Number,
      major: String
    },
    mounted(){
        const ANIMATION_OFFSET = 0.15;
        window.addEventListener("scroll", () => {
            if(this.scroll > 1300){
                this.$refs.word.classList.add("fade-in");
                this.$refs.word1.classList.add("fade-in");
                for (let i = 0; i < this.$refs.words.length; i++){
                    this.$refs.words[i].classList.add("fade-in");
                    this.$refs.words[i].style.animationDelay = ANIMATION_OFFSET * i +"s";
                }
                this.$refs.word1.style.animationDelay = ANIMATION_OFFSET * this.$refs.words.length  + "s";
            }
        });
        this.$refs.box.style.marginLeft = -(this.$refs.box.offsetWidth/2)+"px";
        this.$refs.box.style.marginTop = -(this.$refs.box.offsetHeight/2)+"px";
        this.$refs.box1.style.marginLeft = -(this.$refs.box1.offsetWidth/2)+"px";
        this.$refs.box2.style.marginLeft = -(this.$refs.box2.offsetWidth/2)+"px";
    }
}
</script>

<style scoped>
    .bio-box{
        position: absolute;
        top: 35px;
        left: 13%;
    }

    .bio-box h1{
        font-size: 100px;
        color: white;
    }

    .text-box{
        position: absolute;
        left: 50%;
        margin-left: -400px;
        color: white;
        top: 45%;
        margin-top: -86px;
    }

    .text-box h1{
        font-size: 150px;
        margin: 0;
        text-shadow: 2px 2px rgba(0,0,0,0.3);
    }

    .position-box{
        position: absolute;
        bottom: 100px;
        left: 50%;
    }

    .position-box h1{
        font-size: 58px;
        color: white;
    }

    .major-box{
        position: absolute;
        bottom: 45px;
        left: 65%;
    }

    .major-box h1{
        font-size: 30px;
        color: white;
    }

    .text-box span, .position-box span, .bio-box span, .major-box span{
        opacity: 0;
    }
    
    .fade-in{
        animation: fade-in linear 2s forwards;
    }

    .text-box span:first-child{
        animation-delay: 0s;
    }

    .text-box span:last-child{
        animation-delay: 1s;
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