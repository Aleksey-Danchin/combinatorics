![combinatorics](https://pp.userapi.com/c854324/v854324191/53046/7kGFZYy3XbI.jpg)

Samples:

```javascript
import { combination, permutation, placement } from 'combinatorics'

const array = [1, 2, 3]
const alphabet = ['a', 'b']

for (const subArray of permutation(array)) {
  console.log(subArray)
}
// [ 1, 2, 3 ]
// [ 1, 3, 2 ]
// [ 2, 1, 3 ]
// [ 2, 3, 1 ]
// [ 3, 1, 2 ]
// [ 3, 2, 1 ]

for (const subArray of placement(array, 2)) {
  console.log(subArray)
}
// [ 1, 2 ]
// [ 1, 3 ]
// [ 2, 1 ]
// [ 2, 3 ]
// [ 3, 1 ]
// [ 3, 2 ]

for (const subArray of combination(array, 2)) {
  console.log(subArray)
}
// [ 1, 2 ]
// [ 1, 3 ]
// [ 2, 3 ]

for (const subArray of byAlphabet(alphabet, 3)) {
  console.log(subArray)
}
// [ 'a', 'a', 'a' ]
// [ 'a', 'a', 'b' ]
// [ 'a', 'b', 'a' ]
// [ 'a', 'b', 'b' ]
// [ 'b', 'a', 'a' ]
// [ 'b', 'a', 'b' ]
// [ 'b', 'b', 'a' ]
// [ 'b', 'b', 'b' ]

for (const subArray of multiplication([true, false], [1, 2, 3], ['a', 'b'])) {
  console.log(subArray)
}
// [ true, 1, 'a' ]
// [ false, 1, 'a' ]
// [ true, 2, 'a' ]
// [ false, 2, 'a' ]
// [ true, 3, 'a' ]
// [ false, 3, 'a' ]
// [ true, 1, 'b' ]
// [ false, 1, 'b' ]
// [ true, 2, 'b' ]
// [ false, 2, 'b' ]
// [ true, 3, 'b' ]
// [ false, 3, 'b' ]

console.log(P(10))
// 3628800

console.log(A(3, 10))
console.log(A(10, 3))
// 604800

console.log(C(3, 10))
console.log(C(10, 3))
// 100800
```