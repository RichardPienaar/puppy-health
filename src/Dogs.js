
import React from 'react'
import Dog from './Dog';

export default function Dogs(props) {

    if (props.dogs.length !== 0) {
    
    return (
    <div className="columns is-multiline">
    
                {props.dogs.map((dog) => (
                    <Dog dog={dog} key={dog.id}></Dog>
            
         ))}
     </div>
 
    )
    




}
else {
    return (<div>Loading puppies, please wait!</div>)
}
};
