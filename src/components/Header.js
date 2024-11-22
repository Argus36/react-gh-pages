function Header(props) { // Функциональный компонент
  return (
    <header className="header d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/react-gh-pages/Img/logo.png" alt='icon' />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-6">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/react-gh-pages/Img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/react-gh-pages/Img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;