import {useEffect, useState} from "react";
import axios, { AxiosHeaders } from "axios";
import Card from "./components/Card";
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

  const updateCart = () => {

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

  }

  const updateFavorite = () => {

    axios.get('https://67f6f24442d6c71cca63b1de.mockapi.io/items').then((res) => {
      setItems(res.data);
    });

  }

  //onPlus - добавление в корзину
  const onAddCart = (id) => {
    axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
      "isAdded": true,
    }).then(() => {
      updateCart();
    });
  }

  const onRemoveCart = (id) => {
    axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
      "isAdded": false,
    }).then(() => {
      updateCart();
    });
  }

  //onFavorite - добавление в избранное
  const onAddFavorite = (id) => {
    axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
      "inFavorite": true,
    }).then(() => {
      updateFavorite();
    });
  }

  const onRemoveFavorite = (id) => {
    axios.put(`https://67f6f24442d6c71cca63b1de.mockapi.io/items/${id}`, {
      "inFavorite": false,
    }).then(() => {
      updateFavorite();
    });
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
          onClickClose = {() => setCartOpened(false)}
        />
      }

      <Header onClickOpenDrawer={() => setCartOpened(true)}/>

      <hr/>
      <div className="content">
        <div className="content-title">
          <h2>{searchValue ? `Поиск: ${searchValue}` : 'Все кроссовки'}</h2>
          <div className="search-block">
            <img src="/react-gh-pages/Img/search.svg" alt="Search" />
            {searchValue &&
              <svg onClick={() => {setSearchValue('')}} className="clear svgRectFill svgFull" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#DBDBDB"/>
                <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" stroke="#B5B5B5" fill="#B5B5B5"/>
              </svg>
            }
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="sneakers">

          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
            .map((item, index) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                favorite={item.inFavorite}
                addChecked={item.isAdded}
                onAddChecked = {(id) => {
                  onAddCart(id);
                }}
                onRemoveChecked = {(id) => {
                  onRemoveCart(id);
                }}
                onAddFavorite = {(id) => {
                  onAddFavorite(id);
                }}
                onRemoveFavorite = {(id) => {
                  onRemoveFavorite(id);
                }}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
