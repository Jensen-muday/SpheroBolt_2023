// Team members: Jensen Muday, Brian Kuhn
// Name Jensen Muday
// Date: 1.22.2024
// Program: Maze
// Bolt ID: SB-F28B
/*
//initial start message
async function startProgram() {
	await scrollMatrixText('Start!', {r:9, g:255, b:123}, 25, true)
	await speak('Start')
}
*/
//Roll to Blue then Blue LED
async function startProgram() {
	await roll(0, 105, 1.5)
	setMainLed({r:1, g:1, b:253})
}
