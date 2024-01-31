function solution(n) {
    const answer = new Array(n).fill().map(() => new Array(n).fill(0));
    answer.map((val, index) => val[index] = 1);
    return answer;
}
