import { useState, useEffect } from 'react';
import axios from 'axios';

export const App = () => {
    const [value, setValue] = useState();

    const handleChange = event => {
        setValue(event.target.value);
    };

    const onSubmit = event => {
        console.log('event: ', event);
        event.preventDefault();
        axios.get('https://pay.fondy.eu/api/checkout/redirect/');
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
                <button type="submit">Сплатити</button>
            </form>
        </div>
    );
};
