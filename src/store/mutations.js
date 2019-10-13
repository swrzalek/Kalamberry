import * as types from './constants';


export default {
    [types.SET_ALL_WORDS](state, allWords) {
        state.allWords = allWords;
    },
    [types.SET_LOADING_STATUS](state) {
        state.isLoading = !state.isLoading
    },
    [types.SET_ALL_CATEGORIES](state, allCategories) {
        state.categories = allCategories;
    },
    setSelectedCategories(state, selectedCategories) {
        state.selectedCategories = selectedCategories;
    },
    setWordsFromCategories(state, words) {
        state.setWordsFromCategories = words;
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
    },
    setLevel(state,level) {
        state.level = level;
    },
    

}