import styles from "./Card.module.scss";
import {useState} from "react";

export default function Card({id ,title, price, imageUrl, favorite, addChecked, onAddChecked, onRemoveChecked, onAddFavorite, onRemoveFavorite}) {

  const onClickChecked = () => {
    if (addChecked === false) {
      onAddChecked(id);
    }
    if (addChecked === true) {
      onRemoveChecked(id);
    }
  }

  const onClickFavorite = () => {
    if (favorite === false) {
      onAddFavorite(id);
    }
    if (favorite === true) {
      onRemoveFavorite(id);
    }
  }

  return (
    <div className={styles.cart}>
      <div onClick={onClickFavorite} className={styles.favorite}>
        {favorite ? (
          <svg className="svgRectFill" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="7" fill="#FEF0F0"/>
            <path d="M23.6129 11.869C23.3646 11.3076 23.0067 10.7988 22.5591 10.3712C22.1111 9.94231 21.583 9.60147 21.0033 9.36723C20.4023 9.12337 19.7577 8.99855 19.1068 9.00001C18.1938 9.00001 17.3029 9.24422 16.5288 9.70551C16.3435 9.81585 16.1676 9.93705 16.0009 10.0691C15.8342 9.93705 15.6583 9.81585 15.4731 9.70551C14.6989 9.24422 13.8081 9.00001 12.895 9.00001C12.2375 9.00001 11.6004 9.12302 10.9985 9.36723C10.4169 9.6024 9.89281 9.94067 9.44276 10.3712C8.99455 10.7983 8.63651 11.3072 8.38893 11.869C8.1315 12.4533 8 13.0738 8 13.7124C8 14.3147 8.12594 14.9424 8.37597 15.581C8.58525 16.1146 8.88529 16.6682 9.26866 17.2272C9.87614 18.1117 10.7114 19.0343 11.7486 19.9695C13.4673 21.5198 15.1693 22.5907 15.2416 22.6341L15.6805 22.9091C15.875 23.0303 16.125 23.0303 16.3195 22.9091L16.7584 22.6341C16.8306 22.5889 18.5308 21.5198 20.2514 19.9695C21.2886 19.0343 22.1238 18.1117 22.7313 17.2272C23.1147 16.6682 23.4166 16.1146 23.624 15.581C23.874 14.9424 24 14.3147 24 13.7124C24.0018 13.0738 23.8703 12.4533 23.6129 11.869Z" fill="url(#paint0_linear_60_999)"/>
            <defs>
            <linearGradient id="paint0_linear_60_999" x1="16" y1="9" x2="16" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB0B0"/>
            <stop offset="1" stopColor="#FF4343"/>
            </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg className="svgStroke" width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="none"/>
            <path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}

      </div>
      <img src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex justify-between flex-column">
          <p>Цена:</p>
          <b>{`${price}`.slice(0, -3) + " " + `${price}`.slice(-3)} руб.</b>
        </div>
        <button onClick={onClickChecked}>
          {addChecked ? (<img src="/react-gh-pages/Img/btn-checked.svg" alt="Checked" />)
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