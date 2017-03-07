import React from 'react';


const SearchBar = ({value, onChange, handleSubmit}) => {



  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(value);
      }}
      >
        <input className="search-bar" name="hashtag"
          type="text"
          value={value}
          onChange={event => onChange(event.target.value)}
        />

      </form>
    </div>
  );
};


SearchBar.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.obj
};

export default SearchBar;
