<script>
import OptionsSelect from '../shared/OptionsSelect'
import {mapActions} from 'vuex'
export default {
    components: {
        OptionsSelect
    },
    data: () => ({
        clicked : true,
    }),
    methods: {
        ...mapActions(['fetchCategorizedWords']),
        tempMethod() {
            this.fetchCategorizedWords();
        }
    },


}


</script>
  
<template>
  <div id="setup">
      <v-container>
     <options-select></options-select>
     <div class="text-center">
         <v-btn outlined @click="$router.push('kalamberry'); tempMethod()">GRAJ</v-btn>
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