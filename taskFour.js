const Person = {
firstName: "Favour",
lastName: "Ibekwe",
}

function fullName(names){
for(let personsName in names){
	process.stdout.write(names[personsName]);	 
}

}
fullName(Person)