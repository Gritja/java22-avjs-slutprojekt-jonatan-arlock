import '../css/Product.css'
export default function Product({updateCart, currentCartItems, id, description, title, stock, category, price, image}){
    function handleClick() {
        //if stock > 0
        const itemId = {id, title, price, stock, category, price, image};
        console.log(itemId);
        updateCart([...currentCartItems, itemId]);
        console.log('added ' + itemId);
    } 

    return(
        <div onClick={() => handleClick()} className='product'>
            <h2>{category}</h2>
            <h1>{title}</h1>
            <img src={image} />
            <h2>{description}</h2>
            <h2>{stock}</h2>
            <h2>{price}</h2>
        </div>
    )
}