import { useNavigate } from 'react-router-dom';
import s from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const onClick = () => {
    console.log(product.id);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={s.card} onClick={onClick}>
      <span>{product.name}</span>
      <img src={product.avatar} alt={product.name} />
      <p className={s.text}>Description: {product.description}</p>
      <span className={s.price}>Price: {product.price}</span>
    </div>
  );
};

export default ProductCard;
