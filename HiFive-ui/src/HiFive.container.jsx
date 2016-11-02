require('es6-promise').polyfill();

import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import HiFive from './HiFive.component';

class HiFiveContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHiFived: false,
      brosponse: 'BROOOOO!',
    };

    this.doHiFive = this.doHiFive.bind(this);
  }

  doHiFive() {
    this.makeServerCall()
      .then(brosponse => {
        this.setState({
          brosponse,
          isHiFived: true,
        });

        this.makeServerCall()
          .then(brosponse => this.setState({
            brosponse,
            isHiFived: false,
          }));
      });
  }

  makeServerCall() {
    var callConfiguration = {};
    if (!this.state.isHiFived) callConfiguration.method = 'POST';

    return (
      fetch('//localhost:5000/', callConfiguration)
        .then(response => {
          if (response.status >= 400) {
            throw new Error('No bro\'s available bro');
          }

          return response.text();
        })
    );
  }

  render() {
    return (
      <HiFive
        brosponse={this.state.brosponse}
        isHiFived={this.state.isHiFived}
        doHiFive={this.doHiFive}
      />
    );
  }
}

export default HiFiveContainer;