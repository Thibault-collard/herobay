(function(t){function a(a){for(var s,i,n=a[0],c=a[1],l=a[2],d=0,p=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==r[c]&&(s=!1)}s&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},r={app:0},o=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("27fb")},"0dee":function(t,a,e){},"1b7f":function(t,a,e){t.exports=e.p+"static/img/logo-herobay.d6a7409c.png"},"223a":function(t,a,e){"use strict";e("5f77")},"27fb":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("GridHeroes")],1)},o=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"section-header"},[e("section",{staticClass:"header-main border-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center mb-3"},[t._m(0),e("div",{staticClass:"col-lg-6 col-sm-12"},[e("form",{staticClass:"search",attrs:{action:"#"}},[e("div",{staticClass:"input-group w-100"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-search",attrs:{type:"submit"}},[e("font-awesome-icon",{attrs:{icon:"fa fa-search"}})],1)])])])])])])]),e("div",{staticClass:"row"},[t._m(1),e("div",{staticClass:"col cart-navbar",staticStyle:{"z-index":"3"}},[e("span",{staticClass:"count mt-2 ms-3",on:{click:function(a){return t.toggleCart()}}},[t._v(" "+t._s(t.$store.state.shopping_cart.cartCount)+" ")]),e("a",{staticClass:"icon icon-sm",attrs:{href:"#"},on:{click:function(a){return t.toggleCart()}}},[e("font-awesome-icon",{staticClass:"mt-3",attrs:{color:"white",icon:"fa fa-shopping-cart",size:"lg"}})],1)]),t.showModal?e("cart"):t._e()],1),e("div",{staticClass:"alert alert-secondary",staticStyle:{padding:"0.5rem"},attrs:{role:"alert"}},[t._v(" TODAY SPECIAL OFFER : Hire your favorite superheroes for 2 hours and get 1 hour free !  ")])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-2 col-4"},[s("img",{staticClass:"logoherobay",attrs:{src:e("1b7f")}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-11"},[e("nav",{staticClass:"navbar navbar-main navbar-expand-lg navbar-light border-bottom"},[e("div",{staticClass:"container"},[e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse"},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Criminals")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Brutes")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Animals")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Villains")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Superheroes")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Mutants")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Psychics")])])])])])])])}],c=e("ecee"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",staticStyle:{position:"absolute",left:"284px"}},[t.$store.state.shopping_cart.cart.length>0?e("div",[e("div",{staticClass:"shopping-cart",staticStyle:{"z-index":"2"}},[t._l(t.$store.state.shopping_cart.cart,(function(a){return e("a",{key:a.id,attrs:{href:""}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card p-3"},[e("div",{staticClass:"d-flex flex-row mb-3"},[e("img",{attrs:{width:"70",src:"https://res.cloudinary.com/dn8xazq0z/image/upload/v1646117130/herobay/"+a.img_1}}),e("div",{staticClass:"d-flex text-start flex-column ml-2 ms-3"},[e("div",[t._v(t._s(a.superhero)+"\n                                    "),e("font-awesome-icon",{staticClass:"mt-3",attrs:{color:"#C71585",icon:"fa fa-trash",size:"sm"},on:{click:function(e){return e.preventDefault(),t.removeFromCart(a)}}})],1),e("div",{staticClass:" text-black-50"},[t._v(" "+t._s(a.price)+" $/h\n                                    ")]),e("div",{staticClass:"d-inline w-30 mt-2"},[e("input",{attrs:{type:"button",value:"-"},on:{click:function(e){return e.preventDefault(),t.removeOneItem(a)}}}),t._v("\n                                        "+t._s(a.quantity)+"\n                                        "),e("input",{attrs:{type:"button",value:"+"},on:{click:function(e){return e.preventDefault(),t.addToCart(a)}}})])])])])])])])})),e("div",{staticClass:"shopping-cart-total"},[e("span",{staticClass:"lighter-text"},[t._v("Total:")]),e("span",{staticClass:"main-color-text"},[t._v(" "+t._s(t.totalPrice)+" $/hour")])]),e("hr",{staticClass:"navbar-divider"}),e("a",{staticClass:"btn-checkout",attrs:{href:"#"}},[t._v("Checkout")])],2)]):t._e()])},u=[],d={name:"Cart",data(){return{}},computed:{totalPrice(){return this.$store.state.shopping_cart.cartTotal}},methods:{removeFromCart(t){this.$store.commit("removeFromCart",t)},addToCart(t){this.$store.commit("addToCart",t)},removeOneItem(t){this.$store.commit("removeOneItem",t)}}},p=d,f=(e("223a"),e("2877")),m=Object(f["a"])(p,l,u,!1,null,null,null),v=m.exports,h=e("c074"),C=e("ad3d");c["c"].add(h["b"],h["c"],h["d"]),s["default"].component("font-awesome-icon",C["a"]);var g={name:"Navbar",components:{Cart:v},data(){return{showModal:!1}},methods:{toggleCart(){this.showModal=!this.showModal}}},b=g,_=(e("ca31"),Object(f["a"])(b,i,n,!1,null,"40027640",null)),y=_.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._l(t.list_heroes,(function(a){return e("div",{staticClass:"col-md-3 col-sm-6"},[e("div",{staticClass:"product-grid2"},[e("div",{staticClass:"product-image2"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"pic-1",attrs:{src:"https://res.cloudinary.com/dn8xazq0z/image/upload/v1646117130/herobay/"+a.img_1}}),e("img",{staticClass:"pic-2",attrs:{src:"https://res.cloudinary.com/dn8xazq0z/image/upload/v1646117130/herobay/"+a.img_2}}),e("ul",{staticClass:"social"},[e("li",[e("a",{attrs:{href:"#","data-tip":"Quick View"}},[e("font-awesome-icon",{attrs:{icon:"fa fa-eye"}})],1)]),e("li",[e("a",{attrs:{href:"#","data-tip":"Add to Cart"},on:{click:function(e){return t.addToCart(a)}}},[e("font-awesome-icon",{attrs:{icon:"fa fa-shopping-cart"}})],1)])])])]),e("div",{staticClass:"product-content"},[e("h3",{staticClass:"title"},[e("a",{attrs:{href:"#"}},[t._v(t._s(a.superhero))])]),e("span",{staticClass:"price"},[t._v(t._s(a.price)+" $/h")]),a.promo_perc?e("div",{staticClass:"badge-promo"},[t._v(" - "+t._s(a.promo_perc)+" % ")]):t._e()])])])})),e("div")],2)])},x=[],O=e("2f62");c["c"].add(h["a"],h["c"]),s["default"].component("font-awesome-icon",C["a"]);var k={name:"GridHeroes",data(){return{}},methods:{addToCart(t){this.$store.commit("addToCart",t)}},computed:{list_heroes(){return this.$store.state.list_heroes.list_heroes}},mounted(){return this.$store.dispatch("getHeroesList")}},T=k,S=(e("8611"),Object(f["a"])(T,w,x,!1,null,"92b84144",null)),$=S.exports,P={components:{Navbar:y,GridHeroes:$,Cart:v}},j=P,I=(e("034f"),Object(f["a"])(j,r,o,!1,null,null,null)),q=I.exports,N=e("8c4f");s["default"].use(N["a"]);var F=new N["a"]({routes:[]}),H=e("bc3a"),z=e.n(H),M=z.a.create({baseURL:"/api",timeout:5e3,headers:{"Content-Type":"application/json"}}),E={fetchHeroesList(){return M.get("all_heroes").then(t=>t.data)}};s["default"].use(O["a"]);const L={list_heroes:""},A={all_heroes:t=>t.list_heroes},D={getHeroesList({commit:t}){E.fetchHeroesList().then((function(a){t("setHeroesList",a)}))}},J={setHeroesList(t,a){for(let e of a)e.promo_perc&&(e.price=(e.price*(100-Number(e.promo_perc))/100).toFixed(2));t.list_heroes=a}};var G={state:L,getters:A,actions:D,mutations:J};function R(t,a){let e=[];if(t.cartCount>0&t.cartCount%3==0){let s=t.cartCount/3;for(let a of t.cart)e.push(Array(a.quantity).fill(Number(a.price)));e=[].concat.apply([],e);const r=(t,a)=>t+a;e=e.sort((function(t,a){return parseFloat(t)-parseFloat(a)})).slice(0,s).reduce(r),a-=e}return a}s["default"].use(O["a"]);let V=window.localStorage.getItem("cart"),B=window.localStorage.getItem("cartCount"),Q=window.localStorage.getItem("cartTotal");const U={cart:V?JSON.parse(V):[],cartCount:B?parseInt(B):0,cartTotal:Q?parseInt(Q):0},Y={addToCart(t,a){let e=t.cart.find(t=>t.superhero==a.superhero);e?(e.quantity++,e.totalPrice=e.quantity*e.price):(t.cart.push(a),s["default"].set(a,"quantity",1),s["default"].set(a,"totalPrice",a.price)),t.cartCount++,this.commit("saveCart")},saveCart(t){this.commit("getTotalPrice"),console.log(t),window.localStorage.setItem("cart",JSON.stringify(t.cart)),window.localStorage.setItem("cartCount",t.cartCount),window.localStorage.setItem("cartTotal",t.cartTotal)},removeFromCart(t,a){let e=t.cart.indexOf(a);if(e>-1){let a=t.cart[e];t.cartCount-=a.quantity,t.cart.splice(e,1)}this.commit("saveCart")},removeOneItem(t,a){let e=t.cart.indexOf(a);if(e>-1){let a=t.cart[e];t.cartCount--,a.quantity--,a.totalPrice=a.quantity*Number(a.price),0==a.quantity&&t.cart.splice(e,1)}this.commit("saveCart")},getTotalPrice(t){let a=0,e=!0;for(let s of t.cart)a+=Number(s.totalPrice);if(1==e&&(a=R(t,a)),a>0)return t.cartTotal=Number(a).toFixed(2),Number(a).toFixed(2)}};var K={state:U,mutations:Y};s["default"].use(O["a"]);const W=new O["a"].Store({modules:{list_heroes:G,shopping_cart:K}});e("f9e3"),e("2dd8");var X=e("5f5b"),Z=e("b1e0");s["default"].use(X["a"]),s["default"].use(Z["a"]),s["default"].config.productionTip=!1;const tt=new s["default"]({router:F,store:W,render:t=>t(q)});tt.$mount("#app")},"5f77":function(t,a,e){},8611:function(t,a,e){"use strict";e("0dee")},ca31:function(t,a,e){"use strict";e("d441")},d441:function(t,a,e){}});
//# sourceMappingURL=app.0376b5ae.js.map