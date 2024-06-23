const map = new Map();
function memoizeOne(fn) {
  console.log(fn);
  function temp(...args) {
    const key = args.join("_");
    if (map.has(key)) {
      console.log("cache hit");
      return map.get(key);
    }
    const result = fn(...args);
    map.set(key, result);
    return result;
  }
  return temp;
}

function memoizeTwo(fn) {
  const cache = [];
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("cache hit");
      return cache[key];
    } else {
      return (cache[key] = fn(...args));
    }
  };
}

const add = (a, b) => a + b;

// const add_memo = memoizeOne(add);
const add_memo = memoizeTwo(add);

console.log(add_memo(1, 2));
console.log(add_memo(1, 2));
