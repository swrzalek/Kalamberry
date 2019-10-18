<template>
<v-badge
    overlap
    bottom
    left
    color="teal">
      <template v-slot:badge>{{currentRound}}</template>
    <v-btn
      @click="correct"
      fab mx-2
      color="red accent-2"
    >
        <v-icon x-large color="white">mdi-chevron-right</v-icon>
    </v-btn>
</v-badge>  
</template>
<script>
    import { mapState } from 'vuex';
    import * as types from '../../store/constants';
    import EventBus from '../../event-bus'
    const { GAME_CORRECT_ANSWER } = types;
    export default {
        name: "acctionbuttons",
        methods: {
            correct() {
                EventBus.$emit(GAME_CORRECT_ANSWER);
            },                        
        },
        computed: {
            ...mapState(['currentRound']),
        }
        
    }
</script>

<style scoped>

</style>
