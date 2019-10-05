
<template>
    <div id="wordloader">
        <word-component 
             v-for="(word, index) in wordsArray"
             :key="word"
             :is-current="index === 0"
            :card='word'></word-component>
     </div>
    
</template>

<script>
import WordComponent from './WordComponent'
import EventBus from '../../event-bus'
import {mapState, mapActions} from 'vuex';
    import * as types from '../../store/constants';
    export default {
        name: "WordLoader",
        components: {
            WordComponent,
        },
        data: () => ({
            wordsArray: [],

        }),
        mounted() {
            EventBus.$on(types.$GAME_CORRECT_ANSWER, this.correctAnswer)
        },
        beforeDestroy() {
             EventBus.$off(types.$GAME_CORRECT_ANSWER, this.correctAnswer);
        },
        computed: {
            currentWord() {
               return "Słowo";
            },
             ...mapState(['allWords','gameState']),
             
        },
        props: {
            cards: {
                type:Array,
                required: true,
            }
        },
        watch: {
            gameState(){               
                this.correctAnswer()
            }
        },
        methods: {
            addItem(){
                if(this.wordsArray.length === 0){
                    this.wordsArray.push(this.cards[0]) 
                 } else {
                     this.wordsArray.push(this.cards[0])
                     this.wordsArray.shift()
                 }

            },        
            correctAnswer() {
                this.$emit('correctAnswer')
                this.addItem();
            },
            ...mapActions(['pushWordToPlayed'])
        },
          
    }
</script>

<style scoped>

</style>
