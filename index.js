module.exports = function(latitude, longitude){
	const converter = {}
	
	function getPair(){
		return { latitude: convertToDecimal(latitude), longitude: convertToDecimal(longitude) }
	}

	function convertToDecimal(coordinate){
		const hoursmins = coordinate.split(' ')
		let mins = parseFloat(hoursmins[1])
		const degrees = parseInt(hoursmins[0].match(/(\d+)/g)[0])
		const direction = hoursmins[0].match(/(\D+)/g)[0]
		mins = mins/60
		return ['n','e'].includes(direction.toLowerCase()) ?
			degrees + mins :
			(degrees * -1) - mins
	}

	converter.toDecimal = getPair
	return converter
}
