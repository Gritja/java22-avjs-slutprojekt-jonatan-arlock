import '../css/Product.css'
export default function Product({updateCart, currentCartItems, id, description, title, stock, category, price, image, updateTotal, currentTotal}){
    function handleClick() {
        //when clicked, check how many of these items exist in current cart items, then check against current stock
        const itemsWithId = currentCartItems.filter(c => c.id === id)
        //console.log(itemsWithId.length);
        if (itemsWithId.length < stock) {
        const itemId = {id, title, price, stock, category, price, image};

        //also add price to the total in cart
        updateCart([...currentCartItems, itemId]);
        updateTotal(currentTotal + price);
        } else {
            alert('no more items not in stock')
        }
    } 

    return(
        <div onClick={() => handleClick()} className='product'>
            <h2>{category}</h2>
            <h1>{title}</h1>
            <img src={image} />
            <h2>{description}</h2>
            <h2>In stock: {stock}</h2>
            <h2>Price: {price}</h2>
        </div>
    )
}