import css from './Logo.module.css';
import logoUrl from './logo.png';

const Logo = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <img src={logoUrl} alt="logo with tree and Nika" className={css.logo} />
      </div>
      {/* <ul className={css['list-header']}>
                <li><a href="./Catalog/Catalog.jsx"></a>Katalog</li>
                <li><a href="./About/About.jsx"></a>O nas</li>
                <li><a href="./Registration/Registration.jsx"></a>Rejestracja</li> 
                <li><a href="./ShoppingBasket/ShoppingBasket.jsx"></a>Koszyk</li>
            </ul> */}
    </div>
  );
};
export default Logo;
