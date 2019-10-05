import * as types from './constants';

export default {
    [types.INCREMENT](state) {
        state.count++;
    },
    [types.DECREMENT](state) {
        state.count--;
    },
    [types.RESET](state) {
        state.count = 0;
    },
    [types.SET_ALL_WORDS](state, allWords) {
        state.allWords = allWords;
    },
    [types.SET_LOADING_STATUS](state) {
        state.isLoading = !state.isLoading
    },
    pushWordToVisibleWord(state, word) {
        state.visibleWord = word;
    },
    resetGame(state) {
        state.currentRound=1;        
    },
    incrementRound(state) {
        state.currentRound += 1;
    },
    setGameState(state, gameState) {
        state.gameState = gameState
    },
    setVisibleCards(state, value) {
        state.visibleCards = value;
    },
    pushWordToPlayed(state, word) {
        state.playedCards.push(word);
        state.visibleCards.shift();
    }

}