import '../css/ShoppingCart.css';
import Product from './Product';

//hantera töm cart och köp product.price reduce

export default function ShoppingCart({setCart, setPage, purchaseItems, emptyCart, updateTotal, currentTotal, currentCartItems}){

    async function purchaseItems() {

        setCart([]);
        updateTotal(0);
        alert('Thank you for your purchase');
        setPage('shop');
    }

    function emptyCart() {
        setCart([]);
        setPage('shop');
        updateTotal(0);
    }

    //maybe the update total should happen when the item is clicked
    
        return (
            <div className='menu'>
                    <button onClick={() => purchaseItems()}>Purchase items</button>
                    <h1>Total charge: {currentTotal}</h1>
                    <button onClick={() => emptyCart()}>Empty shopping cart</button>
            </div>
        )
    }