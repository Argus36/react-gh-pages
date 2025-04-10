import {useEffect, useState} from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {


  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://67f6f24442d6c71cca63b1de.mockapi.io/items').then((response) => {
      return response.json();
    }).then((json) => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper">

      {cartOpened && <Drawer items={cartItems} onClickClose = {() => setCartOpened(false)}/>}

      <Header onClickOpenDrawer={() => setCartOpened(true)}/>

      <hr/>
      <div className="content">
        <div className="d-flex align-center justify-between mt-40 mb-40 p-10">
          <h2>Все кроссовки</h2>
          <div className="search-block">
            <img src="/react-gh-pages/Img/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="sneakers">

          {items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus = {() => {
                onAddToCart(item);
              }}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
