function solution(s) {
    return Array.from(s).sort((a, b) => {
        return b.charCodeAt() - a.charCodeAt();
    }).join('');
}