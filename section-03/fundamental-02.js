console.log(`Helloz`)
// While loop
let randomNumber = Math.trunc(Math.random()*6) + 1
while(randomNumber !== 6) {
    console.log(`Your roll is ${randomNumber}`)
    randomNumber = Math.trunc(Math.random()*6) + 1
}
console.log(`Loop randomNumber is end`)

