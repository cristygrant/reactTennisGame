function getInitialScore() {
  return {scoreCard:[
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
		winner: ''}
}

export function fetchTennisGame(callback) {
	//mocking a callback
	return callback(getInitialScore())
}
