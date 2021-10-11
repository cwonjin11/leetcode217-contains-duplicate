// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
//  var containsDuplicate = function(nums) {
var containsDuplicate = function(nums)  { 
  // console.log(nums)
  const set = new Set(nums);
  // console.log(set)
  return set.size !== nums.length

}

console.log(containsDuplicate(nums = [1,2,3,4]))
console.log(containsDuplicate(nums = [1,2,3,4,1]))