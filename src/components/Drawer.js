function Drawer() {
  return (
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-40">
          Корзина
          <img className="removeBtn cu-p" src="/react-gh-pages/Img/btn-remove.svg" alt="remove" />
        </h2>

        <div className="items flex">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(/react-gh-pages/Img/Sneakers/1.jpg)' }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/react-gh-pages/Img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(/react-gh-pages/Img/Sneakers/1.jpg)' }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/react-gh-pages/Img/btn-remove.svg" alt="remove" />
          </div>
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