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
	await roll(0, 52.5, 3)
	setMainLed({r:1, g:1, b:253})
	await scrollMatrixText('blue', {r:2, g:2, b:123}, 25, true)
	await speak('blue')
//Roll to sound then play sound
	await roll(90, 52.5, 2)
	await Sound.play(true)
//Roll to red then Red LED
	await roll(180, 68, 1)
	await roll(225, 67, 1)
	await delay(1)
	setMainLed({r:224, g:1, b:0})
	//Sound 2
	await roll(135, 50,1)
	await delay(1)
	await roll(45,68,1)
	await delay(1)
	await Sound.play(true)
	
	//reset
	await roll(0,0,2)
	
} 