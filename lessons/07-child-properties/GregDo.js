import React from 'react';
import ReactDOM from 'react-dom';

// App is going to render <Button>
// <Button> 's inner HTML `React` is going to represent
// the {this.props.children} in the Button component
// Heart is a functional stateless component that will render
// inside of <Button> - App has access to these nested components.
class App extends React.Component {
  render() {
    return (
      <Button>I <Heart /> React</Button>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.children}</button>
    )
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default App;
