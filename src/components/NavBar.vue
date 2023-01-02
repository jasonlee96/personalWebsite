<template>
  <v-container class="">
    <v-row no-gutters class="py-4">
      <v-col
        cols="3"
        md="3"
      >
        <v-img
          max-height="100"
          max-width="100"
          :src="logo"
        ></v-img>
      </v-col>
      <v-col
        cols="8"
        sm="7"
        md="8"
      >
        <v-tabs
          background-color="transparent"
          center-active
          right
        >
            <v-tab
                v-for="item in navItems"
                :key="item.label"
                class=""
            >
                <a :href="item.value" style="padding:15px 20px;">{{item.label}}</a>
            </v-tab>

        </v-tabs>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
import logo from '../assets/img/logo.png';

export default {
  name: 'NavBar',
  components: {
    
  },
  data: () => ({
    //
    logo: logo,
    navItems:[
        {
            label: "About Me",
            value: "#about"
        },
        {
            label: "Projects",
            value: "#project"
        },
        {
            label: "Portfolio",
            value: "#portfolio"
        },
        {
            label: "Contact Me",
            value: "#contact"
        }
    ]
  }),
}
</script>

<style>
.v-tab[aria-selected=false]{
    color:white !important;
  }
  .v-tab{
    padding: 0 !important;
  }

  .v-tab--active{
    color: #33DAFF !important;
    caret-color: #33DAFF !important;
  }
</style>