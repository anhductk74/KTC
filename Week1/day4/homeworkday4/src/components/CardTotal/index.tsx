import React from 'react'

const listCard = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for product 1',
    price: '$10.00',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for product 2',
    price: '$20.00',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for product 3',
    price: '$30.00',
    imageUrl: 'https://via.placeholder.com/150',
  },
]

type Product = {
  id: number
  title: string
  description: string
  price: string
  imageUrl: string
}

export default function Card() {
  const [cart, setCart] = React.useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
  }

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''))
    return total + price
  }, 0)

  return (
    <div>
      <h1>Product Card</h1>
      <div className="product-card">
        {listCard.map((product) => (
          <div key={product.id} className="product-card__item">
            <div className="product-card__image">
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className="product-card__details">
              <h2 className="product-card__title">{product.title}</h2>
              <p className="product-card__description">{product.description}</p>
              <p className="product-card__price">{product.price}</p>
              <button className="btn btn-primary" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        <div className="product-card__total">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}
