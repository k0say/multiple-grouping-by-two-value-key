var arr = [
  { field: "b", operator: "ciao2", value: "nonono1" },
  { field: "a", operator: "ciao", value: "nonono2" },
  { field: "a", operator: "ciao", value: "nonono3" },
  { field: "a", operator: "ciao", value: "nonono4" }
];

var helper = {};
var result = arr.reduce(function(r, o) {
  console.log("R", r, "O", o);
  var key = o.field + "-" + o.operator;

  if (!helper[key]) {
    helper[key] = Object.assign({}, o); // create a copy of o
    r.push(helper[key]);
  } else {
    helper[key].value += "," + o.value;
  }

  return r;
}, []);

console.log(...result);
