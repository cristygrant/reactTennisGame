export const INCREMENT_SCORE = "INCREMENT_SCORE"
export const CLEAR_SCORE = "CLEAR_SCORE"

export function score(scoringPlayer, otherPlayer) {
	return {
		type: INCREMENT_SCORE,
		scorer: scoringPlayer,
		other: otherPlayer
	}
}
export function clearScore() {
	return {
		type: CLEAR_SCORE
	}
}

