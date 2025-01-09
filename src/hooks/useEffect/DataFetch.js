import { useState, useEffect } from "react";

const DataFetch = () => {
    const [id, setId] = useState(1)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                return setData(data)
            })
    }, [id])



    console.log("data", data)

    return (<div style={{ marginTop: "10px" }}>
        <button onClick={() => setId(id + 1)}>Change Title</button>
        {data ? <h1>{data.title}</h1> : <h1>Loading...</h1>}

    </div>)
}

export default DataFetch;