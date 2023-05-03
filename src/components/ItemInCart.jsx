import '../css/ItemInCart.css'
//som product fast i cart. klicka för att ta bort

export default function ItemInCart({updateCart, currentCartItems, id, /*image,*/ name, stock, price}){
    function handleClick() {
        //remove item from list and update shopping cart
        //updateCart([]);
        //console.log('');
    } 

    return(
        <div onClick={() => handleClick()} className='itemincart'>
            <h2>{id}</h2>
            <h1>{name}</h1>
            <h2>{stock}</h2>
            <h2>{price}</h2>
        </div>
    )
}