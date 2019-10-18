<script>
import OptionsSelect from '../shared/OptionsSelect'
export default {
    components: {
        OptionsSelect
    },
    data: () => ({
        clicked : true,
        valid: false,
    }),
    methods: {
       
    },
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