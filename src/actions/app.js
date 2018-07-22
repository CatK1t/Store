export const getProductsAction = () => dispatch => 
{
    fetch("http://localhost:3006/products", {
        method:'GET'
    }).then((response) =>
    {
        return response.json()
    }).then((d) =>
    {
        dispatch({type:'SET_PRODUCTS', data:d})
    });
}