import {Card} from "../components/Card";
import React from "react";
import {AppContext} from "../context";

export function Home({searchValue, setSearchValue, onChangeSearchInput}) {

  const {isLoading, items} = React.useContext(AppContext);

  const renderItems = () => {

    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (isLoading ?
      (
        [...Array(10)].map((item, index) => (
          <Card
            key={index}
            id={index}
            title={item}
            price={item}
            imageUrl={item}
            favorite={item}
            addChecked={item}
          />
        ))
      )
      :
      (
        filteredItems.map((item) => (
        <Card
          key={item.id}
          loading={isLoading}
          id={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          favorite={item.inFavorite}
          addChecked={item.isAdded}
        />
      ))))
  }

  return (
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
        {renderItems()}
      </div>
    </div>
  );
}