const initState = {products:[]};

export default function app(state = initState, action){
    
    switch (action.type){
        case 'SET_PRODUCTS':

        return{
            ...state,
            products:[...action.data]
        }

        default: return state;

    }
}