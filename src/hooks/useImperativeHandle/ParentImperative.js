
import React, { useRef } from "react";
import ModalImperative from "./ModalImperative";

const ParentImperative = () => {
    const modalRef = useRef();

    return (<div>
        <button onClick={() => modalRef.current.open()}>Open Modal</button>
        <button onClick={() => modalRef.current.close()}>Close Modal</button>
        <ModalImperative ref={modalRef} />
    </div>)
}

export default ParentImperative;