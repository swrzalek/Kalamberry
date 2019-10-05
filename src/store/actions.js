import * as types from './constants';
import axios from 'axios';
import state from './state'
const http = axios.create({
    baseURL : 'http://127.0.0.1:3000/api',
})
export default {
    [types.INCREMENT]({commit}) {
        commit(types.INCREMENT);
    },
    [types.DECREMENT]({commit}) {
        commit(types.DECREMENT);
    },
    [types.RESET]({commit}) {
        commit(types.RESET);
    },
    async fetchAllWords({ commit }) {
        return http.get('/dictonary')
            .then((res) => {
                commit(types.SET_ALL_WORDS, res.data);
                commit(types.SET_LOADING_STATUS);               
                commit('setVisibleCards', state.allWords.map(i => i.word));
                return res.data;
            });
    },
    loadNextCard({commit}){
            const CurrentWords = state.allWords.map(i => i.word); 
            const remaingWords = 1;
         if(remaingWords) {          

            
            commit('pushWordToPlayed', CurrentWords[0]);
        } 
    },
    nextRound({commit}) {
        if(state.currentRound === 6) {
            dispatch('finishGame');
        } else {
            commit('incrementRound')
        }
    },
    prepareGame({commit, state}) {
        commit('resetGame');
        
    },
    finishGame({commit}) {
        commit('setGameState', 'finished')
    },
    startGame({commit}) {
        commit('setGameState', 'playing')
    }
}