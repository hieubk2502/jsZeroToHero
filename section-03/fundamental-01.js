console.log("Hieu dep trai")

function logger() {
    console.log("Hieu qua dz")
}

logger()
logger()

// Function declaration: Function that it is used before it's declared 
function printLog( name , className) {
    const res = `${name} - ${className}`
    return res
}


console.log(printLog('Hieu', 'Mechatronics engineer'))

// Function expression: Essentially a function value stored in a valiable
const fun1 = (name, className) => console.log(printLog(name, className))

// Arrow function: Great quick one line function
const fun2 = (name, className) => {
    console.log(printLog(name, className))
}
fun1('A', 'B')
fun2('C', 'D')

// Array, collection
const classList = ['A', 'B', 'C']
console.log(classList)

const mixList = ['Anh', 1, classList, classList]
console.log(mixList)
console.log(typeof mixList)
console.log(mixList[0])
console.log(mixList[2])

console.log(`Push, unshift`)
const friends = ['a','b','c']

friends.push('D')
friends.unshift('v')
console.log(friends)
friends.shift()
console.log(friends)
friends.pop()
console.log(friends)

/* Write your code below. Good luck! 🙂 */

function calcTip(billValue) {
    
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2
    
}

const bills = [125, 555, 44]
const tips = bills.map(calcTip)
const totals = bills.map((bill, i) => bill + tips[i])
console.log(bills)
console.log(tips)
console.log(totals)

console.log(`Object`)

const persion = {
    name: 'Hieu',
    age: '23',
    job: 'Dev',
    friends: ['A', 'B', 'C'],

    calcWithAge(numberInput) {
        return numberInput - this.age;
    },
    fullname: function() {
        return `MH`
    }
}
console.log(persion)
console.log(persion.name)
console.log(persion['age'])
console.log(typeof persion)

// const interestedIn = prompt('Choose ? ')
// if(persion[interestedIn]) {
//     console.log(persion[interestedIn])
// }else{
//     console.log('wrong')
// }

console.log(persion.calcWithAge(22))
console.log(persion.fullname())

// Loop

console.log(`Iterator loop`)

for(let x = 0; x < 10 ; x++) {
    console.log('Loop: ' + x)
}

const typeOfMixList = []
const typeofMixReverseList = []

for(let i = 0; i < mixList.length; i++) {
    console.log(`MixList:  ${mixList[i]} ${typeof mixList[i]} `)
    typeOfMixList.push(typeof mixList[i])
}
console.log(typeOfMixList)

for(let i = mixList.length - 1; i >= 0 ; i--) {
    typeofMixReverseList.push(typeof mixList[i])
}
console.log(`Reverse Type of mixList: ${typeofMixReverseList}`)

