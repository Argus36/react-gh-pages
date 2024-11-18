import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: 'react-gh-pages/Img/Sneakers/1.jpg' },
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: 'react-gh-pages/Img/Sneakers/2.jpg' },
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: 'react-gh-pages/Img/Sneakers/3.jpg' },
  {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: 'react-gh-pages/Img/Sneakers/4.jpg' },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header /> {/* Компонент */}
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/react-gh-pages/Img/search.svg" alt="Search" />
            <input placeholder="Поиск"/>
          </div>
        </div>
        <div className="d-flex">

          {arr.map((obj) => (
            <Card
              title = {obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
