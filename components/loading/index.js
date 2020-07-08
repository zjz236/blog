import React from 'react';
import './index.less';
import loadingGif from './loading.gif';
export default () => {
  return (
    <div className="loading">
      <img className="loading-gif" src={loadingGif} alt="" draggable={false} />
    </div>
  );
};
