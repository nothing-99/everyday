function solution(numbers) {
    // 0 ~ 9 숫자 개수
    const count = 10;

    // 0 ~ 9 까지의 배열 만들고 
    // 0 ~ 9 까지의 총합
    let ret = Array.from({length: count}, (_, index) => {
        return index;
    }).reduce((acc, cur) => acc += cur, 0);
    
    // 0 ~ 9 총합에서 있는 숫자 빼기
    for (let num of numbers) {
        ret -= num;
    }
    
    return ret;
}