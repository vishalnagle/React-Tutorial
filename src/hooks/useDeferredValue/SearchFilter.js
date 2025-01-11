
import React, { useState, useDeferredValue, useMemo } from "react";

const SearchFilter = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const deferredQuery = useDeferredValue(searchQuery)

    const filteredItems = useMemo(() => {
        const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
        return items.filter(item => item.toLowerCase().includes(deferredQuery.toLowerCase()));
    }, [deferredQuery])


    return (<div>
        <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search items..."
        />

        {filteredItems.map((item, index) => (
            <h1 key={index}>{item}</h1>
        ))}

    </div>)

}


export default SearchFilter;