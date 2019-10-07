<script>
import OptionsSelect from '../shared/OptionsSelect'
export default {
    components: {
        OptionsSelect
    },
    data: () => ({
        clicked : true,
    }),


}


</script>
  
<template>
  <div id="setup">
      <v-container>
     <options-select></options-select>
     <div class="text-center">
         <router-link  to="/kalamberry" tag="btn" class="font-weight-black display-2" >next</router-link>
     </div>
      </v-container>
  </div>

</template>

<style lang="scss">
    #setup {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        flex: 1 1 auto;
    }
</style>