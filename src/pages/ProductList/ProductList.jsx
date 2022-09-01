import { useParams } from 'react-router-dom';
import s from '../index.module.css';

const ProductList = () => {
  const { category } = useParams();
  return (
    <div className={s.container}>
      List of products in a category: {category}
    </div>
  );
};

export default ProductList;
