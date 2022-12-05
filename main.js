
function fizz(num) {
    return (num % 3 == 0) ? 'fizz' : num;
} 

for (let i = 0; i < 20; i++) {
   console.log(fizz(i));
}