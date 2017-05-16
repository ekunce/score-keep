import React from 'react';

import {Players} from './../api/players';

class AddPlayer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    let name = e.target.playerName.value;

    if (name) {
      e.target.playerName.value ='';
      Players.insert({
        name,
        score: 0
      });
    }
  }

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
          <button className="button">Add player</button>
        </form>
      </div>
    )
  }
}

export default AddPlayer;
