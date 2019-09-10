<template>

    <v-container
            grid-list-md text-center
            class="grad-top"

    >
        <v-layout wrap>
            <v-flex xs12 >
                <div class="title font-weight-medium text-xs-left pl-2 pb-2 white--text">K A L A M B E R R Y <v-icon color="white">message</v-icon></div>

            </v-flex>
            <v-flex xs12 class="flex-card">
                <v-card dark color="secondary" class="rounded-card">
                    <v-flex pt-5>
                        <WordCard word="Home"></WordCard>
                    </v-flex>
                </v-card>
                <v-flex xs12 class="ma-auto">
                    <v-btn v-on:click="counter += 1">ClickME</v-btn>
                </v-flex>
            </v-flex>
            <v-flex class="mt-4 text-xs-left thin white--text">
                <p class="body-1">Poziom trudności</p>
                <v-slider
                        hint="poziom"
                        color="white"
                        v-model="level"
                        :tick-labels="levels"
                        :max="2"
                        step="1"
                        ticks="true"
                        tick-size="3"
                ></v-slider>
            </v-flex>
            <v-flex>
                <v-select
                        :items="categories"
                        label="Kategoria"
                        outlined
                ></v-select>
            </v-flex>




        </v-layout>
    </v-container>
</template>

<script>
    import WordCard from '../components/SimpleWordComponent'
    export default {
        name: "SimpleGame",
        components: {
            WordCard
        }
    }
</script>

<style scoped>
    .flex-card{
        padding:9px !important;
    }
    .rounded-card{
        border-radius:25px;
        min-height: 175px;
        background-color: rgb(0,0,0) !important; /* Fallback color */
        background-color: rgba(0,0,0, 0.4) !important;
    }
    .grad {
        background-image: linear-gradient(#5b63fb, #45e8ad);
    }
    .grad-top {
        background-image: linear-gradient(#603B9b, #603B9b);
        text-align: center !important
    }
</style>
