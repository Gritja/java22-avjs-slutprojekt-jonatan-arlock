import '../css/ItemInCart.css'
//som product fast i cart. klicka för att ta bort

export default function ItemInCart({description, title, stock, category, price, image}){
    function handleClick() {
        //remove item from list and update shopping cart
        //updateCart([]);
        //console.log('');
    } 

    return(
        <div onClick={() => handleClick()} className='itemincart'>
            <h2>{category}</h2>
            <h1>{title}</h1>
            <img src={image} />
            <h2>{description}</h2>
            <h2>{stock}</h2>
            <h2>{price}</h2>
        </div>
    )
}