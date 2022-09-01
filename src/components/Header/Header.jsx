import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <span>Header</span>
      <NavLink className={s.link} to={`/basket`}>
        Basket
      </NavLink>
    </div>
  );
};

export default Header;
