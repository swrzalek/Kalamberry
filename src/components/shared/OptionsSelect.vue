<script>
export default {
    data: () => ({
        items: ['1','2','3','4']
    }),


}


</script>

<template>
  <div id="optionsselect">
     <v-container>
       <v-flex class="mt-4 text-xs-left thin black--text">
                <p class="body-1">Poziom trudności</p>
                <v-slider
                        hint="poziom"
                        color="black"
                        :max="2"
                        step="1"
                        tick-size="3"
                ></v-slider>
            </v-flex>

        <v-select
      :items="items"

      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
      <v-col cols="12">
        <v-subheader class="pl-0">Always show thumb label</v-subheader>
        <v-slider
          thumb-label="always"
        ></v-slider>
      </v-col>
     </v-container>
  </div>

</template>

<style lang="scss">

</style>