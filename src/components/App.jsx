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

    async function getProducts(){
        const res = await fetch('https://avjs-shop-default-rtdb.europe-west1.firebasedatabase.app/.json');
        console.log(res);
        const data = await res.json();

        if(Array.isArray(data)){
            console.log('success!');

            const newProducts = data.map(p => { return {
                //image: p.img.svg,
                category: p.id,
                description: p.name,
                id: p.stock,
                image: p.image,
                price: p.price,
                stock: p.stock,
                title: p.title
            }})
            
            setProducts(newProducts);
            //console.log (newDummyProduct);
        }





    }

    useEffect(()=> {
        getProducts();
    }, [])

    return (
        <>  
        <MenuBar setPage={setPage}></MenuBar>
        {onpage === 'shop' &&
            <div className='ProductList'>
                {products.map(product => <Product key={product.id} category={product.id} description={product.description} stoimageck={product.image} price={product.price} stock={product.stock} title={product.title} updateCart={setCart} currentCartItems={cart}/>)}
            </div>}
        {onpage === 'cart' &&
        <div className='ShoppingCart'>
                {cart.map(cart => <ItemInCart key={cart.id} id={cart.id} name={cart.name} stock={cart.stock} price={cart.price} updateCart={setCart} currentCartItems={cart}/>)}
                {/*total value*/}
        </div>}
        </>
    )
    }