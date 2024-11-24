function Drawer({onClose, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-40">
          Корзина
          <img onClick={onClose} className="removeBtn cu-p" src="/react-gh-pages/Img/btn-remove.svg" alt="remove" />
        </h2>

        <div className="items flex">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="removeBtn" src="/react-gh-pages/Img/btn-remove.svg" alt="remove" />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/react-gh-pages/Img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;