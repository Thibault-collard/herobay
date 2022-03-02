<template>
    <div class="container">
        <div class="row">
            <div v-for='hr in list_heroes' class="col-md-3 col-sm-6">
                <div class="product-grid2">
                    <div class="product-image2"> <a href="#">
                    <img class="pic-1" v-bind:src="'https://res.cloudinary.com/dn8xazq0z/image/upload/v1646117130/herobay/' + hr.img_1" /> 
                    <img class="pic-2" v-bind:src="'https://res.cloudinary.com/dn8xazq0z/image/upload/v1646117130/herobay/' + hr.img_2" />     
                        <ul class="social">
                            <li><a href="#" data-tip="Quick View"><font-awesome-icon icon="fa fa-eye"/></a></li>
                            <li><a href="#" @click="addToCart(hr)" data-tip="Add to Cart"><font-awesome-icon icon="fa fa-shopping-cart"/></a></li>
                        </ul>
                    </div>
                    <div class="product-content">
                        <h3 class="title"><a href="#">{{hr.superhero}}</a></h3> <span class="price">{{hr.price}} $/h</span>
                        <div class="badge-promo" v-if="hr.promo_perc"> - {{hr.promo_perc}} % </div> 
                    </div>
                </div>
            </div>
            <div >
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    /* import the fontawesome core */
    import { library } from '@fortawesome/fontawesome-svg-core'

    /* import specific icons */
    import {faEye,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    /* add icons to the library */
    library.add(faEye,faShoppingCart)

    /* add font awesome icon component */
    Vue.component('font-awesome-icon', FontAwesomeIcon)

    import { mapState, mapActions } from 'vuex'

    export default {
        name: "GridHeroes",
        data() {
            return {
            };
        },
        methods: {
            addToCart(item) {
                this.$store.commit('addToCart', item);
            }
        },
        computed: {
            list_heroes() {
                return this.$store.state.list_heroes.list_heroes
            }
        },
        mounted() {
            return this.$store.dispatch("getHeroesList");
        }
    };
</script>

<style scoped>
    .container {
        margin-top: 50px
    }
    .badge-promo{
        background-color: #c71585;
        border-radius: 10px;
        color: white;
        display: inline-block;
        font-size: 12px;
        line-height: 1;
        padding: 3px 7px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        width: 20%;
        margin-left:10px;
        font-weight: bold;
    }
    h3.h3 {
        text-align: center;
        margin: 1em;
        text-transform: capitalize;
        font-size: 1.7em
    }

    .demo {
        padding: 45px 0
    }

    .product-grid2 {
        font-family: 'Open Sans', sans-serif;
        position: relative
    }

    .product-grid2 .product-image2 {
        overflow: hidden;
        position: relative
    }

    .product-grid2 .product-image2 a {
        display: block
    }

    .product-grid2 .product-image2 img {
        width: 100%;
        height: 350px;
    }

    .product-image2 .pic-1 {
        opacity: 1;
        transition: all .5s
    }

    .product-grid2:hover .product-image2 .pic-1 {
        opacity: 0
    }

    .product-image2 .pic-2 {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .5s
    }

    .product-grid2:hover .product-image2 .pic-2 {
        opacity: 1
    }

    .product-grid2 .social {
        padding: 0;
        margin: 0;
        position: absolute;
        bottom: 50px;
        right: 25px;
        z-index: 1
    }

    .product-grid2 .social li {
        margin: 0 0 10px;
        display: block;
        transform: translateX(100px);
        transition: all .5s
    }

    .product-grid2:hover .social li {
        transform: translateX(0)
    }

    .product-grid2:hover .social li:nth-child(2) {
        transition-delay: .15s
    }

    .product-grid2:hover .social li:nth-child(3) {
        transition-delay: .25s
    }

    .product-grid2 .social li a {
        color: #505050;
        background-color: #fff;
        font-size: 17px;
        line-height: 45px;
        text-align: center;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        display: block;
        transition: all .3s ease 0s
    }

    .product-grid2 .social li a:hover {
        color: #fff;
        background-color: #27007f;
        box-shadow: 0 0 10px rgba(0, 0, 0, .5)
    }

    .product-grid2 .social li a:after,
    .product-grid2 .social li a:before {
        content: attr(data-tip);
        color: #fff;
        background-color: #000;
        font-size: 12px;
        line-height: 22px;
        border-radius: 3px;
        padding: 0 5px;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(-50%);
        position: absolute;
        left: 50%;
        top: -30px
    }

    .product-grid2 .social li a:after {
        content: '';
        height: 15px;
        width: 15px;
        border-radius: 0;
        transform: translateX(-50%) rotate(45deg);
        top: -22px;
        z-index: -1
    }

    .product-grid2 .social li a:hover:after,
    .product-grid2 .social li a:hover:before {
        opacity: 1
    }

    .product-grid2 .add-to-cart {
        color: #fff;
        background-color: #404040;
        font-size: 15px;
        text-align: center;
        width: 100%;
        padding: 10px 0;
        display: block;
        position: absolute;
        left: 0;
        bottom: -100%;
        transition: all .3s
    }

    .product-grid2 .add-to-cart:hover {
        background-color: #3498db;
        text-decoration: none
    }

    .product-grid2:hover .add-to-cart {
        bottom: 0
    }

    .product-grid2 .product-new-label {
        background-color: #3498db;
        color: #27007f;
        font-size: 17px;
        padding: 5px 10px;
        position: absolute;
        right: 0;
        top: 0;
        transition: all .3s
    }

    .product-grid2:hover .product-new-label {
        opacity: 0
    }

    .product-grid2 .product-content {
        padding: 20px 10px;
        text-align: center
    }

    .product-grid2 .title {
        font-size: 17px;
        margin: 0 0 7px
    }

    .product-grid2 .title a {
        color: #303030
    }

    .product-grid2 .title a:hover {
        color: #3498db
    }

    .product-grid2 .price {
        color: #303030;
        font-size: 15px
    }

    @media screen and (max-width:990px) {
        .product-grid2 {
            margin-bottom: 30px
        }
    }
</style>