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
        const res = await fetch('https://avjs-shop-default-rtdb.europe-west1.firebasedatabase.app/', {header: Access-Control-Allow-Origin});
        const data = await res.json();

        if(Array.isArray(data)){
            //circumvent same origin policy with CORS-header?
            console.log('success!');
        }
        const dummyProduct = [{
            //image: p.img.svg,
            name: "product1",
            stock: 5,
            price: "100",
            id: "01"
        },
        {
            //image: p.img.svg,
            name: "product2",
            stock: 0,
            price: "200",
            id: "02"
        },
        {
            //image: p.img.svg,
            name: "product3",
            stock: 5,
            price: "300",
            id: "03"
        },
        {
            //image: p.img.svg,
            name: "product4",
            stock: 5,
            price: "400",
            id: "04"
        }]

        const newDummyProduct = dummyProduct.map(p => { return {
            //image: p.img.svg,
            id: p.id,
            name: p.name,
            stock: p.stock,
            price: p.price

        }})


        setProducts(newDummyProduct);
        //console.log (newDummyProduct);
    }

    useEffect(()=> {
        getProducts();
    }, [])

    return (
        <>  
        <MenuBar setPage={setPage}></MenuBar>
        {onpage === 'shop' &&
            <div className='ProductList'>
                {products.map(product => <Product key={product.id} id={product.id} name={product.name} stock={product.stock} price={product.price} updateCart={setCart} currentCartItems={cart}/>)}
            </div>}
        {onpage === 'cart' &&
        <div className='ShoppingCart'>
                {cart.map(cart => <ItemInCart key={cart.id} id={cart.id} name={cart.name} stock={cart.stock} price={cart.price} updateCart={setCart} currentCartItems={cart}/>)}
                {/*total value*/}
        </div>}
        </>
    )
    }