import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getProducts } from 'redux/operations';
import { ProductCard } from 'components';
import s from '../index.module.css';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(category));
  }, [dispatch, category]);

  return (
    <div className={s.container}>
      List of products in a category: {category}
      <ul className={s.list}>
        {products.map(item => (
          <li key={item.id}>
            <ProductCard product={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
