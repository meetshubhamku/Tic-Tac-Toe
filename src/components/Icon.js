import React from 'react';
import DisplayIcons from './DisplayIcon';

const Icon = ({type})=> {

  return(
      <div className="card red">
        <div className="card-content center-align">
          <DisplayIcons type={type} />
        </div>
      </div>
  );

}

export default Icon;