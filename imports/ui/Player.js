import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

class Player extends React.Component {
  render() {
    let player = this.props.player;
    return (
      <div key={player._id} className="item">
        <p>
          {player.name} has {player.score} point(s).
        </p>
        <button onClick={() => Players.update(player._id, {$inc: {score: 1}})}>+1</button>
        <button onClick={() => Players.update(player._id, {$inc: {score: -1}})}>-1</button>
        <button onClick={() => Players.remove(player._id)}>X</button>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};


export default Player;
