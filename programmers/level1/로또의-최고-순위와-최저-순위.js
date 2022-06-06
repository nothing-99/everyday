function solution(lottos, win_nums) {
    
    const zeros = lottos.reduce((ret, num) => {
        if (num === 0) ret++;
        
        return ret;
    }, 0);
    
    const set = new Set(win_nums);
    const correct = lottos.reduce((ret, num) => {
        if (set.has(num)) ret++;
        
        return ret;
    }, 0);
    
    const lowest = correct < 2 ? 6 : 7 - correct;
    const highest = correct + zeros < 2 ? 6 : 7 - (correct + zeros);
    
    // @return : [highest, lowest]
    return [highest, lowest]; 
}