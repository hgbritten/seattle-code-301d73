// import React from 'react';
// import Parent from './parent.js';
// import Header from './header';

// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">
//         <Header title={'Billy is a teenager'} />
//         <Parent />
//       </div>
//     );
//   }
// }

// export default App;

import { render } from '@testing-library/react';
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './header';
import Parent from './parent';
import Button from 'react-bootstrap/Button';
// import ModalExample from;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    }
  }

  closeModalHandler = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <Container fluid>
        {/* <ModalExample show={true} onClose={this.closeModalHandler} /> */}
        <Button onClick={() => this.setState({ showModal: true })}>Show Modal</Button>
        <Header title="Kazaan's Greatest" />
        <Parent />
      </Container>
    );
  }
}

// class Header extends Component {
//   render() {
//     return (
//       <h2>{this.props.title}</h2>
//     )
//   }
// }



export default App;
