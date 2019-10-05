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
     <options-select></options-select>
     <router-link  to="/kalamberry" class="font-weight-black display-4" >Next</router-link>
  </div>

</template>

<style lang="scss">

</style>