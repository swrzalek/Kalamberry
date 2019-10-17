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
                category: state.selectedCategories                
            } })
            .then((res) => {
                commit('setAllWords', res.data);
                commit('setLoadingStatus');
                return res.data;
            })
    },
    async fetchAllCategories({ commit }) {
        return http.get('/category')
            .then((res) => {
                commit('setAllCategories', res.data);
            }); 
    },
    loadNextCard({commit}){ 
        const remaingWords = 1;
         if(remaingWords) { 
            commit('pushWordToPlayed', state.visibleCards[0]);
        } 
    },
    nextRound({commit, dispatch}) {
        if(state.currentRound === 6) {
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
        commit('resetGame');
        const startDeck = state.allWords.map(i => i.word);
        commit('setVisibleCards', shuffleArray(startDeck));
    },
    finishGame({commit}) {
        commit('setGameState', 'finished');
    },
    startGame({commit}) {
        commit('setGameState', 'playing');
    },
    
}