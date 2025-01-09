import { useState, useEffect } from "react";

const AsyncEffect = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
            const data = await response.json();
            if (isMounted) setData(data)

        }

        console.log("inside useeffect")

        fetchData();

        return () => {
            console.log("cleanup fn called")
            isMounted = false
        }
    }, [])


    return (<div>
        {data ? <h1>{data.title}</h1> : <h1>Loading...</h1>}
    </div>)

}

export default AsyncEffect;