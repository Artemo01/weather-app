import React from 'react';
import { IError } from '../../types';
import './Error.css';

const Error = (error: IError) => {
  return (
    <div className="error-wrapper">
      <div className="error-cod">{error.cod}</div>
      <div className="error-message">{error.message}</div>
    </div>
  );
};

export default Error;
