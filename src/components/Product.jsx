import '../css/Product.css'
export default function Product({updateCart, currentCartItems, id, /*image,*/ name, stock, price}){
    function handleClick() {
        //if stock > 0
        const itemId = [id, name, price];
        updateCart([...currentCartItems, itemId]);
        console.log('added ' + id + ' to ' + currentCartItems.length + '');
    } 

    return(
        <div onClick={() => handleClick()} className='product'>
            <h2>{id}</h2>
            <h1>{name}</h1>
            <h2>{stock}</h2>
            <h2>{price}</h2>
        </div>
    )
}