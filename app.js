// ---------Task 1----------------
const Number1 = prompt("Первое число:");
const Number2 = prompt("Второе число:");

if (Number1 < Number2) {
  alert(Number1 + " меньше " + Number2);
} else {
  alert(Number2 + " меньше " + Number1);
}


// -------------------Task 2------------------
for (let i = 0; i <= 5; i++) {
    let cycle = "";
    for (let j = 0; j <= i; j++) {
      cycle += "*";
    }
    console.log(cycle);
  }
  

// ---------------------Task 3------------------
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }