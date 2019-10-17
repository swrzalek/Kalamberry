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
      <v-container 
        class="mt-5"
      >
        <v-flex
        >              
          <router-link  tag="p" to="/setup" v-bind:class="textSize" >KALAMBERRY</router-link>
          <p v-bind:class="textSize">ABOUT</p>
        </v-flex>         
      </v-container>
  </div>

</template>

<style lang="scss">
#home {
	width: 100%;
	height: 100vh;
	font-family: "Exo", sans-serif;
	color: #fff;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.link {
  cursor: pointer;
}

.link:hover
{       	
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}
</style>