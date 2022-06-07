function solution(numbers) {
  let ret = [];
  for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i+1; j < numbers.length; j++) {
          ret.push(numbers[i] + numbers[j]);
      }
  }    
  
  return Array.from(new Set(ret)).sort((a, b) => a - b);
}
