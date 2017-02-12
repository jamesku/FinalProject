import React from 'react';

const SearchBar = ({value, onChange}) => {
  return (
    <div>
      <h1>Search:</h1>
      <input className="search-bar"
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export default SearchBar;
