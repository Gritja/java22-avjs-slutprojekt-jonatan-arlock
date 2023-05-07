import '../css/ItemInCart.css'

export default function ItemInCart({description, title, stock, category, price, image}){

    return(
        <div className='itemincart'>
            <h2>{category}</h2>
            <h1>{title}</h1>
            <img src={image} />
            <h2>{description}</h2>
            <h2>{stock}</h2>
            <h2>{price}</h2>
        </div>
    )
}