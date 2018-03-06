var x = 2,
  fns = [];

(function() {
  const x = 5;

  for (let i = 0; i < x; i++) {
    fns[i] = () => i * 1;
  }
})();

console.log(x * 2 === fns[x * 2]());
// true
