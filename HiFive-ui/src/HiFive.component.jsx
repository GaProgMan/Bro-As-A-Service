import React, { PropTypes } from 'react';

const HiFive = (props) => (
  <div>
    <div>{props.isHiFived ? 'YEAAAAH WOOOOOH!!!' : 'Hey buddy! Hi 5?!' }</div>
    <button onClick={props.doHiFive} disabled={props.isHiFived} className="bro-button">
      <i className={`fa bro-five-icon ${props.isHiFived ? 'fa-hand-rock-o' : 'fa-hand-paper-o'}`} />
      Give Hi5
      <i className={`fa bro-five-icon ${props.isHiFived ? 'fa-hand-rock-o' : 'fa-hand-paper-o'}`} />
    </button>
  </div>
);

HiFive.propTypes = {
  isHiFived: PropTypes.bool.isRequired,
  doHiFive: PropTypes.bool.isRequired,
};

export default HiFive;