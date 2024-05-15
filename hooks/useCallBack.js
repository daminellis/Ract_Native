import { useState, useCallback} from 'react';

function ExemploUseCallback() {
    const [contador, setContador] = useState(0);

    const incrementarContador = useCallback(() => {
        setContador(contador + 1);
    }, 
    [contador]);

    return(
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>incrementar contador</button>
        </div>
    )
}

export default ExemploUseCallback;
