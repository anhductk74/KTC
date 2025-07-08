import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import Navbar from '../../Components/NavBar';

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: Category;
};

type Category = {
  id: number;
  name: string;
  image: string;
  slug: string;
};

const HomePage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [productListLimit, setProductListLimit] = useState<Product[]>([]);
  const [limit] = useState(6);
  const [offset, setOffset] = useState(0);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('');
  const [totalPage, setTotalPage] = useState(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    setOffset((page - 1) * limit);
  };

  const handleCategory = (slug: string) => {
    setCategory(slug);
    console.log("category", category);
    setCurrentPage(1);
    setOffset(0);
  };

  // Fetch full product list
  useEffect(() => {
    const fetchProductList = async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await res.json();
      setProductList(data);
    };
    fetchProductList();
  }, []);

  // Fetch category list
  useEffect(() => {
    const fetchCategoryList = async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/categories');
      const data = await res.json();
      setCategoryList(data);
    };
    fetchCategoryList();
  }, []);

  // Filter + paginate product list
  useEffect(() => {
    const filtered = category
      ? productList.filter((p) => p.category.slug === category)
      : productList;

    const paginated = filtered.slice(offset, offset + limit);
    setProductListLimit(paginated);
    setTotalPage(Math.ceil(filtered.length / limit));
  }, [productList, offset, limit, category]);

  return (
    <div className={styles.container}>

      <div className={styles.session}>
        <div className={styles.fillter}>
          <h2>Bộ lọc</h2>
          <div className={styles.fillter_item}>
            {categoryList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.slug)}
                className={styles.fillterButton + ' ' + (cat.slug === category ? styles.activeCategory : '')}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.productContainer}>
          <h2>Danh sách sản phẩm</h2>
          <div className={styles.productList}>
            {productListLimit.map((product) => (
              <div className={styles.productItem} key={product.id}>
                <div className={styles.productItem_img}>
                  <img src={product.images[0]} alt={product.title} />
                </div>
                <div className={styles.productItem_name}>
                  <h3>{product.title}</h3>
                  <p>{product.price} $</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pagination}>
            {Array.from({ length: totalPage }, (_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index + 1)}
                className={currentPage === index + 1 ? styles.active : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
