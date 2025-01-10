
import { useRef } from "react";

const DomAccess = () => {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (<div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus</button>
    </div>)

}

export default DomAccess;