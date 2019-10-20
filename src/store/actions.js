import axios from 'axios';
import state from './state'
import { shuffleArray } from '../mixins/utils';
const http = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
      },
    baseURL : 'https://kalamberry-backend.herokuapp.com/api',
})
export default {

    async fetchCategorizedWords({commit, state}) {
        commit('setLoadingStatus', true)
        return http.get('/chapters', {
            params: {
                difficulty: state.level,
                category: state.selectedCategories.map(i => i.toLowerCase()),                
            } })
            .then((res) => {
                commit('setWordsFromCategories', res.data.map(i => i.word));
                if(res.data.length > 0) {
                    commit('setLoadingStatus', false)
                } 
                return res.data;
            })
    },
    async fetchAllCategories({ commit }) {
        return http.get('/category')
            .then((res) => {
                commit('setAllCategories', res.data.map(i => i.toUpperCase()));
            }); 
    },
    loadNextCard({commit, dispatch}){ 
        const { wordsFromCategories,
                playedCards,  
              } = state;
        

        const remaingWords = wordsFromCategories.filter(x => !playedCards.includes(x));
        const newVisibleWord = shuffleArray(remaingWords)[0]    
         if(playedCards.length < wordsFromCategories.length + 2) {             
            commit('pushWordToVisibleCards', newVisibleWord);
            commit('pushWordToPlayed', newVisibleWord);
        } else {
            dispatch('finishGame');
        }
    },
    nextRound({commit, dispatch}) {
        if(state.visibleCards.length === 0) {
            dispatch('finishGame');
        } else {
            commit('incrementRound');
        }
    },
    setLevel({commit}, level){
        commit('setLevel', level);
    },
    setSelectedCategories({commit}, selectedCategories){
        commit('setSelectedCategories', selectedCategories);
    },
    prepareGame({commit, state}) {
        const { wordsFromCategories } = state;
        const startDeck = shuffleArray(wordsFromCategories).splice(0,3);
        commit('resetGame');
        commit('setVisibleCards', startDeck);
        commit('pushWordToPlayed', startDeck)

    },
    finishGame({commit}) {
        commit('setGameState', 'finished');
    },
    startGame({commit}) {
        commit('setGameState', 'playing');
    },
    pauseGame({commit}) {
        commit('setGameState', 'pause');
    }
    
}