<template>
        <v-btn @click="correct" fab outline mx-2 dark color="black">
            <v-icon dark>mdi-chevron-right</v-icon>
         </v-btn>  
</template>

<script>
    import * as types from '../../store/constants';
    import EventBus from '../../event-bus'
    export default {
        name: "acctionbuttons",
        methods: {
            correct() {
                EventBus.$emit(types.GAME_CORRECT_ANSWER);
            },                        
        },
        
    }
</script>

<style scoped>

</style>
