import React from 'react';

function Banner({ status, children }) {
  return <div className={`${status} banner`}  style={{backgroundColor:'chocolate'}}>{children}</div>;
}

export default Banner;