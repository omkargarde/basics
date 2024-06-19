function test(arr1: number[], arr2: number[]): number[] {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (!arr1.includes(arr2[j])) {
        arr1.push(arr2[j]);
      }
    }
  }
  return arr1.sort((a, b) => a - b);
}
/**
 * Combines two arrays and returns a new sorted array with unique elements.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns A new sorted array with unique elements.
 */
function test2(arr1: number[], arr2: number[]): number[] {
  let combinedArr: number[] = [...new Set([...arr1, ...arr2])];
  combinedArr.sort((a, b) => a - b);
  return combinedArr;
}
let arr1: number[] = [2, 3, 5];
let arr2: number[] = [1, 2, 4, 6, 7, 8];
console.log(test(arr1, arr2));
console.log(test2(arr1, arr2));
