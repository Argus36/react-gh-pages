import styles from "./Drawer.module.scss";
import React from "react";
import {AppContext} from "../../context.js";

export const Info = ({title, img, description}) => {

  const {setCartOpened} = React.useContext(AppContext);

  return (
    <div className="d-flex flex-column flex">
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} className={styles.items}>
        <img src={img} alt="Empty-Cart"/>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
      <div className={styles.cartTotalBlock}>
        <button onClick={() => setCartOpened(false)} className="greenButton">
          <span style={{color: 'white'}}>Вернуться назад</span>
          <img src="/react-gh-pages/Img/arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  )
}

export default Info;
