import React, { Component } from 'react';

import Layers from './Layers';
import Levers from './Levers';
import Filters from './Filters';

class Explore extends Component {
  render () {
    return (
      <div>
        <Levers />
        <br />
        <Filters />
        <br />
        <Layers />
        <br />
      </div>
    );
  }
}

export default Explore;