<template>

  <v-container
          grid-list-md text-center
          class="grad-top"

  >
    <v-layout wrap>
  
      <v-flex xs6 class="flex-card">
        <v-card dark color="secondary" class="rounded-card" to="/words">
          <v-flex pt-5>
            <v-icon medium>message</v-icon>
            <v-card-text class="px-0">Słowa</v-card-text>
          </v-flex>

        </v-card>
      </v-flex>
      <v-flex xs6 class="flex-card">
        <v-card dark color="secondary" class="rounded-card">
          <v-flex pt-5>
            <v-icon medium>brush</v-icon>
            <v-card-text class="px-0">Rysowanie</v-card-text>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex xs6 class="flex-card">
        <v-card dark color="secondary"  class="rounded-card">
          <v-flex pt-5>
            <v-icon medium color="grey">lock</v-icon>
            <v-card-text class="px-0" color="grey">Kalamberry</v-card-text>
          </v-flex>
        </v-card>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>


  export default {
    components: {

    }
  }
</script>
<style scoped>
  .flex-card{
    padding:9px !important;
  }
  .rounded-card{
    border-radius:25px;
    min-height: 175px;
    background-color: rgb(0,0,0) !important; /* Fallback color */
    background-color: rgba(0,0,0, 0.4) !important;
  }
  .grad {
    background-image: linear-gradient(#5b63fb, #45e8ad);
  }
  .grad-top {
    background-image: linear-gradient(#603B9b, #603B9b);
    text-align: center !important
  }
</style>
