function solution(arr) {
    let answer = [];
    let firstIndex = arr.indexOf(2);
    let lastIndex = arr.lastIndexOf(2);
    if (firstIndex === -1) {
        answer.push(firstIndex);
    } else {
        for (let i = firstIndex; i <= lastIndex; i++) {
        answer.push(arr[i]);
        }
    }
    return answer;
}