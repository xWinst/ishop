import s from '../index.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addProduct } from 'redux/actions';

const ProductInfo = () => {
  const { productId } = useParams();
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const product = products.find(product => product.id === productId);

  const onClick = () => {
    dispatch(addProduct(product));
  };

  return product ? (
    <div className={s.card}>
      <span>{product.name}</span>
      <img src={product.avatar} alt={product.name} />
      <p className={s.text}>Description: {product.description}</p>
      <span className={s.price}>Price: {product.price}</span>
      <button onClick={onClick}>Add to basket</button>
    </div>
  ) : (
    <div>This product does not exist</div>
  );
};

export default ProductInfo;
