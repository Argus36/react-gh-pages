import React from 'react';
import cardStyle from "./Card.module.scss"; //Если без module то пустой обьект будет

function Card({ title, imageUrl, price, onFavorite,onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.favorite} onClick={onFavorite}>
        <img src="/react-gh-pages/Img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={cardStyle.plus} onClick={onClickPlus} src={isAdded ?
        "/react-gh-pages/Img/btn-checked.svg"
        :
        "/react-gh-pages/Img/btn-plus.svg"} alt="Plus" />
      </div>
    </div>
  );
}

export default Card;