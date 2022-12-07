
function fizz(n: number) {
    return (n % 3 == 0) ? 'fizz' : n;
} 

function fizzChekcer(n: number, result: string) {
    return fizz(n) == result ? true : false;
    
}

for (let i = 1; i < 20; i++) {
   console.log(fizzChekcer(i, 'fizz'));
}