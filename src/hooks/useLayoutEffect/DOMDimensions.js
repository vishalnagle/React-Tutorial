
import { useLayoutEffect, useState, useRef } from "react";

const DOMDimensions = () => {
    const [width, setWidth] = useState(0);
    const boxRef = useRef(null)

    useLayoutEffect(() => {
        if (boxRef.current) {
            setWidth(boxRef.current.offsetWidth)
        }
    }, []) // Runs once when the component mounts.


    // This example demonstrates how to measure an element's size before the browser paints.

    return (<div>
        <div ref={boxRef} style={{ width: "50%", height: "100px", background: "red" }}>
            Resize Me!
        </div>
        <p>The width of the box is {width}px</p>
    </div>)
}

export default DOMDimensions;