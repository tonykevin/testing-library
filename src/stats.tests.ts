import {sum} from "./stats";

const result = sum([1, 2,3])
const expected = 6

if (result === expected) {
  console.log("✅")
} else {
  throw new Error(`❌ ${result} is not equal to ${expected}`)
}