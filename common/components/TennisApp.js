import React, { Component } from 'react'

class TennisApp extends Component {
  render() {
    const { score, clearScore, stateObj } = this.props
    return (
			<div>
				<div>
					{stateObj.scoreCard.map((playerInfo, i) => <Player key = {i} playerData = {playerInfo}/>)}
				</div>
				<div>
					<PlayerWinner winner = {stateObj.winner}/>
				</div>
				<div>
					<button disabled={stateObj.winner ? 'disabled' : ''} onClick = {score.bind(this,stateObj.scoreCard[0], stateObj.scoreCard[1])}>{stateObj.scoreCard[0].playerName} Scored</button>
					<button disabled={stateObj.winner ? 'disabled' : ''} onClick = {score.bind(this,stateObj.scoreCard[1], stateObj.scoreCard[0])}>{stateObj.scoreCard[1].playerName} Scored</button>
				</div>
				<div>
					<button onClick = {clearScore}>Reset</button>
				</div>
			</div>
    )
  }
}

class Player extends Component {
	render() {
		return (
			<div>
				<div>{this.props.playerData.playerName} Score: {this.props.playerData.score} {this.props.playerData.advantage ? <span>A</span> : ''}</div>
			</div>
		)
	}
}

class PlayerWinner extends Component {
	render() {
		return (
			<div>
				{this.props.winner ? <span>{this.props.winner} is the winner!</span> : ''}
			</div>
		)
	}
}


export default TennisApp
