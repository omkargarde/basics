// function example() {
//   let blog = "learnersbucket";
//   function displayBlog() {
//     console.log(blog);
//   }
//   displayBlog();
// }
// example();

function sum() {
  let a = 10;
  function add(b) {
    return Number(a + b);
  }
  return add;
}
const fn = sum();
let total = fn(20);
console.log(total);
