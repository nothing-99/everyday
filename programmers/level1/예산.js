function solution(d, budget) {
  let remaind = budget;
  return d.sort((a, b) => a - b).reduce( (count, require) => {
      if (require <= remaind) {
          count++;
          remaind -= require;
      }
      
      return count;
  }, 0)
}
