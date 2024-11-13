function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-40">
            Корзина
            <img className="removeBtn cu-p" src="/react-gh-pages/Img/btn-remove.svg" alt="remove" />
          </h2>

          <div className="items flex">
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/react-gh-pages/Img/Sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/react-gh-pages/Img/btn-remove.svg" alt="remove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/react-gh-pages/Img/Sneakers/1.jpg)'}} className="cartItemImg"></div>
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

      <header className="header d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/react-gh-pages/Img/logo.png"  alt='icon'/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-6">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/react-gh-pages/Img/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/react-gh-pages/Img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/react-gh-pages/Img/search.svg" alt="Search" />
            <input placeholder="Поиск"/>
          </div>
        </div>
        <div className="d-flex justify-between">
          <div className="card">
            <div className="favorite">
              <img src="/react-gh-pages/Img/heart-liked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/react-gh-pages/Img/Sneakers/1.jpg" alt=""/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/react-gh-pages/Img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/react-gh-pages/Img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/react-gh-pages/Img/Sneakers/2.jpg" alt=""/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/react-gh-pages/Img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/react-gh-pages/Img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/react-gh-pages/Img/Sneakers/3.jpg" alt=""/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/react-gh-pages/Img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/react-gh-pages/Img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/react-gh-pages/Img/Sneakers/4.jpg" alt=""/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/react-gh-pages/Img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
