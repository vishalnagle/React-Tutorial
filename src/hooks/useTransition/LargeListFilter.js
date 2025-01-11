
import React,{useState,useTransition} from 'react'

const LargeListFilter = () => {
        const [query,setQuery] = useState("");
        const [filteredItems,setFilteredItems] = useState([])
        const [isPending,startTransition] = useTransition()

        const items = Array.from({length:10000},(_,i)=>`Item ${i+1}`)


        const handleSearch = (e)=>{
            const value = e.target.value;
            setQuery(value)
            startTransition(()=>{
                const filtered = items.filter((item)=>{
                    return item.toLowerCase().includes(value.toLowerCase())
                })
                setFilteredItems(filtered)
            })
        }


  return (
    <div>
        <input type='text' value={query} onChange={handleSearch} placeholder='Search...'/>
        {isPending && <h1>Loading...</h1>}
        {filteredItems.map((item)=>{
            return <h1 key={item}>{item}</h1>
        })}
    </div>
  )
}

export default LargeListFilter