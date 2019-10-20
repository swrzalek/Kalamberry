
<template>
  <div id="home">
      <v-content>
          <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          > 
          <p class="text-center">Created by Sebastian Wrzałek</p> 
          <p class="text-center font-weight-bold">github.com/swrzalek</p>
          </v-flex>
        </v-layout>
        </v-container>         
      </v-content>
  </div>

</template>
<script>
export default {
    data: () => ({
        url: "https://github.com/swrzalek"
    }),
}
</script>

<style lang="scss">
</style>