import React from 'react';
// import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchQuery:'',
      location: {}
    }
  }

getLocation = async () => {
  // return alert(this.state.searchQuery);

  // Danger: only for a moment will we put key directly in code
  const apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

  console.log(apiUrl);
/*
  const response = await axios.get(apiUrl); 

  const location = response.data[0];

  this.setState({
    location,
    // or location: location,
  });

  const img_url=`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;

  console.log(img_url);
*/
}


  // getLocation = async () => {
  //   const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
  //   const res = await axios.get(API);
  //   console.log(res.data[0])
  //   this.setState({ location:res.data[0] });
  // }

  render() {
    return(
      <>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
        <button onClick={this.getLocation}>Explore!</button>
        {this.state.location.place_id && 
          <h2>The city is: {this.state.location.display_name}</h2>
        }
      </>
    )
  }
}

export default App;
