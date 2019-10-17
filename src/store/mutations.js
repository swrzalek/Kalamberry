
export default {
    setAllWords(state, allWords) {
        state.allWords = allWords;
    },
    setLoadingStatus(state) {
        state.isLoading = !state.isLoading
    },
    setAllCategories(state, allCategories) {
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