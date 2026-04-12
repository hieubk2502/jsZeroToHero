const fullName = 'Tran Minh Hieu'
const age = 25
const introduction = "I'm " + fullName + ". I'm " + age
const introductionNew = `I'm ${fullName}. I'm ${age} years old.`

console.log(introduction)
console.log(introductionNew)

// truethy falthy
// truethy coercion auto to true
// falthy coercion auto to false
// false 0 -0 0n "" null undefined NaN ==> false
// true " " [] {} 42 -1 "0" Infinity.  ==> true

console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(" "))


console.log(("Equal operation"))
// equal logic 
// == this operator will coercion( ep kieu) to primtive and commpare
// === this operator will compare direct and not coercion to primative

const age1 = '18'
const age2 = 18
console.log(age1 == age2)
console.log(age1 === age2)

switch(age1) {
    case 18: // Js using operator === to compare => false
        console.log(`In ${age1}`)
        break
    default:
        console.log("break")
        break
}




