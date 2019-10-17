<script>
import { mapState,
         mapActions }    from 'vuex';
import OptionsPlayButton from './OptionsPlayButton'
export default {
  components: {
    OptionsPlayButton,
  },
  data: () => ({
    levelLabels: [
      'Łatwy',
      'Średni',
      'Trudnawy' ],
    level:'0',
    category:[],
  }),
  methods: {
    ...mapActions(['fetchAllCategories','setSelectedCategories','setLevel']),
  },
  watch: {
    category: function(x) {
      this.setSelectedCategories(x);
    },
    level: function(l) {
      this.setLevel(l)
    },
  },
  computed: {
    ...mapState(['categories']),
  },
  created() {
      this.fetchAllCategories();  
  }
}
</script>
<template>
  <div id="optionsselect">
    <v-container 
      class="mt-12"
    >             
      <v-row
        class="justify-center"
      >  
        <v-col
        class="white elevation-2 rounded pa-4"
        md="8"
        lg="8"
        >
          <p>Poziom trudności: {{levelLabels[level]}}</p>
          <v-slider
            color="purple darken-2"
            track-color="purple lighten-5"
            v-model="level"
            :tick-labels="levelLabels"
            :max="2"
            step="1"
            ticks
            tick-size="4"
          ></v-slider>
          <v-select
            color="purple darken-2"
            background-color="purple lighten-5"
            item-color="purple darken-2"
            class="mt-8"
            :items="categories"
            v-model="category"
            label="Kategoria"
            dense
            chips
            outlined
            multiple
            required
           ></v-select>
           <options-play-button :valid="this.category.length > 0"></options-play-button>
         </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<style lang="scss">
  .rounded { 
     border-radius: 10px;
  }
</style>