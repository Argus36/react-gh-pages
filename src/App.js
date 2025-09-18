import {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import {Home} from "./pages/Home";
import {Favorite} from "./pages/Favorite";
import {Order} from "./pages/Order";
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
        await axios.get(`https://67f6f24442d6c71cca63b1de.mockapi.io/items`).then((res) => {
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

  const onAddCart = (id) => {
    try {

      axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
        "isAdded": true,
      }).catch(err => {
        alert('Ошибка добавления в корзину товара');
      });

      let i = items.find((item) => item.id === id);
      i.isAdded = true;
      setItems((prev) => [...prev]);
      setCartItems((prev) => [...prev, i]);

    } catch (error) {
      alert('Ошибка при добавлении товара в корзину');
      console.error('Ошибка при добавлении товара в корзину', error);
    }

  }

  const onRemoveCart = (id) => {
    try {

      axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
        "isAdded": false,
      }).catch(err => {
        alert('Ошибка удаления из корзини товара');
      });

      let i = items.find((item) => item.id === id);
      i.isAdded = false;
      setItems((prev) => [...prev]);
      setCartItems((prev) => prev.filter((item) => item.id !== id));

    } catch (error) {
      alert('Ошибка при удалении товара из корзины');
      console.error('Ошибка при удалении товара из корзины', error);
    }
  }

  //onFavorite - добавление в избранное
  const onAddFavorite = (id) => {
    try {

      axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
        "inFavorite": true,
      }).catch(err => {
        alert('Ошибка добавления в избранное товара');
      });

      let i = items.find((item) => item.id === id);
      i.inFavorite = true;
      setItems((prev) => [...prev]);
      setFavorites((prev) => [...prev, i]);

    } catch (error) {
      alert('Ошибка при добавлении товара в избранное');
      console.error('Ошибка при добавлении товара в избранное', error);
    }
  }

  const onRemoveFavorite = (id) => {
    try {

      axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
        "inFavorite": false,
      }).catch(err => {
        alert('Ошибка удаления из избранного товара');
      });

      let i = items.find((item) => item.id === id);
      i.inFavorite = false;
      setItems((prev) => [...prev]);
      setFavorites((prev) => prev.filter((item) => item.id !== id));

    } catch (error) {
      alert('Ошибка при удалении товара из избранного');
      console.error('Ошибка при удалении товара из избранного', error);
    }
  }

  const onChangeSearchInput = (text) => {
    setSearchValue(text.target.value);
  }

  return (
    <AppContext.Provider value={{items, setCartItems, cartItems, favorites, searchValue, setSearchValue, onAddCart, onRemoveCart, onAddFavorite, onRemoveFavorite, onChangeSearchInput, setCartOpened, cartOpened, totalPrice, isLoading}}>
      <div className="wrapper">
        <Drawer/>

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

          <Route path="/react-gh-pages/order" element={
            <Order/>
          }/>

        </Routes>
        {console.log(items)}
      </div>
    </AppContext.Provider>
  );
}

export default App;
