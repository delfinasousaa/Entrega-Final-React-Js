import { useState } from 'react';

const Counter = ({ inicial, stock, onAdd }) => {
    const [counter, setCounter] = useState(inicial);

    const sumarCounter = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const restarCounter = () => {
        if (counter > inicial) {
            setCounter(counter - 1);
        }
    };

    return (
        <div>
            <div>
                <button onClick={restarCounter}>-</button>
                <strong>{counter}</strong>
                <button onClick={sumarCounter}>+</button>
            </div>
            <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>
    );
};

export default Counter;
