function solution(arr) {
    let result  = [];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        for (let j = 0; j < num; j++) {
            result.push(arr[i]);
        }
    }
    return result;
}