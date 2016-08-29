import { INCREMENT_SCORE, CLEAR_SCORE } from '../actions'

const initialState = {
  scoreCard:[
				{
					playerName:"Player 1",
					id: 0,
					score: 0,
					advantage: false,
				},
				{
					playerName:"Player 2",
					id: 1,
					score: 0,
					advantage: false
				}
			],
  winner: ''
};

function scoreReducer (state = initialState, action) {
	switch (action.type){
		case INCREMENT_SCORE:
			var newState = Object.assign({}, state);
			
			var currentPlayer = newState.scoreCard[action.scorer.id];
			var otherPlayer = newState.scoreCard[action.other.id];
						
			if (currentPlayer.score === 0 ) {
				currentPlayer.score = 15;
			}
			else if (currentPlayer.score === 15) {
				currentPlayer.score = 30;
			}
			else if (currentPlayer.score === 30) {
				currentPlayer.score = 40
			}
			else if (currentPlayer.score === 40 && otherPlayer.score !== 40) {
				//scorer is winner!
				console.log(`Player with id: ${currentPlayer.id} is winner` );
				newState.winner = currentPlayer.playerName;
			}
			else if (currentPlayer.advantage) {
				//scorer is winner!
				console.log(`Player with id: ${currentPlayer.id} is winner`);
				newState.winner = currentPlayer.playerName;
			}
			else if (otherPlayer.advantage) {
				//wipe other player's advantage
				otherPlayer.advantage = false;				
			}
			else if (!currentPlayer.advantage && !otherPlayer.advantage) {
				//only add advantage when no player has already an advantage
				currentPlayer.advantage = true;			
			}
			return newState;
		case CLEAR_SCORE:
			var newState = Object.assign({}, state);
			newState.scoreCard[0].score = 0;
			newState.scoreCard[0].advantage = false;
			newState.scoreCard[1].score = 0;
			newState.scoreCard[1].advantage = false;
			newState.winner = '';
			return newState;
		default:
		return state
	}
	
} 

export default scoreReducer