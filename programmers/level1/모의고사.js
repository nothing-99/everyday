function solution(answers) {
    // 3명의 학생에 대한 각각의 찍는 패턴
    const stuPatterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    // 각각의 학생의 찍는 패턴과 정답을 비교한다.
    let corrects = answers.reduce((ret, num, index) => {
        if (stuPatterns[0][index % stuPatterns[0].length] === num) ret[0]++;
        if (stuPatterns[1][index % stuPatterns[1].length] === num) ret[1]++;
        if (stuPatterns[2][index % stuPatterns[2].length] === num) ret[2]++;
        
        return ret;
    }, [0, 0, 0])
    
    // 최고 정답 수를 구한다.
    const maxNum = Math.max(...corrects);
    
    // 최고 점수를 받은 학생 배열을 구한다.
    return corrects.reduce((ret, num, index) => {
        if (num === maxNum) ret.push(index+1);
        
        return ret;
    }, [])
}