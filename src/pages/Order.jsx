import React, { useState, useEffect } from "react";
import axios from "axios";

export function Order() {

  const [isOrder, setIsOrder] = useState([]);

  useEffect(() => {
    async function order() {
      try {
        await axios.get('https://67f6f24442d6c71cca63b1de.mockapi.io/orders').then((res) => {
          setIsOrder(res.data);
        });
      } catch (error) {
        alert('Ошибка при загрузке заказов');
      }
    }

    order();
  }, [])


  return (
    <div className="content">
      <div style={{marginBottom: '1vw'}} className="content-title">
        <h2 style={{marginBottom: '1vw'}}>Мои заказы</h2>
      </div>
      {isOrder.map((amount) => (
        <div key={amount.id}>
          <h1>Заказ №{amount.id}</h1>
          <hr style={{margin: '0 1.5% 2.5vh 0'}}/>
          <div className="sneakers">
            {amount.items.map((items) => (
              <div key={items.id} className="card-order">
                <img src={items.imageUrl} alt="Sneakers" />
                <h5>{items.title}</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex justify-between flex-column">
                    <p>Цена:</p>
                    <b>{`${items.price}`.slice(0, -3) + " " + `${items.price}`.slice(-3)} руб.</b>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}