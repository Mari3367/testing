function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));// for rest of args calles this function, then this func passes rest of args to the curried args
        }
      }
    };
  
  }

  function sum(a, b, c) {
    return a + b + c;
  }
  
  // let curriedSum = curry(sum);

  // console.log(curriedSum(1, 2, 3));
  // console.log(curriedSum(1) (2, 3));
  // console.log(curriedSum(1) (2) (3));

  // let arr = ['tom', 'bob'];
  // console.log(arr[1]);

let str = '<h1> Hello world!</h1>';
let regexp = /<(.*?)>/g;
let matchAll = str.matchAll(regexp);

// for (match of matchAll) {
//   // console.log(match);
//   for (let item of match) {
//     console.log(item);
//   }
// }
// console.log(matchAll);
// let result = Array.from(matchAll);
// console.log(result[1]);

let myString = 'I jump over jump the puddle.';
console.log(myString.replace(/jump/g, 'fly'));