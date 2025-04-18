import {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://67f6f24442d6c71cca63b1de.mockapi.io/items').then((res) => {
      setItems(res.data);
    }).catch((err) => {
      alert('Ошибка при загрузке товаров');
    });

    axios.get(`https://67f6f24442d6c71cca63b1de.mockapi.io/items?isAdded=true`)
    .then((res) => {
      setCartItems(res.data);
    })
    .catch(() => {
      return;
    });

    axios.get(`https://67f6f24442d6c71cca63b1de.mockapi.io/items?inFavorite=true`).then((res) => {
      setFavorites(res.data);
    }).catch(() => {
      return;
    });

  }, []);

  /* Возможный способ обновления данных
  const update = () => {
    axios.get('https://67f6f24442d6c71cca63b1de.mockapi.io/items').then((res) => {
      setItems(res.data);
    });

    axios.get(`https://67f6f24442d6c71cca63b1de.mockapi.io/items?isAdded=true`)
    .then((res) => {
      setCartItems(res.data);
    })
    .catch(() => {
      setCartItems([]);
    });

    axios.get(`https://67f6f24442d6c71cca63b1de.mockapi.io/items?inFavorite=true`)
    .then((res) => {
      setFavorites(res.data);
    })
    .catch(() => {
      setFavorites([]);
    });
  }
  */

  //onPlus - добавление в корзину
  const onAddCart = (id) => {
    axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
      "isAdded": true,
    }).catch(err => {
      alert('Ошибка добавления в корзину товара');
    });

    //update(); возможное обновление данных

    let i = items.find((item) => item.id === id);
    i.isAdded = true;
    setItems((prev) => [...prev]);
    setCartItems((prev) => [...prev, i]);
  }

  const onRemoveCart = (id) => {
    axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
      "isAdded": false,
    }).catch(err => {
      alert('Ошибка удаления из корзини товара');
    });

    //update(); возможное обновление данных

    let i = items.find((item) => item.id === id);
    i.isAdded = false;
    setItems((prev) => [...prev]);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  //onFavorite - добавление в избранное
  const onAddFavorite = (id) => {
    axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
      "inFavorite": true,
    }).catch(err => {
      alert('Ошибка добавления в избранное товара');
    });

    //update(); возможное обновление данных

    let i = items.find((item) => item.id === id);
    i.inFavorite = true;
    setItems((prev) => [...prev]);
    setFavorites((prev) => [...prev, i]);
  }

  const onRemoveFavorite = (id) => {
    axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
      "inFavorite": false,
    }).catch(err => {
      alert('Ошибка удаления из избранного товара');
    });

    //update(); возможное обновление данных

    let i = items.find((item) => item.id === id);
    i.inFavorite = false;
    setItems((prev) => [...prev]);
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  }

  const onChangeSearchInput = (text) => {
    setSearchValue(text.target.value);
  }

  return (
    <div className="wrapper">

      {cartOpened &&
        <Drawer
          items={cartItems}
          onRemove={(id) => {
            onRemoveCart(id)
          }}
          onClickClose = {() =>
            setCartOpened(false)
          }
        />
      }

      <Header
        onClickOpenDrawer={() =>
          setCartOpened(true)
        }
      />

      <Routes>

        <Route path="/" element={
          <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddCart={onAddCart}
            onRemoveCart={onRemoveCart}
            onAddFavorite={onAddFavorite}
            onRemoveFavorite={onRemoveFavorite}
          />
        }/>

        <Route path="/favorites" element={
          <Favorite
            items={favorites}
            onAddCart={onAddCart}
            onRemoveCart={onRemoveCart}
            onAddFavorite={onAddFavorite}
            onRemoveFavorite={onRemoveFavorite}
          />
        }/>

      </Routes>

    </div>
  );
}

export default App;
