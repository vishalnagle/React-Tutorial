import React, { useState, useMemo } from 'react';

function MemoDerivedData() {
  const [rows, setRows] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Doe', age: 35 },
  ]);
  const [filterAge, setFilterAge] = useState(0);

  const filteredRows = useMemo(
    () => rows.filter((row) => row.age > filterAge),
    [rows, filterAge]
  );

  return (
    <div>
      <input
        type="number"
        value={filterAge}
        onChange={(e) => setFilterAge(Number(e.target.value))}
        placeholder="Filter by age"
      />
      <ul>
        {filteredRows.map((row) => (
          <li style={{color:"white"}} key={row.id}>{row.name} - {row.age}</li>
        ))}
      </ul>
    </div>
  );
}
export default MemoDerivedData;
