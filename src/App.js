import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
        <div className="d-flex justify-between">

          <Card /> {/* Компонент */}

        </div>
      </div>
    </div>
  );
}

export default App;
