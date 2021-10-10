// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
//  var containsDuplicate = function(nums) {
function containsDuplicate(nums)  { 
    
  const set = new Set(nums);
  return set.size !== nums.length

}

