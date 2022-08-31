import { useState } from 'react';
// import axios from 'axios';

export const App = () => {
  const [value, setValue] = useState();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    // axios.get('https://pay.fondy.eu/api/checkout/redirect/');
  };

  return (
    <div className="app">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={value}
          onChange={handleChange}
        />

        <a
          href="https://secure.wayforpay.com/button/b3729290ecf35"
          // style="display:inline-block!important;background:#0488cd;background-size:cover;width: 256px!important;height:54px!important;border:none!important;border-radius:14px!important;padding:18px!important;text-decoration:none!important;box-shadow:3px 2px 8px rgba(71,66,66,0.22)!important;text-align:center!important;outline:none!important;"
          // onmouseover="this.style.opacity='0.8';"
          // onmouseout="this.style.opacity='1';"
        >
          <span>Оплатити</span>
        </a>
      </form>
    </div>
  );
};
