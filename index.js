// Add your functions here

// my own map-like methods
//     map returns an array with all values made negative
//       1) transforms correctly
//       map returns an array with the original values
//         2) transforms correctly
//       map returns an array with the original values multiplied by 2
//         3) transforms correctly
//       map returns an array with the original values squared
//         4) transforms correctly

function map(array, callback) {
    const n = [];
  
    for (let i = 0; i < array.length; i++) {
      const theElement = array[i];
      n.push(callback(theElement));
    }
  
    return n;
  }

//   function map(src, callback) {
//     const r = [];
  
//     for (let i = 0; i < src.length; i++) {
//       const theElement = src[i];
//       r.push(callback(theElement));
//     }
  
//     return r;
//   }
  
  
//   my own reduce-like methods
//     reduce returns a running total when not given a starting point
//       5) reduces correctly
//     reduce returns a running total when given a starting point
//       6) reduces correctly
//     reduce returns true when all values are true
//       7) reduces correctly
//     reduce returns false when any value is false
//       8) reduces correctly
//     reduce returns true when a true value is present
//       9) reduces correctly
//     reduce returns false when no true value is present
//       10) reduces correctly
function reduce(src, callback, startingValue) {
    let total;
    if (startingValue) {
      total = startingValue;
      for (let i = 0; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    } else {
      total = src[0];
      for (let i = 1; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    }
  }