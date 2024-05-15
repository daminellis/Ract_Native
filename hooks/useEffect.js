import {useEffect, useState} from 'react';

/* export default function App(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Este contador tem valor: ', count);   
    }, [count])

    return(
        <div>
            <h1>Count: {count} </h1>
            <button onClick={() => setCount(count - 1)}>Decremento</button>
            <button onClick={() => setCount(count + 1)}>Incremento</button>
        </div>
    );
} */

export default function App(){
    const [value, setValue] = useState('valor inicial');

    useEffect(() => {
        console.log('funciona', value);
    }, [value]);

    return(
        <div>
            <input
            type="text"
            value={value}
            onChange={((e) => setValue(e.target.value))}
            />
        </div>
    )
}
