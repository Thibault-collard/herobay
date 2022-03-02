import heroesService from '../../services/heroesService'
// import dependency to handle HTTP request to our back end

import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

const state = {
  list_heroes: ""
}

const getters = {
  all_heroes: state => {
    return state.list_heroes
  }
}

const actions = {
  getHeroesList ({ commit }) {
    heroesService.fetchHeroesList()
    .then(function(response) {
      commit('setHeroesList', response)
    })
  }
}

const mutations = {
  setHeroesList (state, list_heroes) {
    for (let heroes of list_heroes) {
      if(heroes.promo_perc){
        heroes.price = (heroes.price * (100 - Number(heroes.promo_perc))/100).toFixed(2)
      }
    }
    state.list_heroes = list_heroes
  } 
}

export default {
  state,
  getters,
  actions,
  mutations
}