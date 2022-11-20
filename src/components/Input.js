import './input.css';

import { FiSearch } from 'react-icons/fi';
import React from 'react';

const input = ({ text, submit, func }) => {
   return (
      <form className="input" onSubmit={submit}>
         <input
            onChange={text}
            type={'text'}
            placeholder="Please enter location"
            className="input_value"
         />
         <span className="input_icon" onClick={func}>
            <FiSearch />
         </span>
      </form>
   );
};

export default input;
