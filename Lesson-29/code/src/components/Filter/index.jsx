import React from 'react';

const index = ({ handleFilterChange }) => {
  
  return (
    <div>
      <h2>Filter</h2>
      <label>
        <input
          type="radio"
          name="filter"
          value="all"
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="active"
          onChange={handleFilterChange}
        />
        Active
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="inactive"
          onChange={handleFilterChange}
        />
        Inactive
      </label>
    </div>
  );
};

export default index;