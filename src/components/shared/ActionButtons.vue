<template>
    <v-btn
      @click="correct"
      fab mx-2
      color="red accent-2"
    >
        <v-icon x-large color="white">mdi-chevron-right</v-icon>
    </v-btn>  
</template>
<script>
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
        
    }
</script>

<style scoped>

</style>
