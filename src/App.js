import React from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6743295db7464b1c2a63d633.mockapi.io/items').then(res => {
      return res.json();
    }).then((json) => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  console.log(cartItems);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose= {() => setCartOpened(false)} />}
      <Header onClickCart = {() => setCartOpened(true)}/> {/* Компонент */}
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src='/react-gh-pages/Img/search.svg' alt="Search" />
            <input placeholder="Поиск"/>
          </div>
        </div>
        <div className="d-grid">

          {items.map((item) => (
            <Card
              title = {item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite = {() => console.log(item)}
              onPlus = {(obj) => onAddToCart(obj)}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
