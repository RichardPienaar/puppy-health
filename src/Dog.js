import React, { useState } from 'react';
import DogInfo from './DogInfo'


export default function Dog(props) {

  const [visible, toggleState] = useState(0);
  
  return (
    <div className="column is-one-quarter-desktop is-half-tablet" key={props.dog.key}
    onClick={() => toggleState(visible === true ? false : true)}>
      <div className="card">
          <div className="card-image is-clickable">
            <figure className="image is-3by2">
            <img src={props.dog.url} alt={props.dog.id}></img>
        
         
         </figure>
         
         <div className="card-content is-overlay is-clipped">
         <DogInfo dog={props.dog} visible={visible}></DogInfo>
         </div>
         </div>
         </div>
    </div>  
  )
}
