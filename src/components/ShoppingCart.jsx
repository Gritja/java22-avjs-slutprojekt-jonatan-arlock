import '../css/ShoppingCart.css';

export default function ShoppingCart({setCart, setPage, purchaseItems, emptyCart, updateTotal, currentTotal, currentCartItems, itemsInStock}){

        async function purchaseItems(itemsInStock, currentCartItems) {
            
            //checks items in fetched stock versus the items in cart, if the id matches then decrease stock before updating database 
            itemsInStock.map((itemInStock) => {
                currentCartItems.map((currentCartItem) => {
                    if(itemInStock.id === currentCartItem.id)
                        itemInStock.stock--;
                })
                
            })

              fetch('https://avjs-shop-default-rtdb.europe-west1.firebasedatabase.app/.json', {
                method: "PUT",
                body: JSON.stringify(itemsInStock),
                headers: {
                    "Content-Type": "application/json",
                }
            });
        
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
                    <button onClick={() => purchaseItems(itemsInStock, currentCartItems)}>Purchase items</button>
                    <h1>Total charge: {currentTotal}</h1>
                    <button onClick={() => emptyCart()}>Empty shopping cart</button>
            </div>
        )
    }