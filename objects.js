let person={
    "name" : "Collins Sami",
    "age"  :21,
    "address" :"149 Nakuru",
    is_student :true,
    "my skills" : ["cloud","SRE"]

}
console.log(person)
//dot notation
console.log(person.name)
//bracket_notation
console.log(person["my skills"])
console.log(person['is_student'])
//object methods-notes in book
console.log(Object.values(person))
console.log(Object.keys(person))
console.log(Object.entries(person))
