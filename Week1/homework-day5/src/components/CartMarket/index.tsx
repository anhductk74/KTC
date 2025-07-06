import React from "react";
import styles from "./CartMarket.module.css";
import { Plus, Minus } from "lucide-react";

const listProducts = [
  {
    id: 1,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/329133/TimerThumb/honor-200-12gb-256gb-(78).jpg",
    title: "Điện thoại HONOR 200 5G 12GB/256GB",
    price: 10260000,
  },
  {
    id: 2,
    image:
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330075/dell-inspiron-15-3520-i5-n3520-i5u085w11slu-thumb-638760094038090008-600x600.jpg",
    title: "Laptop Dell Inspiron 15 3520 i5 1235U/8GB/512GB/120Hz",
    price: 13690000,
  },
  {
    id: 3,
    image:
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/333078/loa-bluetooth-rezo-go-more-1-171224-105740-053-600x600.jpg",
    title: "Loa Bluetooth Rezo Go More 1",
    price: 445000,
  },
  {
    id: 4,
    image:
      "https://cdn.tgdd.vn/Products/Images/5697/338142/TimerThumb/asus-va249hg-r-23-8-inch-fhd-ips-120hz-1ms.jpg",
    title: "Màn hình Asus VA249HG-R 23.8 inch FHD/IPS/120Hz/1ms",
    price: 2290000,
  },
  {
    id: 5,
    image:
      "https://cdn.tgdd.vn/Products/Images/58/251876/cap-type-c-2m-ava-ds08c-white-1-660x600.jpg",
    title: "Cáp Type C 2m AVA+ DS08C",
    price: 115000,
  },
];
type Carts = {
  product: Products;
  qty: number;
};
type Products = {
  id: number;
  image: string;
  title: string;
  price: number;
};

export default function CartMarket() {
  const [cart, setCart] = React.useState<Carts[]>([]);

  const addToCart = (product: Products) => {
    setCart((prev) => [...prev, { product, qty: 1 }]);
  };

  const foundItem = (product: Products) => {
    return cart.find((item) => item.product.id === product.id);
  };

  const cartTotal = cart.reduce((total, item) => {
  return total + item.qty * item.product.price;
}, 0);

  const increaseQty = (productId: number) => {
  setCart(prev =>
    prev.map(item =>
      item.product.id === productId
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  )
}

  const reduceQty = (productId: number) => {
    setCart(prev => 
      prev.map(item =>
        item.product.id === productId
        ? { ...item, qty: item.qty - 1 }
        : item
      )
    )
  }

  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.logo}>Big Market</div>
            <div className={styles.category}>
              <button>Danh muc san pham</button>
            </div>
            <div className={styles.searchInp}>
              <input type="text" name="" id="" />
            </div>
            <div
              className={styles.cartIcon}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Giỏ hàng
              {isHovered && (
                <div className={styles.hoverContent}>
                  {cart.length != 0
                    ? cart.map((item, index) => (
                        <div key={index} className={styles.cartItem}>
                          <img src={item.product.image} alt="" />
                          <div className={styles.cartItemTitle}>
                            {item.product.title}
                          </div>
                          <div>
                            {item.qty} x {item.product.price.toLocaleString('vi-VN')} đ
                          </div>
                        </div>
                      ))
                    : "Chưa có sản phẩm nào được thêm vào giỏ hàng"}
                  <hr />
                  <div className={styles.cartTotal}>
                    <div>Tổng Cộng: </div>
                    <div className={styles.total}>{cartTotal.toLocaleString('vi-VN')} đ</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.session}>
          {listProducts.map((product, index) => (
            <div className={styles.cart} key={index}>
              <div className={styles.cartImg}>
                <img src={product.image} alt="" />
              </div>
              <div className={styles.cartTitle}>{product.title}</div>
              <div className={styles.cartPrice}>{product.price.toLocaleString('vi-VN')}₫</div>

              <div className={styles.cartAdd}>
                {foundItem(product) ? (
                  <>
                    <button onClick={()=>reduceQty(product.id)}>
                      <Minus />
                    </button>
                    <span>{foundItem(product)?.qty}</span>
                    <button onClick={()=>increaseQty(product.id)}>
                      <Plus />
                    </button>
                  </>
                ) : (
                  <button
                    className={styles.btnAdd}
                    onClick={() => addToCart(product)}
                  >
                    Thêm vào giỏ hàng
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
