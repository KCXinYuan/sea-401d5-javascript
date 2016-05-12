function counter() {
  var count = 0;
  console.log(++count);
}

counter();
console.log(count); // count is declared inside the function counter, cannot be seen outisde of it; "scope"
