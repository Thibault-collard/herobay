import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
let cartTotal = window.localStorage.getItem('cartTotal');

const state = {
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    cartTotal: cartTotal ? parseInt(cartTotal) : 0,
}

const mutations = {
    addToCart(state, item) {
        
        let found = state.cart.find(product => product.superhero == item.superhero);
        
        if (found) {
            found.quantity ++;
            found.totalPrice = found.quantity * found.price;
        } else {
            state.cart.push(item);
            Vue.set(item, 'quantity', 1);
            Vue.set(item, 'totalPrice', item.price);
        }
        state.cartCount++;
        this.commit('saveCart');
    },
    saveCart(state) {
        this.commit('getTotalPrice')
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
        window.localStorage.setItem('cartCount', state.cartCount);
        window.localStorage.setItem('cartTotal', state.cartTotal);
    },
    removeFromCart(state, item) {
        let index = state.cart.indexOf(item);
    
        if (index > -1) {
            let product = state.cart[index];
            state.cartCount -= product.quantity;
    
            state.cart.splice(index, 1);
        }
        this.commit('saveCart');
    },
    removeOneItem(state,item){
        
        let index = state.cart.indexOf(item);
    
        if (index > -1) {
            let product = state.cart[index];
            state.cartCount --;
            product.quantity --;
            product.totalPrice = product.quantity * Number(product.price);
            if(product.quantity == 0){
                state.cart.splice(index, 1);
            }
        }
        this.commit('saveCart');
    },getTotalPrice(state){
        let total = 0;
        for (let item of state.cart) {
            total += Number(item.totalPrice);
        }
        
        if (total > 0) {
            state.cartTotal = Number(total).toFixed(2);
            return Number(total).toFixed(2);
        }  
    }

}

export default {
    state,
    mutations
  }