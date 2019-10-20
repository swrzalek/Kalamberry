
export default {
    setLoadingStatus(state, boolean) {
        state.isLoading = boolean;
    },
    setAllCategories(state, allCategories) {
        state.categories = allCategories;
    },
    setSelectedCategories(state, selectedCategories) {
        state.selectedCategories = selectedCategories;
    },
    setWordsFromCategories(state, words) {
        state.wordsFromCategories = words;
    },
    pushWordToVisibleCards(state, word) {
        state.visibleCards.push(word);
    },
    resetGame(state) {
        state.currentRound= 1;    
        state.playedCards=[];
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
        if(Array.isArray(word)) {
            state.playedCards = state.playedCards.concat(word);
        } else {
            state.playedCards.push(word);
            state.visibleCards.shift();
        }
       
    },
    setLevel(state,level) {
        state.level = level;
    },
    
    

}