function solution(x, n) {
  return Array.from({length: n}, (_, v) => {
      return (v+1) * x;
  });
}
