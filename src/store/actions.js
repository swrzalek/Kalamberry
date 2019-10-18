import axios from 'axios';
import state from './state'
import { shuffleArray } from '../mixins/utils';
const http = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
      },
    baseURL : 'http://127.0.0.1:3000/api',
})
export default {

    async fetchCategorizedWords({commit, state}) {
        return http.get('/chapters', {
            params: {
                difficulty: state.level,
                category: state.selectedCategories.map(i => i.toLowerCase()),                
            } })
            .then((res) => {
                commit('setWordsFromCategories', res.data.map(i => i.word));
                commit('setLoadingStatus');
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
                visibleCards 
              } = state;

        const remaingWords = wordsFromCategories.filter(x => !playedCards.includes(x));
        const newVisibleWord = shuffleArray(remaingWords)[0] 
        console.log(shuffleArray(remaingWords))     
         if(remaingWords.length > 0) { 
            commit('pushWordToPlayed', visibleCards[0]);
            commit('pushWordToVisibleCards', newVisibleWord);
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
        commit('resetGame');
        commit('setVisibleCards', shuffleArray(wordsFromCategories).splice(0,3));
    },
    finishGame({commit}) {
        commit('setGameState', 'finished');
    },
    startGame({commit}) {
        commit('setGameState', 'playing');
    },
    
}