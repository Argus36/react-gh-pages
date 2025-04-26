import {Card} from '../components/Card';
import React from "react";
import {AppContext} from "../context";

export function Favorite() {

  const {favorites, onAddCart, onRemoveCart, onAddFavorite, onRemoveFavorite} = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="content-title">
        <h2>Мои закладки</h2>
      </div>
      <div className="sneakers">
        {favorites.map((item) => (
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
        ))}
      </div>
    </div>
  );
}