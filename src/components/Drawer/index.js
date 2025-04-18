import styles from "./Drawer.module.scss";

export default function Drawer({items, onRemove, onClickClose}) {
  return (

  <div>
    <style>{`body {overflow: hidden;}`}</style>
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h3>
          Корзина
          <svg onClick={onClickClose} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#DBDBDB"/>
            <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" stroke="#B5B5B5" fill="#B5B5B5"/>
          </svg>
        </h3>

        {items.length === 0 ? (
          <div className="d-flex flex-column flex">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} className={styles.items}>
              <img src="/react-gh-pages/Img/empty-cart.svg" alt="Empty-Cart"/>
              <h2>Корзина пустая</h2>
              <h3>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</h3>
            </div>
            <div className={styles.cartTotalBlock}>
              <button onClick={onClickClose} className="greenButton">
                <span style={{color: 'white'}}>Вернуться назад</span>
                <img src="/react-gh-pages/Img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>

        ) : (
          <div style={{height: '90%'}} className="d-flex flex-column">
            <div className={styles.items}>
              {items.map((item, index) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className="d-flex align-center">
                    <img src={item.imageUrl} alt="Sneakers" />
                    <div>
                      <p className="mb-5">{item.title}</p>
                      <b>{`${item.price}`.slice(0, -3) + " " + `${item.price}`.slice(-3)} руб.</b>
                    </div>
                  </div>
                  <div>
                    <svg onClick={() => {onRemove(item.id)}} style={{width: '20px', height: '20px'}} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#DBDBDB"/>
                      <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" stroke="#B5B5B5" fill="#B5B5B5"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                <span style={{color: 'white'}}>Оформить заказ</span>
                <img src="/react-gh-pages/Img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  );
}