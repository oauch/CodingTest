function solution(arr, n) {
    let answer = [];
    if (arr.length % 2 === 0) {
        for (let i in arr) {
            if (i % 2 !== 0) {
                answer.push(arr[i] + n);
            } else {
                answer.push(arr[i]);
            }
        }
    } else {
         for (let i in arr) {
            if (i % 2 === 0) {
                answer.push(arr[i] + n);
            } else {
                answer.push(arr[i]);
            }
        }
    }
    return answer;
}