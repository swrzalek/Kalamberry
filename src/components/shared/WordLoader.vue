<template>
    <div id="wordloader">
        <word-component 
          v-for="(word) in wordsArray"
          :key="word"
          :card='word'
          ></word-component>
     </div>    
</template>

<script>
import WordComponent from './WordComponent'
import EventBus from '../../event-bus'
import {mapState, 
        mapActions} from 'vuex';
import * as types from '../../store/constants';
const { GAME_CORRECT_ANSWER } = types;
export default {
    name: "WordLoader",
    components: {
        WordComponent,
    },
    data: () => ({
        wordsArray: [''],
    }),
    mounted() {
        EventBus.$on(GAME_CORRECT_ANSWER, this.correctAnswer)
    },
    beforeDestroy() {
        EventBus.$off(GAME_CORRECT_ANSWER, this.correctAnswer);
    },
    computed: {
        ...mapState(['gameState']),
        currentWord() {
            return "Słowo";
        },            
    },
    props: {
        cards: {
            type:Array,
            required: true,
        }
    },
    watch: {
        gameState(x){ 
            if(x === "playing") {
                this.loadFirstWord();
            }        
        }
    },
    methods: {
        ...mapActions(['pushWordToPlayed']),
        addItem(){
            if(this.wordsArray.length === 0) {
                this.wordsArray.push(this.cards[0]) 
            } else {
                this.wordsArray.push(this.cards[0])
                this.wordsArray.shift()
            }
        },
        loadFirstWord(){
            this.addItem();
        },       
        correctAnswer() {
            this.$emit('correctAnswer')
            this.addItem();
        },
    },        
}
</script>

<style scoped>

</style>
