import {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import {Home} from "./pages/Home";
import {Favorite} from "./pages/Favorite";
import {Drawer} from "./components/Drawer";
import {Header} from "./components/Header";
import {AppContext} from "./context";

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const totalPrice = (cartItems.reduce((sum, obj) => obj.price + sum, 0));

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get('https://67f6f24442d6c71cca63b1de.mockapi.io/items').then((res) => {
          setItems(res.data);
          setIsLoading(false);
        }).catch((err) => {
          alert('Ошибка при загрузке товаров');
        });

        await axios.get(`https://67f6f24442d6c71cca63b1de.mockapi.io/items?isAdded=true`)
        .then((res) => {
          setCartItems(res.data);
        })
        .catch(() => {
          return;
        });

        await axios.get(`https://67f6f24442d6c71cca63b1de.mockapi.io/items?inFavorite=true`).then((res) => {
          setFavorites(res.data);
        }).catch(() => {
          return;
        });

      } catch (error) {
        alert('Ошибка при загрузке данных');
        console.error('Ошибка при загрузке данных', error);
      }
    }

    fetchData();

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
    <AppContext.Provider value={{items, setCartItems, cartItems, favorites, searchValue, setSearchValue, onAddCart, onRemoveCart, onAddFavorite, onRemoveFavorite, onChangeSearchInput, setCartOpened, totalPrice, isLoading}}>
      <div className="wrapper">
        {cartOpened && <Drawer/>}

        <Header/>

        <Routes>

          <Route path="/react-gh-pages" element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
            />
          }/>

          <Route path="/react-gh-pages/favorites" element={
            <Favorite/>
          }/>

        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
