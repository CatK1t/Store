const initState = {
    totalSum: 0,
    totalQuantity: 0,
    products: []
};

export default function cart(state = initState, action){
    switch (action.type)
    {
        case 'ADD_CART':

        let isUp = false;
        let newProducts = state.products.map((product)=>{
            if(product.id === action.data.id){
                isUp = true;
                return {
                    ...product,
                    quantity: product.quantity +1,
                    price: product.price + action.data.price
                }
            }
            return product;
           });

           if(!isUp){
            newProducts = [...state.products,{...action.data, quantity: 1}]
           }

        return{
            ...state,
            totalSum: state.totalSum + action.data.price,
            totalQuantity: state.totalQuantity + 1,
          products: newProducts
        }

        case 'DELETE_CART':

        

        let isUp1 = false;
        let removeProducts = state.products.map((product)=>{
            
            if(product.id === action.data.product.id && product.quantity > 1){
                isUp1 = true;
                return {
                    ...product,
                    quantity: product.quantity - 1,
                    price: product.price - action.data.product.price/action.data.product.quantity
                }
            }
            return product;
           });

           if(!isUp1){
            removeProducts = [
                ...state.products.slice(0, +action.data.key),
                ...state.products.slice(+action.data.key+1)
             ]
           }

        return{
            ...state,
            totalSum: state.totalSum - action.data.product.price/action.data.product.quantity,
            totalQuantity: state.totalQuantity - 1,
          products: removeProducts
        }

        default: return state;

    }
}