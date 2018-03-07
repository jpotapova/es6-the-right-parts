function foo(a, b, c, ...args) {
  return [a, ...args];
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return foo(...a1, ...a2);
}

console.log(bar().join('') === '281012');
