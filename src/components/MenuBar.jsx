import '../css/MenuBar.css'

export default function MenuBar({onpage, setPage}){

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
            <h2>Ye olde Webbe shoppe</h2>
                <button onClick={() => gotoShop()}>Products</button>
                <button onClick={() => gotoCart()}>Cart</button>
                {/*<h1 id='itemsincart'>Send from appjsx</h1>*/}
        </div>
    )
}