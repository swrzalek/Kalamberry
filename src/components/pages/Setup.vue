<script>
import OptionsSelect from '../shared/OptionsSelect'
import { mapActions } from 'vuex'
export default {
    components: {
        OptionsSelect
    },
    data: () => ({
        clicked : true,
        valid: false,
    }),
    methods: {
        ...mapActions(['pauseGame'])
    },
    created() {
      this.pauseGame();  
  }
}


</script>
  
<template>
  <div id="setup">
      <v-content>
      <v-container>
     <options-select ></options-select>     
      </v-container>
      </v-content>
  </div>

</template>

<style lang="scss">

</style>