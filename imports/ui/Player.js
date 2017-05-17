import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

class Player extends React.Component {
  render() {
    let player = this.props.player;
    return (
      <div key={player._id} className="item">
        <div className="player">
          <div>
            <h3 className="player__name">{player.name}</h3>
            <p className="player__stats">
               {this.props.player.rank} {this.props.player.position} {player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => Players.update(player._id, {$inc: {score: 1}})}>+1</button>
            <button className="button button--round" onClick={() => Players.update(player._id, {$inc: {score: -1}})}>-1</button>
            <button className="button button--round" onClick={() => Players.remove(player._id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};


export default Player;
