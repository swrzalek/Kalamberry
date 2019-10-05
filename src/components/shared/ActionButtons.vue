<template>
    <div id="actionbuttons">
        <v-btn @click="correct" outlined x-large>NEXT</v-btn>
        <v-btn outlined x-large>RESET</v-btn>            
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
