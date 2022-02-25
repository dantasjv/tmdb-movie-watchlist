import React, { useState } from 'react';

export const Add = () => {
  const [query, setQuery] = useState("");

  const onChange = (event) => {
    event.preventDefault();

    setQuery(event.target.value);

    fetch(``)

  };

  return (
    <div className="add-page">
      <div clasName="container">
        <div className="add-content">
          <div className="input-wrapper">
          <input 
            type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={onChange}
          />
          </div>
        </div>  
      </div>

    </div>
  )
}

