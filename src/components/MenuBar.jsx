import '../css/MenuBar.css'

export default function MenuBar({onpage, setPage, amountInCart}){

function gotoShop() {
    setPage("shop")
    console.log('go to shop');
}

function gotoCart() {
    setPage("cart")
    console.log('go to cart');
}

    return (
        <div className='menu'>
            <h1>Ye olde Webbe shoppe</h1>
                <button onClick={() => gotoShop()}>Products</button>
                <button onClick={() => gotoCart()}>Cart</button>
                <h1>Items in cart: {amountInCart}</h1>
        </div>
    )
}