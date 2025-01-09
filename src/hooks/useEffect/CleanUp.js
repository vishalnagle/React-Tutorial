import { useState, useEffect } from "react";


const CleanUp = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)

        console.log("useEfect called")
        // cleanup function
        return () => {
            console.log("cleanup called")
            window.removeEventListener("resize", handleResize)}
    }, [])

    // Empty dependency make sure the useEffect runs on mount and unmount

    return <div>
        <h1>Window Width: {width}</h1>
    </div>
}

export default CleanUp;