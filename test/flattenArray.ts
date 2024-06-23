const arr = [1, 2, 3, { test: "asd" }, [4, { test: "asd" }, [5, 6], 7], 8, 9];

function flattenArray(arr, flattenedArray) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      flattenedArray.push(arr[i]);
    } else {
      flattenArray(arr[i], flattenedArray);
    }
  }
  return flattenedArray;
}

function flattenArrayWithReducer(array) {
  return array.reduce((accumulator, value) => {
    return Array.isArray(value)
      ? accumulator.concat(flattenArrayWithReducer(value))
      : accumulator.concat(value);
  }, []);
}
console.log(flattenArrayWithReducer(arr));
console.log(flattenArray(arr, []));
