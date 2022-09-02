import { useSelector } from 'react-redux/es/exports';
import { ProductCard } from 'components';
import s from '../index.module.css';

const Basket = () => {
  const basket = useSelector(state => state.basket);
  const totalPrice = basket.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div className={s.container}>
      Your basket
      <ul className={s.list}>
        {basket.map(item => (
          <li key={item.id + item.name}>
            <ProductCard product={item} />
          </li>
        ))}
      </ul>
      <span>
        You have selected <span className={s.total}>{basket.length}</span>{' '}
        products worth <span className={s.total}>{totalPrice}</span> tugriks
      </span>
      <button className={s.button} type="button">
        pay
      </button>
    </div>
  );
};

export default Basket;
