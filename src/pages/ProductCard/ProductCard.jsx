import s from '../index.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={s.card}>
      <span>{product.name}</span>
      <img src={product.avatar} alt={product.name} />
      <p className={s.text}>Description: {product.description}</p>
      <span className={s.price}>Price: {product.price}</span>
    </div>
  );
};

export default ProductCard;
