import React, {Component} from 'react';
import Dogs from './Dogs';

class App extends Component {
  state = {
    dogs: []
  }

  dogURL= 'https://api.thedogapi.com/v1/images/search?limit=20' /* limit to 20 dogs*/
  dogKEY = ''/* ADD the API KEY here!*/

  componentDidMount() {
    fetch(this.dogURL, {method: 'GET', headers: {'x-api-key':this.dogKEY}})
    .then(res => res.json())
    .then((data) => {
      this.setState({ dogs: data })
    })
    .catch(console.log)
  }



  render () {
    return (
      <Dogs dogs={this.state.dogs} dogInfos={this.state.dogArray} />
    );
  }
}

export default App;