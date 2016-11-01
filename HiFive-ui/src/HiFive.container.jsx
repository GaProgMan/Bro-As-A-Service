
import React, { Component } from 'react';
import HiFive from './HiFive.component';

class HiFiveContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHiFived: false,
    };

    this.doHiFive = this.doHiFive.bind(this);
  }

  doHiFive() {
    this.setState({
      isHiFived: true,
    });

    setTimeout(() => {
      this.setState({
        isHiFived: false,
      });
    }, 2000);
  }

  render() {
    return (
      <HiFive
        isHiFived={this.state.isHiFived}
        doHiFive={this.doHiFive}
      />
    );
  }
}

export default HiFiveContainer;