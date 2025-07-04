import styles from './renderlist4.module.css'

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  priceOld?: number;
  sale?: number;
};

type CardProps = {
  product: Product;
};

export default function index({ product }: CardProps) {
  return (
    <div>
        <div className={styles.card}>
            <div className={styles.cardImg}>
                {product.sale && <span className={styles.cardSale}>-{product.sale}%</span>}
                <img src={product.image} alt="" />
            </div>
            <div className={styles.cardContent}>{product.name}</div>
            <div className={styles.cardPrice}>{product.price}đ
              {product.priceOld && <span className={styles.cardPriceOld}>{product.priceOld}đ</span>}
            </div>
        </div>
    </div>
  )
}