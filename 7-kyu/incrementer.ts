export function incrementer(nums: number[]): number[] {
  return nums.map((value, index) => {
    const num = value + index + 1;
    return num  % 10
  });
}


console.log(incrementer([4, 6, 9, 1, 3]))