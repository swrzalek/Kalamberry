<script>
export default {
    data: () => ({
        clicked : true,
    }),


}


</script>

<template>
  <div id="home">
      <v-scroll-x-transition>
      <v-container v-if="clicked">
          <v-flex >    
           <p @click="clicked = !clicked"  class="font-weight-black display-4">KALAMBURY</p>            
             <router-link  @click="clicked = !clicked" to="/setup" class="font-weight-black display-4" >PICASSO</router-link>
            <p class="font-weight-black display-4">ABOUT</p>
          </v-flex>         
      </v-container>
      </v-scroll-x-transition>
      <v-btn @click="clicked = !clicked">BUTTON</v-btn>
  </div>

</template>

<style lang="scss">

</style>