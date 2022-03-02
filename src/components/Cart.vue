<script> 

    export default {
        name: "Cart",
        data() {
            return {
            };
        },
        computed: {
            totalPrice() {
                return this.$store.state.shopping_cart.cartTotal
            }
        },
        methods:{
            removeFromCart(item) {
                this.$store.commit('removeFromCart', item);
            },
            addToCart(item) {
                this.$store.commit('addToCart', item);
            },
            removeOneItem(item){
                this.$store.commit('removeOneItem', item);
            }
        }
    };
</script>
<template>
    <div class="container" style="position:absolute;left: 284px;">
        <div v-if="$store.state.shopping_cart.cart.length > 0">
            <div class="shopping-cart" style="z-index:2">
                <a v-for="heroes in $store.state.shopping_cart.cart"
                    :key="heroes.id"
                    href="">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card p-3">
                                <div class="d-flex flex-row mb-3"> 
                                    <img width="70" v-bind:src="'https://res.cloudinary.com/dn8xazq0z/image/upload/v1646117130/herobay/' + heroes.img_1" />     
                                        <div class="d-flex text-start flex-column ml-2 ms-3">
                                        <div>{{heroes.superhero}}
                                        <font-awesome-icon class="mt-3" @click.prevent="removeFromCart(heroes)" color="#C71585" icon="fa fa-trash" size="sm"/>
                                        </div>
                                        <div class=" text-black-50"> {{heroes.price}} $/h
                                        </div> 
                                        <div class="d-inline w-30 mt-2">
                                            <input type="button" value="-" @click.prevent="removeOneItem(heroes)">
                                            {{heroes.quantity}}
                                            <input type="button" value="+" @click.prevent="addToCart(heroes)">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="shopping-cart-total">
                    <span class="lighter-text">Total:</span>
                    <span class="main-color-text"> {{ totalPrice }} $/hour</span>
                </div>  
                <hr class="navbar-divider">

                <a href="#" class="btn-checkout">Checkout</a>
            </div>
        </div>
    </div>
</template>
<style>
    a {
        color: black;
        text-decoration: none;
        border: none;
    }
    a:hover {
        color:black; 
        text-decoration:none; 
        cursor:pointer;  
    }
    .lighter-text {
        color: #ABB0BE;
    }
    .container {
        width: 80%;
    }

    .shopping-cart {
        margin: 74px 0 46px 0;
        float: right;
        background: #e7eaf1;
        width: 320px;
        position: relative;
        border-radius: 3px;
        padding: 20px;
    }
        
    .shopping-cart-total {
        margin-top:10px;
    }
    
    .shopping-cart-items {
        
        list-style-type: none;
        padding-top: 20px;

    }

    .shopping-cart:after {
        bottom: 100%;
        left: 89%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-bottom-color: #e7eaf1;
        border-width: 8px;
        margin-left: -8px;
    }

    .btn-checkout {
        background-color: #27007f;
        color: white;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        display: block;
        border-radius: 3px;
        font-size: 18px;
        margin: 25px 0 15px 0;
        font-weight: bold;
        
    }
</style>