import {average, sum} from "./stats";

let expected, result

result = sum([1, 2,3])
expected = 6

if (result === expected) {
  console.log("✅")
} else {
  throw new Error(`❌ ${result} is not equal to ${expected}`)
}

result = average([1, 2, 3])
expected = 2

if (result === expected) {
  console.log("✅")
} else {
  throw new Error(`❌ ${result} is not equal to ${expected}`)
}
