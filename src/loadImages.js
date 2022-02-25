
export default function loadImages() {
  const dogURL= 'https://api.thedogapi.com/v1/images/search'
  const dogKEY = '91181943-5a3a-4929-937c-7cb7b9fa32f9'
  return (
    fetch(dogURL, {
      method: "GET",
      headers: {
        "X-Auth-Token": dogKEY
      }
    })
  .then(response => response.json())
  .then(data => console.log(data.length))
  )
}