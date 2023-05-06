import '../css/App.css'
import '../css/ProductList.css'
import '../css/ShoppingCart.css'
import '../css/ItemInCart.css'
import ItemInCart from './ItemInCart'
import MenuBar from './MenuBar'
import Product from './Product'
import ShoppingCart from './ShoppingCart'
import { useEffect, useState } from 'react';

export default function App(){
    const [products, setProducts] = useState([]);
    const [onpage, setPage] = useState("shop");
    const [cart, setCart] = useState([]);
    const [itemTotal, setTotal] = useState(0);

    async function getProducts(){
        const res = await fetch('https://avjs-shop-default-rtdb.europe-west1.firebasedatabase.app/.json');
        const data = await res.json();
        console.log(data);
        if(Array.isArray(data)){
            console.log('success!');

            const newProducts = data.map(p => { return {
                //image: p.img.svg,
                category: p.category,
                description: p.name,
                id: p.id,
                image: p.image,
                price: p.price,
                stock: p.stock,
                title: p.title
            }})
            
            setProducts(newProducts);
            //console.log (newDummyProduct);
        } else
        console.log('is not array?')

    }

    useEffect(()=> {
        getProducts();
    }, [])

    return (
        <>  
        <MenuBar setPage={setPage} amountInCart={cart.length}/>
        {onpage === 'shop' &&
            <div className='ProductList'>
                {products.map(product => <Product id={product.id} category={product.category} description={product.description} 
                image={product.image} price={product.price} stock={product.stock} title={product.title} updateCart={setCart} 
                currentCartItems={cart} updateTotal={setTotal} currentTotal={itemTotal}/>)}
            </div>}
        {onpage === 'cart' &&
        <div className='ShoppingCart'>
                {cart.map(itemInCart => 
                <ItemInCart id={itemInCart.id} category={itemInCart.category} description={itemInCart.description} image={itemInCart.image} price={itemInCart.price} stock={itemInCart.stock} title={itemInCart.title} 
                updateCart={setCart} currentCartItems={cart}/>)}
        <ShoppingCart setPage={setPage} setCart={setCart} updateTotal={setTotal} currentTotal={itemTotal}
         currentCartItems={cart} itemsInStock={products}></ShoppingCart>
        </div>}
        </>
    )
    }