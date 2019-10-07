<script>
export default {
    data: () => ({
        items: ['1','2','3','4'],
       levelLabels: [
        'Łatwy',
        'Średni',
        'Trudnawy'
      ],
      level:'0',
      category:''
    }),
    methods: {
      season (val) {
        return this.icons[val]
      },
    }


}


</script>

<template>
  <div id="optionsselect">
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
      :items="items"
      v-model="category"
      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
      
  </div>

</template>

<style lang="scss">

</style>