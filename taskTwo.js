function properties(cars){
	for (let key in cars){
	console.log(`${key}: ${cars[key]}`)
	}
} 


const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021
};	

properties(car)
