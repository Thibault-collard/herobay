<script>
    /* import the fontawesome core */
    import Vue from 'vue'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import Cart from './Cart'
    /* import specific icons */
    import {faSearch,faShoppingCart,faTrash } from '@fortawesome/free-solid-svg-icons'

    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    /* add icons to the library */
    library.add(faSearch,faShoppingCart,faTrash)

    /* add font awesome icon component */
    Vue.component('font-awesome-icon', FontAwesomeIcon)

    export default {
        name: 'Navbar',
        components: {
            Cart,
        },
        data(){
            return {
                showModal:false
            }
        },
        methods: {
            toggleCart () {
                this.showModal = !this.showModal;
            }
        }
    }
</script>
<template>
    <header class="section-header">
    <section class="header-main border-bottom">
        <div class="container">
            <div class="row align-items-center mb-3">
                <div class="col-lg-2 col-4">
                    <img src='@/assets/logo-herobay.png' class="logoherobay"/>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <form action="#" class="search">
                        <div class="input-group w-100">
                            <input type="text" class="form-control" placeholder="Search">
                            <div class="input-group-append">
                            <button class="btn btn-search" type="submit">
                                <font-awesome-icon icon="fa fa-search"/>
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section> 

    <div class="row">
        <div class="col-11">
            <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Criminals</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Brutes</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Animals</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Villains</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Superheroes</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Mutants</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Psychics</a>
                        </li>
                    </ul>
                    </div>
                </div> 
            </nav>
        </div>
        <div class="col cart-navbar" style="z-index:3">
            <span class="count mt-2 ms-3" @click="toggleCart()"> {{ $store.state.shopping_cart.cartCount }} </span>
            <a href="#" class="icon icon-sm" @click="toggleCart()"><font-awesome-icon class="mt-3" color="white" icon="fa fa-shopping-cart" size="lg"/></a>
        </div>
        <cart v-if="showModal" />
    </div>
        <div class="alert alert-secondary" style="padding: 0.5rem" role="alert"> TODAY SPECIAL OFFER : Hire your favorite superheroes for 2 hours and get 1 hour free !  </div>
    </header>
</template>
<style scoped>
    .logoherobay {
    width: 111px;
    margin-bottom:16px
    }
    .btn-search{
        color: #fff;
        background-color: #27007f;
    }
    .cart-navbar{
        background-color: #27007f;
    }
    
    .count{
        z-index: 2;
        font-size: 11px;
        border-radius: 50%;
        background: mediumvioletred;
        width: 16px;
        height: 16px;
        position:absolute;
        color: #fff;
        font-family: Roboto,sans-serif;
        font-weight: 700;
    }
</style>