import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    }
  }

  handleToggle = () => {
    this.setState({visible: !this.state.visible });
  }

  render() {
    return (
      <React.Fragment>
      <button onClick={this.handleToggle}>toggleHeader</button>
      <header>
        {this.state.visible ? <h1 ide="head">Counters R Fun</h1> : null}
      </header>
      </React.Fragment>
    );
  }
}

export default Header;
