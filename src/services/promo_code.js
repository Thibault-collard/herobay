function get1offer(state,total){
    let list_price = [];

    if(state.cartCount > 2){
        let countgift = Math.floor(state.cartCount / 3)
        console.log(countgift)
        for (let item of state.cart) {
            list_price.push(Array(item.quantity).fill(Number(item.price)))
        }
        
        list_price = [].concat.apply([], list_price);
        console.log(list_price)
        const reducer = (accumulator, curr) => accumulator + curr;


        list_price = list_price.sort(function(a,b) { return parseFloat(a) - parseFloat(b) } )
        
        .slice(0, countgift).reduce(reducer)
        total -= list_price
    }
    return total
}

export {get1offer}