import React from 'react'

export default function DogInfo(props) {
  if (props.visible){
    if (props.dog.breeds.length >0){ 
  return (
    <span className="tag is-info"  key={props.dog.id}>
    
    <div>{props.dog.breeds[0].name}</div>
    
    </span>     
  )
}

else {
    return (
        <span className="tag is-info" id={props.dog.id}>
        
        <div>No information, sorry!</div>
        </span>
    )
}


}
else {
  return <></>
}
}

  
