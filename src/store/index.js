import Vue from 'vue'
import Vuex from 'vuex'
import list_heroes from './modules/heroes_list'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    list_heroes
  }
})

