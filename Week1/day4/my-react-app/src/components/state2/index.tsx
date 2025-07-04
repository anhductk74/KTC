import React from 'react';

type Props = {
  stars?: number;
};

export default function Rating({ stars = 0 }: Props) {
  const [rating, setRating] = React.useState(stars);

   const getRatingText = (rating: number): string => {
    if (rating >= 1 && rating <= 2) return 'Kém';
    if (rating >= 3 && rating <= 4) return 'Bình thường';
    if (rating === 5) return 'Tốt';
    return 'Chưa đánh giá';
  };

  const handleClick = (index: number) => {
    setRating(index);
    if(rating === index) {
      setRating(0); // Reset rating if the same star is clicked
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <span key={index} style={{ cursor: 'pointer', color: rating >= item ? 'orange' : 'gray' }} onClick={() => handleClick(item)}>
            ★
          </span>
        );
      })}
      <span>{getRatingText(rating)}</span>
      <p>Đánh giá của bạn: {rating}</p>
    </div>
  );
}
