<script>
import {mapState, mapActions} from 'vuex';
export default {
    data: () => ({
        items: ['1','2','3','4'],
       levelLabels: [
        'Łatwy',
        'Średni',
        'Trudnawy'
      ],
      level:'0',
      category:[],
    }),
    methods: {
      ...mapActions(['fetchAllCategories','setSelectedCategories','setLevel']),
    },
    watch: {
      category: function(x) {
        this.$store.commit('setSelectedCategories', x)

      },
      level: function(l) {
        this.$store.commit('setLevel', l)
      }
    },
      computed: {
        ...mapState(['categories'])
      },
      created() {
         this.fetchAllCategories();
      
      }
    }



</script>

<template>
  <div id="optionsselect">
    <v-container>
     <v-row>
       <p>Poziom trudności: {{levelLabels[level]}}</p>
    <v-col class="pa-12">
       <v-slider
        v-model="level"
        :tick-labels="levelLabels"
        :max="2"
        step="1"
        ticks
        tick-size="4"
      ></v-slider>
    </v-col>
  </v-row>
        <p>Kategoria: {{category}}</p>
        <v-select
      change="event"
      :items="categories"
      v-model="category"
      label="category"
      multiple
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
       </v-container>
  </div>

</template>

<style lang="scss">

</style>