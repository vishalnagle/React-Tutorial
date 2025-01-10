import React, { useImperativeHandle, useState, forwardRef } from 'react'

const ModalImperative = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }))

    if (!isOpen) return null

    return (
        <div style={{ background: "white", padding: "20px",opacity:"0.5" }}>
            <h2>Modal content</h2>
            <button onClick={() => setIsOpen(false)}>Close modal</button>
        </div>
    )
})

export default ModalImperative