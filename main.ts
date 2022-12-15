
function fizz(n: number) {
    return (n % 3 == 0) ? 'fizz' : n;
} 

function fizzChecker(n: number, result: string) {
    return fizz(n) == result;
    
}

var testsPassed = true; 
const expectedOutput = ['fizz', '1', '2', 'fizz', '4', '5', 'fizz', '7', '8', 'fizz', '10', '11', 'fizz', '13', '14', 'fizz', '16', '17', 'fizz', '19', '20'];

for (let i = 1; i < 20; i++) {
   if (!fizzChecker(i, expectedOutput[i])) {
    testsPassed = false;
   };
}
console.log(testsPassed ? 'GREEN' : 'RED');