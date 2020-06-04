import React from 'react'

function DisplayIcon({type}) {
  switch(type)
  {
    case 'Cross': return(<i className="material-icons">add</i>);
    break;
    case 'Circle' : return(<i className="material-icons">panorama_fish_eye</i>);
    break;
    default: return(<i className="material-icons">edit</i>);
    break;
  }
}

export default DisplayIcon;
