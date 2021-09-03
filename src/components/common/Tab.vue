<template>
    <v-tabs
      class="fixed-tab"
      grow
      background-color="transparent"
      v-model="active_tab"
    >
        <v-tab v-for="tab of tabs" :key="tab.index" :value="tab.index" @click="onClick(tab.index)">
        {{tab.name}}
        </v-tab>

    </v-tabs>
</template>

<script>
  export default {
    name: 'Tab',
    props: {
      active_tab: Number
    },
    data: () => ({
      tabs: [
        { index: 0, name: 'Hello World!' },
        { index: 1, name: 'About Me' },
        { index: 2, name: 'Education' },
        { index: 3, name: 'Experience' },
        { index: 4, name: 'Awards' },
        { index: 5, name: 'Projects'},
        { index: 6, name: 'Project 1'},
      ]
    }),
    methods:{
        onClick(index){
            this.$emit('update-index', index);
            //this.scrollNextPage(this.active_tab, this.scrollFunction);
        }
    }
  }
</script>

<style scoped>
    .v-tab{
        color:white !important;
        background: transparent !important;
    }
    .fixed-tab{
        position:fixed;
        top:20px;
        z-index:100;
    }
    .fixed-tab >>> div{
        background: transparent !important;
        color: white !important;
        margin: 0px 20px;
        pointer-events: fill;
    }
    .v-tab:hover{
        background:rgba(0,0,0,0.05) !important;
        border-radius: 10px;
    }

    .fixed-tab >>> .v-tab--active{
        background:rgba(0,0,0,0.1) !important;
        border-radius: 10px;
    }
    .v-tab:before{
        background-color:transparent;
    }
    
    @media only screen and (max-width: 1160px){
      .fixed-tab{
        display: none;
      }
    }
</style>