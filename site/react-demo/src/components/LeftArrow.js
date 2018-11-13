import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goPrevSlide}>
      <i className="fa fa-arrow-left fa-2x"></i>
    </div>
  );
}

export default LeftArrow;