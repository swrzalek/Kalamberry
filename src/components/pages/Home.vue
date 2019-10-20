<script>
export default {
    data: () => ({
        clicked : true,
    }),    
    computed: {
      textSize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'font-weight-black display-2 link'
          case 'sm': return 'font-weight-black display-4 link'
          case 'md': return 'font-weight-black display-4 link'
          case 'lg': return 'font-weight-black display-4 link'
          case 'xl': return 'font-weight-black display-4 link'
          default  : return 'font-weight-black display-4 link'
        }
    },
  },
}
</script>

<template>
  <div id="home">
    <v-content>
      <v-container 
        class="mt-5"
      >
        <v-flex
        >              
          <router-link  tag="p" to="/setup" v-bind:class="textSize" >KALAMBERRY</router-link>
          <router-link  tag="p" to="/about" v-bind:class="textSize" >ABOUT</router-link>
        </v-flex>         
      </v-container>
      </v-content>
  </div>

</template>

<style lang="scss">

.link {
  cursor: pointer;
}

.link:hover
{       	
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}
</style>