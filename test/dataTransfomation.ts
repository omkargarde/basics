
const obj = [
  {
    key: "sample 1",
    data: "data 1",
  },
  {
    key: "sample 2",
    data: "data 2",
  },
  {
    key: "sample 1",
    data: "data 3",
  },
  {
    key: "sample 3",
    data: "data 4",
  },
  {
    key: "sample 1",
    data: "data 5",
  },
];
// iterator approach
console.log(obj);
let output = {};
obj.forEach((item) => {
  if (output[item.key]) {
    output[item.key].push(item);
  } else {
    output[item.key] = [item];
  }
});
console.log(output);

// reducer approach
let outputUsingReducer = obj.reduce((acc, item) => {
  if (acc[item.key]) {
    acc[item.key].push(item);
  } else {
    acc[item.key] = [item];
  }
  return acc;
}, {}); 
console.log(outputUsingReducer);
