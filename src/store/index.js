import Vue from 'vue'
import Vuex from 'vuex'
import list_heroes from './modules/heroes_list'
import shopping_cart from './modules/shopping_cart'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    list_heroes,
    shopping_cart
  }
})

