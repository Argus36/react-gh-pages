import styles from "./Card.module.scss";
import {useState} from "react";

export default function Card({title, price, imageUrl, onPlus}) {

  const [isAdded, setIsAdded] = useState(false);



  const onClickPlus = () => {
    setIsAdded(!isAdded);
    if (isAdded === false) {
      onPlus();
    }
  }

  return (
    <div className={styles.cart}>
      <div className={styles.favorite}>
        <svg className="svgStroke" width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="none" stroke="#7e7e7e"/>
          <path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <img src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex justify-between flex-column">
          <p>Цена:</p>
          <b>{`${price}`.slice(0, -3) + " " + `${price}`.slice(-3)} руб.</b>
        </div>
        <button onClick={onClickPlus}>
          {isAdded ? (<img src="/react-gh-pages/Img/btn-checked.svg" alt="Checked" />)
            :
            (
              <svg className="svgFill" width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
              </svg>
            )
          }
        </button>
      </div>
    </div>
  );
}