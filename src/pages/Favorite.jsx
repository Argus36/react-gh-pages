import Card from '../components/Card';
import { useState } from "react";

export default function Favorite({items, onAddCart, onRemoveCart, onAddFavorite, onRemoveFavorite}) {

  const [value, setValue] = useState(0);

  return (
    <div className="content">
      <div className="content-title">
        <h2>Мои закладки</h2>
      </div>
      <div className="sneakers">
        {items.map((item) => (
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