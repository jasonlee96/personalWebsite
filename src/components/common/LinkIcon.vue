<template>
  <a :href="url" :title="title">
        <font-awesome-icon :icon="icon" />
    </a>
</template>

<script>
    import Vue from 'vue';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
    import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    library.add(faGithubSquare, faLinkedin, faCodeBranch)
    Vue.component('font-awesome-icon', FontAwesomeIcon)

    export default {
        name: 'LinkIcon',
        components: {
            
        },
        props: {
            title: String,
            icon: Array,
            url: String
        }
    }
    
</script>

<style>

</style>