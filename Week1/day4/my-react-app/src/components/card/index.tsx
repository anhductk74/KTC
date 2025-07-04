import styles from './card.module.css'

type Product = {
  id: number;
  name: string;
  image: string;
  views: number;
};

type CardProps = {
  product: Product;
};

export default function index({ product }: CardProps) {
  return (
    <div>
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img src={product.image} alt="" />
            </div>
            <div className={styles.cardContent}>Ấn tượng đầu tiên {product.name}: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz</div>
            <div className={styles.cardView}>{product.views} view</div>
        </div>
    </div>
  )
}