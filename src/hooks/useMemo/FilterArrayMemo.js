import React, { useMemo, useState } from 'react';

function FilterArrayMemo() {
  const [query, setQuery] = useState('');
  const [list] = useState(() =>
    Array.from({ length: 10000 }, (_, i) => `Item ${i}`)
  );

  const filteredList = useMemo(() => {
    console.log('Filtering...');
    return list.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [query, list]);

  // Filtering the array only re-runs when query or list changes, preventing unnecessary calculations.

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredList.map((item, index) => (
          <li style={{color:"white"}} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default FilterArrayMemo;
