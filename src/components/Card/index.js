import React from 'react';
import cardStyle from "./Card.module.scss"; //Если без module то пустой обьект будет

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.favorite} onClick={props.onFavorite}>
        <img src="/react-gh-pages/Img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img className={cardStyle.plus} onClick={onClickPlus} src={isAdded ?
        "/react-gh-pages/Img/btn-checked.svg"
        :
        "/react-gh-pages/Img/plus.svg"} alt="Plus" />
      </div>
    </div>
  );
}

export default Card;