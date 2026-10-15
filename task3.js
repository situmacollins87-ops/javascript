//question 3
const str = "helloworld";
const result = str.slice(0, 5) + "-" + str.slice(5);

console.log(result);
//question 1
const original = "planet";
const outcome = original.split("a").join(""); 
console.log(outcome);
//Compare fractions: Given a = 3, b = 7, c = 4, d = 9, determine which fraction is larger without dividing the fractions.
if ((a*d)>(b*c)){
    console.log(`${a/b} is larger`)
}else if ((a*d)<(b*c)){
    console.log(`${c/d} is larger`)
}else{
    console.log("Both are equal")
}


//Discount calculator: A customer gets a 5% discount for spending at least 1,000 and a 15% discount for spending at least 5,000. Calculate the final price.
let money_spent=Number(prompt("Enter money spent"))
if (money_spent>=1000){
    console.log(`Final price is ${money_spent*0.95}`)
}else if (money_spent>=5000){
    console.log(`Final price is ${money_spent*0.85}`)

}else{
    console.log(`Final price is ${money_spent*0.85},no discount applied`)
}
//Electricity billing: Calculate a bill using these rates: the first 100 units cost 5 per unit, the next 100 cost 8 per unit, and units above 200 cost 12 per unit.