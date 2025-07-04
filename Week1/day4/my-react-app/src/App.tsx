import Card from "./components/card";
import Renderlist4 from "./components/renderlist4";
import State1 from "./components/state1";
import State2 from "./components/state2";

import "./App.css";
function App() {
  const listProducts = [
    {
      id: 1,
      name: "Samsung Galaxy A32",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m334hc01ln1sc1@resize_w450_nl.webp",
      views: 140,
    },
    {
      id: 2,
      name: "Samsung Galaxy A32",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m334hc01ln1sc1@resize_w450_nl.webp",
      views: 140,
    },
    {
      id: 3,
      name: "Samsung Galaxy A32",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m334hc01ln1sc1@resize_w450_nl.webp",
      views: 140,
    },
    {
      id: 4,
      name: "iPhone 13 Pro Max",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m334hc01ln1sc1@resize_w450_nl.webp",
      views: 200,
    },
  ];
const listRender4 = [
    {
      id: 1,
      name: "Cáp chuyển đổi USB-C sang thẻ SD",
      image: "./image/airpod-3.png",
      price: 1200000,
      priceOld: 1500000,
      sale: 20, 
    },
    {
      id: 2,
      name: "Samsung Galaxy A32",
      image: "./image/Apple-USBC-To-SDCard-A.jpg",
      price: 1400000,
    },
    {
      id: 3,
      name: "Samsung Galaxy A32",
      image: "./image/airpod-3.png",
      price: 2100000,
      priceOld: 2500000,
      sale: 25,
    },
    {
      id: 4,
      name: "Samsung Galaxy A32",
      image: "./image/airpod-3.png",
      price: 1400000,
    },
    
  ];

  

  return (
    <>
    <h1>Bài 1</h1>
      <div className="header">
        <h1>TIN MỚI</h1>
        <p>Xem thêm</p>
      </div>
      <div className="container">
        {listProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

        <h1>Bài 2</h1>
      <div className="header">
        <h3>Phụ kiện tương thích</h3>
      </div>
      <div className="container">
        {listRender4.map((product) => (
          <Renderlist4 key={product.id} product={product} />
        ))}
      </div>

      <h1>state 1</h1>
        <State1 />

      <h1>state 2</h1>
        Chọn đánh giá của bạn: <State2 />

    </>
  );
}

export default App;
