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
      <v-container>
     <options-select ></options-select>     
      </v-container>
  </div>

</template>

<style lang="scss">
    #setup {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        flex: 1 1 auto;
    }
</style>