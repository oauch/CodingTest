function solution(arr) {
    var answer = [];
    if (arr.length === 1) {
        answer.push(-1);
    }
    else {
        answer = arr.filter((element) => element !== Math.min(...arr));
    }
    return answer;
}