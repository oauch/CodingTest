function solution(arr1, arr2) {
    let answer = 0;
    let result1 = 0;
    let result2 = 0;
    if (arr1.length > arr2.length) {
        answer = 1;
    } else {
        answer = -1;
    }
    
    if (arr1.length === arr2.length) {
        arr1.map((num) => result1 += num);
        arr2.map((num) => result2 += num);
        if (result1 > result2) {
            answer = 1;
        } else if (result1 < result2) {
            answer = -1;
        } else {
            answer = 0;
        }
    }
    return answer;
}