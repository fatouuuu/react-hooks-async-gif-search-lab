import React, { useState } from "react";

function GifSearch({ onSubmit }) {
  const [search, setSearch] = useState('funny')


  function handleSearchChange(e) {
    setSearch(e.target.value);
  }
  
  function handleSearch(e) {
    e.preventDefault();
    onSubmit(search);
  }

  

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="query-form">
          <label htmlFor="search" placeholder="search for something"></label>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <button type="submit">
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default GifSearch;