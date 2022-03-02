function get1offer(state,total){
    let list_price = [];

    if(state.cartCount > 0 & state.cartCount % 3 == 0){
        let countgift = state.cartCount / 3
        for (let item of state.cart) {
            list_price.push(Array(item.quantity).fill(Number(item.price)))
        }
        
        list_price = [].concat.apply([], list_price);
        
        const reducer = (accumulator, curr) => accumulator + curr;
        list_price = list_price.sort(function(a,b) { return parseFloat(a) - parseFloat(b) } )
        
        .slice(0, countgift).reduce(reducer)
        total -= list_price
    }
    return total
}

export {get1offer}