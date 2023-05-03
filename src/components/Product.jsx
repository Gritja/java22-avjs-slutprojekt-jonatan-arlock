import '../css/Product.css'
export default function Product({updateCart, currentCartItems, id, /*image,*/ description, title, stock, category, price, image}){
    function handleClick() {
        //if stock > 0
        const itemId = [id, title, price];
        updateCart([...currentCartItems, itemId]);
        console.log('added ' + id + ' to ' + currentCartItems.length + '');
    } 

    return(
        <div onClick={() => handleClick()} className='product'>
            <h2>{category}</h2>
            <h1>{title}</h1>
            <img>{image}</img>
            <h2>{description}</h2>
            <h2>{stock}</h2>
            <h2>{price}</h2>
        </div>
    )
}