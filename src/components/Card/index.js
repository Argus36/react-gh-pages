import cardStyle from "./Card.module.scss"; //Если без module то пустой обьект будет

console.log(cardStyle);

function Card(props) {
  /*
  const onClickButton = () => {
    alert(props.title);
  }
  */
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.favorite}>
        <img src="/react-gh-pages/Img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={props.onClick} >
          <img width={11} height={11} src="/react-gh-pages/Img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;