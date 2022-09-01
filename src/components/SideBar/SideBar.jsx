import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';

const SideBar = () => {
  const categories = ['products', 'products2', 'products3'];
  return (
    <nav className={s.nav}>
      {categories.map(category => (
        <NavLink key={category} className={s.link} to={`/products/${category}`}>
          {category}
        </NavLink>
      ))}
    </nav>
  );
};

export default SideBar;
