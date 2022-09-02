// import { useState } from 'react';
// import axios from 'axios';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  TrendList,
  ProductList,
  ProductInfo,
  Basket,
  PageNotFound,
} from 'pages';
import { Header, SideBar, Loader } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <SideBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<TrendList />} />
            <Route path="basket" element={<Basket />} />
            <Route path="products/:category" element={<ProductList />} />
            <Route path="product/:productId" element={<ProductInfo />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

/* <a
          href="https://secure.wayforpay.com/button/b3729290ecf35"
          // style="display:inline-block!important;background:#0488cd;background-size:cover;width: 256px!important;height:54px!important;border:none!important;border-radius:14px!important;padding:18px!important;text-decoration:none!important;box-shadow:3px 2px 8px rgba(71,66,66,0.22)!important;text-align:center!important;outline:none!important;"
          // onmouseover="this.style.opacity='0.8';"
          // onmouseout="this.style.opacity='1';"
        >Оплатити</a> */
//   const [value, setValue] = useState();
//   const handleChange = event => {
//     setValue(event.target.value);
//   };
//   const onSubmit = event => {
//     event.preventDefault();
//     // axios.get('https://pay.fondy.eu/api/checkout/redirect/');
//   };
