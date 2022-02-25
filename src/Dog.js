import loadImages from "./loadImages"

export default function Dog() {
 const dog = loadImages() 
 return (
    <img src={dog.url}/>
  )
}
