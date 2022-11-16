import { useState } from "react"

export const AdCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('');

    const onInputChange=({target})=>{
        setinputValue(target.value);
    }
    const onSubmit= (event) => {
        event.preventDefault();
        var inputValor=inputValue.trim();
        if (inputValor.length<=1) return;
        onNewCategory(inputValor);
        setinputValue("");
    }

    return (


        < form onSubmit={(event)=>onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                onChange={onInputChange}
            />
        </form >
    )
}
