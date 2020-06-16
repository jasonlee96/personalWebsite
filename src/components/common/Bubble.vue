<template>
    <ul class="bubble">
        <li class="shadow"></li>
        <li class="shadow"></li>
        <li class="shadow"></li>
        <li class="shadow"></li>
        <li class="shadow"></li>
    </ul>
</template>

<script>
export default {
    name: 'Bubble'
}
</script>

<style>
 .bubble{
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .bubble li{
    position: absolute;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    list-style: none;
    margin: 0;
    display: block;
    bottom: -15%;
    background-color: #4bbcf46f;

    z-index: -2;
    animation: float linear 10s infinite;
  }
  .bubble li:after{
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 15px;
    width: 15px;
    height: 30px;
    z-index: -1;
    left: 68%;
    background-color: #b1f2ff;
  }
  .bubble li:nth-child(1){    
    left: 10%;
    transform: scale(1.25);
    animation-delay: 1s;
  }
  .bubble li:nth-child(2){
    left: 25%;
    transform: scale(1);
    animation-delay: 5s;
  }
  .bubble li:nth-child(3){
    left: 45%;
    transform: scale(0.75);
    animation-delay: 2s;
  }
  .bubble li:nth-child(4){
    left: 68%;
    transform: scale(1.15);
    animation-delay: 3.5s;
  }
  .bubble li:nth-child(5){
    left: 88%;
    transform: scale(1.5);
    animation-delay: 0s;
  }

  @keyframes float{
    0%{
      transform: translateY(0)  translateX(0px);
      
    }

    20%{
      transform: translateY(-220px) translateX(-40px);
    }

    40%{
      transform: translateY(-440px) translateX(0px);
    }

    60%{
      transform: translateY(-660px) translateX(40px);
    }

    80%{
      transform: translateY(-880px) translateX(0px);
    }

    100%{
      transform: translateY(-1100px) translateX(-40px);
    }
  }
</style>