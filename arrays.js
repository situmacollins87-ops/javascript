let arr =[1,2,3,"javascript", "python","false"]
console.log(arr)
//notes in the book 
//indexing
console.log(arr[2])
//method 2 on indexing 
console.log(arr.at(4))
//method 3 allowing negative indexing
console.log(arr.at(-1))
//updating 
arr[5]=true
console.log(arr)
//lenghth
console.log(arr.length)
//slice
console.log(arr.slice(1,4))
//adding items 
arr.push(100,200)
arr.unshift("jack","Jill")
console.log(arr)
//removing
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
//splice to add without deleting 
let numbers=[1,2,3,4,5,6,7]
numbers.splice(3,0,"js","c++")
console.log(numbers)
//splice to remove with replacement
numbers.splice(5,2,"four","five")
console.log(numbers)
//splice to remove with replacement
numbers.splice(7,2)
console.log(numbers)