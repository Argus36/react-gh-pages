

function App() {

  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="/react-gh-pages/Img/logo.png" alt=""/>
          <div className="headerInfo">
            <h2>REACT SNEAKERS</h2>
            <p className="opacity-6">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li style={{display: 'flex', alignItems: 'center'}}>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>1205 руб.</span>
          </li>
          <li>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 9C0 4.1211 4.1211 0 9 0C13.8789 0 18 4.1211 18 9C18 11.871 16.5672 14.4702 14.4 16.1316V16.2H14.3082C12.807 17.3205 10.9683 18 9 18C7.0317 18 5.193 17.3205 3.6918 16.2H3.6V16.1316C1.4328 14.4702 0 11.8701 0 9ZM6.41112 13.7124C5.93239 14.0975 5.59923 14.6344 5.4666 15.2343C6.5178 15.8436 7.7256 16.2 9 16.2C10.2744 16.2 11.4822 15.8436 12.5334 15.2343C12.4006 14.6344 12.0674 14.0977 11.5887 13.7126C11.11 13.3275 10.5144 13.1169 9.9 13.1157H8.1C7.48557 13.1168 6.88986 13.3272 6.41112 13.7124ZM12.391 12.0705C13.129 12.5617 13.7057 13.2596 14.049 14.0769C15.3693 12.7638 16.2 10.9584 16.2 9C16.2 5.0967 12.9033 1.8 9 1.8C5.0967 1.8 1.8 5.0967 1.8 9C1.8 10.9584 2.6307 12.7638 3.951 14.0769C4.2943 13.2596 4.87104 12.5617 5.60904 12.0705C6.34704 11.5794 7.21351 11.3168 8.1 11.3157H9.9C10.7865 11.3168 11.653 11.5794 12.391 12.0705ZM5.40001 7.2C5.40001 5.148 6.94801 3.6 9.00001 3.6C11.052 3.6 12.6 5.148 12.6 7.2C12.6 9.252 11.052 10.8 9.00001 10.8C6.94801 10.8 5.40001 9.252 5.40001 7.2ZM7.20001 7.2C7.20001 8.2602 7.93981 9 9.00001 9C10.0602 9 10.8 8.2602 10.8 7.2C10.8 6.1398 10.0602 5.4 9.00001 5.4C7.93981 5.4 7.20001 6.1398 7.20001 7.2Z" fill="#9B9B9B"/>
            </svg>
          </li>
        </ul>
      </header>
      <hr/>
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h2>Все кроссовки</h2>
          <div className="search-block">
            <img src="/react-gh-pages/Img/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="sneakers">
          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/1.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/2.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/3.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/4.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/5.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/6.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/7.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/8.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/9.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cart">
            <img src="/react-gh-pages/Img/Sneakers/10.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex justify-between flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="rgb(255, 255, 255)"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
