import * as types from './constants';
import axios from 'axios';
import state from './state'
import { shuffleArray } from '../utils/utils';
const http = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
      },
    baseURL : 'http://127.0.0.1:3000/api',
})
export default {
    setLevel({commit}, level){
        commit('setLevel', level)
    },
    setSelectedCategories({commit}, selectedCategories){
        commit('setSelectedCategories', selectedCategories)
    },
    async fetchCategorizedWords({commit, state}) {
        return http.get('/chapters', {
            params: {
                difficulty: state.level,
                category: state.selectedCategories                
            } })
            .then((res) => {
                commit(types.SET_ALL_WORDS, res.data)
                commit(types.SET_LOADING_STATUS);
                return res.data;
            })
    },  
    async fetchAllWords({ commit }) {
        return http.get('/dictonary')
            .then((res) => {
                commit(types.SET_ALL_WORDS, res.data);              
                return res.data;
            });
    },
    async fetchAllCategories({ commit }) {
        return http.get('/category')
            .then((res) => {
                commit(types.SET_ALL_CATEGORIES, res.data);
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
            commit('incrementRound')
        }
    },
    prepareGame({commit, state}) {
        commit('resetGame');
       const StartDeck = state.allWords.map(i => i.word)

        commit('setVisibleCards', shuffleArray(StartDeck));
    },
    finishGame({commit}) {
        commit('setGameState', 'finished')
    },
    startGame({commit}) {
        commit('setGameState', 'playing')
    },
    
}