<template>
    <section id="project" class="common__container flex-row flex-wrap">
        <div class="common__full__content justify-center flex">
            <span class="text-primary font-size-title font-bold common__title" id="title">PROJECT INVOLVED</span>
        </div>

        <div class="common__content flex-col ">
            <span class="about__greeting text-primary font-size-24 font-bold">Project 1</span>
            <span class="font-size-title font-bold common__margin__subcontent margin-top">MrsEasy</span>
            <span class="font-size-18 common__margin__subcontent margin-top">Company Project 
                <ul style="margin-left:30px;" class="font-size-16">
                    <li class="margin-top">A E-commerce application which focus on F&B market and extended to DriverOnDemand (DOD) market on mid of year 2022.</li>
                    <li class="margin-top">My Roles:</li>
                    <ul>
                        <li class="margin-top">As a lead developer to satisfy the business requirement.</li>
                        <li class="margin-top">Implemented our new API to replace current third-party API.</li>
                        <li class="margin-top">Enhanced the codebase to improve the DB access layer to optimize the server memory utilization, and writes a maintainable code.</li>
                    </ul>
                    <li class="margin-top">Tech involves: .NET Framework & MVC</li>
                </ul>
            </span>
        </div>

        <div class="common__content flex-col ">
            <span class="about__greeting text-primary font-size-24 font-bold">Project 2</span>
            <span class="font-size-title font-bold common__margin__subcontent margin-top">T-Commerce Gateway</span>
            <span class="font-size-18 common__margin__subcontent margin-top">Company Project 
                <ul style="margin-left:30px;" class="font-size-16">
                    <li class="margin-top">Travel content aggregator which plays crucial roles in between Online Travel Agent & Airline.</li>
                    <li class="margin-top">My Roles:</li>
                    <ul>
                    <li class="margin-top">To ensure the accuracy & availability of content, and also enhance the server infrastructure to deliver the content in reasonable time during high load.</li>
                    <li class="margin-top">Adjust the cache key to provide higher hit rate of the cache.</li>
                    </ul>
                    <li class="margin-top">Tech involves: .NET Framework & Web API </li>
                </ul>
            </span>
        </div>

        <div class="common__content flex-col ">
            <span class="about__greeting text-primary font-size-24 font-bold">Project 3</span>
            <span class="font-size-title font-bold common__margin__subcontent margin-top">An Airline Project (Confidential)</span>
            <span class="font-size-18 common__margin__subcontent margin-top">Client's Project 
                <ul style="margin-left:30px;" class="font-size-16">
                    <li class="margin-top">We helped our client to create their booking engine to replace the current website which couldn't satisfy their requirement.</li>
                    <li class="margin-top">My Roles:</li>
                    <ul>
                        <li class="margin-top">As a Backend lead developer to integrate their PSS system into our API.</li>
                        <li class="margin-top">Ensure the backend to works as expected without any issue.</li>
                        <li class="margin-top">As a lead developer to setup backoffice website for admin management.</li>
                    </ul>
                    <li class="margin-top">Tech involves: .NET Core, .NET Web API, VueJS & ASP.NET Razor Pages</li>
                </ul>
            </span>
        </div>

        <div class="common__content flex-col ">
            <span class="about__greeting text-primary font-size-24 font-bold">Project 4</span>
            <span class="font-size-title font-bold common__margin__subcontent margin-top">Crypto related Project (Confidential)</span>
            <span class="font-size-18 common__margin__subcontent margin-top">Client's Project 
                <ul style="margin-left:30px;" class="font-size-16">
                    <li class="margin-top">We helped our client to create their mobile application allow their client to start their investment from the app.</li>
                    <li class="margin-top">My Roles:</li>
                    <ul>
                    <li class="margin-top">As a lead developer to setup backoffice website for admin management.</li>
                    </ul>
                    <li class="margin-top">Tech involves: .NET Core, .NET Web API & ASP.NET Razor Pages</li>
                </ul>
            </span>
        </div>
        
    </section>
</template>

<script>
export default {
  name: 'Project',
  components: {
    
  },
  data: ()=>({

  }),
  methods: {
    FadeAnim: function (isVisible, entry) {
        
      if(isVisible){
          entry.target.classList.add("fade-anim");
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img1{
    margin: 0 60px;
    width: 100%;
    height: 500px;
}
.img2{
    margin: 0 -60px;
    width: 100%;
    height: 500px;
}
#title{
    padding:10px 20px;
    border: 5px solid #17BCE1;
    border-bottom:0;
    border-right:0;
}
@media only screen and (max-width: 425px) {
    .img1, .img2{
    margin: 0;
    }
}
@media only screen and (max-width: 1024px) {
    #title{
        border-bottom: 5px solid #17BCE1 !important;
        border-right: 5px solid #17BCE1 !important;
    }
    #title::before{
        
        display:none !important;
    }
    #title::after{
        display:none !important;
    }
}
#title::before{
    position: relative;
    display: block;
    content: "";
    border-bottom: 5px solid #17BCE1;
    width: 91%;
    height: 5px;
    left: -20px;
    top: 64px;
}

#title::after{
    position: relative;
    display: block;
    content: "";
    border-right: 5px solid #17BCE1;
    width: 5px;
    height: 85%;
    left: 427px;
    top: -70px;
}

.fade-port{
    transition: 1s ease-in;
    transform: translateX(15px);
    opacity: 0.01;
}
.fade-port-rev{
    transition: 1s ease-in;
    transform: translateX(-15px);
    opacity: 0.01;
}
.fade-anim{
    opacity: 1;
    transform: translateX(0%);
}
</style>