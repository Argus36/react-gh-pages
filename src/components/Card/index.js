import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"
import React from "react";
import {AppContext} from "../../context";

export function Card({id ,title, price, imageUrl, favorite, addChecked}) {

  const {isLoading, onAddCart, onRemoveCart, onAddFavorite, onRemoveFavorite} = React.useContext(AppContext);

  const onClickChecked = () => {
    if (addChecked === false) {
      onAddCart(id);
    }
    if (addChecked === true) {
      onRemoveCart(id);
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

      {isLoading ? (
        <ContentLoader
          speed={2}
          width={175}
          height={235}
          viewBox="0 0 175 235"
          backgroundColor="#b8b8b8"
          foregroundColor="#e6e6e6"
          //{...props}
        >
          <rect x="0" y="123" rx="5" ry="5" width="175" height="25" />
          <rect x="0" y="154" rx="5" ry="5" width="125" height="25" />
          <rect x="0" y="199" rx="5" ry="5" width="105" height="25" />
          <rect x="143" y="193" rx="5" ry="5" width="32" height="32" />
          <rect x="0" y="0" rx="5" ry="5" width="175" height="105" />
        </ContentLoader>
      ) : (
        <>
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
              {addChecked ? (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="url(#paint0_linear_60_200)"/>
                  <g clipPath="url(#clip0_60_200)">
                    <g filter="url(#filter0_d_60_200)">
                      <path d="M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z" fill="white"/>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_d_60_200" x="10.6665" y="11.3298" width="10.6698" height="10.5132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="2"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_200"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_200" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_60_200" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#89F09C"/>
                      <stop offset="1" stopColor="#3CC755"/>
                    </linearGradient>
                    <clipPath id="clip0_60_200">
                      <rect width="10.6667" height="10.6667" fill="white" transform="translate(10.6667 10.6667)"/>
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg className="svgFill" width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              )
              }
            </button>
          </div>
        </>
      )}
    </div>
  );
}