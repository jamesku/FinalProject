import React from 'react';
import SearchBar from '../SearchBar';
import './Header.css';

import { FileUpload } from 'redux-file-upload';

const Header = ({searchValue, onChange, handleSubmit}) => {
  return (
    <div>
      <SearchBar onChange={onChange} searchValue={searchValue} handleSubmit={handleSubmit} />

      <FileUpload
        allowedFileTypes={['jpg']}
        data={{
          type: 'picture',
          user: 'james',
          hashtag: searchValue
        }}
        dropzoneId="fileUpad"
        url="http:/localhost:8080/newpost">
        <button>
          +
        </button>
      </FileUpload>


    </div>
  );
};

export default Header;

Header.propTypes = {
  searchValue: React.PropTypes.string,
  onChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
};
