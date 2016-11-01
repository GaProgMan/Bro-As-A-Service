import React, { PropTypes } from 'react';

const HiFive = (props) => (
  <div>
    <div>{props.isHiFived ? 'YEAAAAH WOOOOOH!!!' : 'Hey buddy! Hi 5?!' }</div>
    <button onClick={props.doHiFive} disabled={props.isHiFived}>Give Hi5</button>
  </div>
);

HiFive.propTypes = {
  isHiFived: PropTypes.bool.isRequired,
  doHiFive: PropTypes.bool.isRequired,
};

export default HiFive;