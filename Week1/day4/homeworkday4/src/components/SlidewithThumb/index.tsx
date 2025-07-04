import React from "react";
import styles from "./slidewiththumb.module.css";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function index() {
  const listImg = [
    "https://nhannn87dn.github.io/react-app/block-ui-7-images/5.jpg",
    "https://nhannn87dn.github.io/react-app/block-ui-7-images/4.jpg",
    "https://nhannn87dn.github.io/react-app/block-ui-7-images/3.jpg",
    "https://nhannn87dn.github.io/react-app/block-ui-7-images/2.jpg",
    "https://nhannn87dn.github.io/react-app/block-ui-7-images/1.jpg",
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentImage = listImg[currentIndex];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listImg.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + listImg.length) % listImg.length
    );
  };

  return (
    <div>
      <h1>Slide with Thumb</h1>
      <div className={styles.container}>
        <div className={styles.slide}>
          <div
            className={styles.btn}
            onClick={currentIndex === 0 ? undefined : handlePrev}
          >
            <ChevronLeft />
          </div>
          <div className={styles.slideImg}>
            <img src={currentImage} alt="Slide" />
          </div>
          <div
            className={styles.btn}
            onClick={
              currentIndex === listImg.length - 1 ? undefined : handleNext
            }
          >
            <ChevronRight />
          </div>
        </div>
        <div className={styles.listImg}>
          {listImg.map((img, index) => (
            <div
              key={index}
              className={`${styles.listImgItem} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
