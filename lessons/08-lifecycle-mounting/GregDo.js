//Lifecycle methods
// when a component is added or removed from the DOM,
// this is called mounting and unmounting the component

// `componentWillMount` = when component is fully prepped and
// guaranteed to make it into the DOM

// `componentDidMount` = after our component has been placed
// into the DOM

// componentWillUnmount = when we are about to remove our
// component from the DOM
// To illustrate this, a wrapper component must be created
// to work with the DOM

import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({val: this.state.val + 1 })
  }
  componentWillMount() {
    console.log('mounting');
  }
  render() {
    console.log('rendering!')
    return (
      <button onClick={this.update}>{this.state.val}</button>
    )
  }
  componentDidMount() {
    console.log('mounted!');
  }
  componentWillUnmount() {
    console.log('bye!');
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
