<template>
    <div id="actionbuttons">
        <v-btn @click="correct" outlined mx-2 dark color="red lighten-1">
            <v-icon dark>mdi-chevron-right</v-icon>
         </v-btn>          
     </div>    
</template>

<script>
    import * as types from '../../store/constants';
    import EventBus from '../../event-bus'
    export default {
        name: "acctionbuttons",
        methods: {
            correct() {
                EventBus.$emit(types.$GAME_CORRECT_ANSWER);
            },                        
        },
        
    }
</script>

<style scoped>

</style>
