
import React from 'react'
import DogInfo from './DogInfo';

const Dogs = ({ dogs }) => {

    if (dogs.length != 0) {
    return (
    <div className="columns is-multiline">
    
                {dogs.map((dog) => (
                    

            <div className="column is-one-quarter-desktop is-half-tablet" key={dog.id}>
      <div className="card">
          <div className="card-image">
            <figure className="image is-3by2">
            <img src={dog.url} alt={dog.id}></img>
        
         
         </figure>
         
         <div className="card-content is-overlay is-clipped">
          <DogInfo dog={dog}></DogInfo>  
         </div>
         </div>
         </div>
    </div>  
         ))}
     </div>
     
 
    )
    




}
else {
    return (<div>Loading puppies, please wait!</div>)
}
};
export default Dogs