function solution(arr) {
    for (let i in arr) {
        for (let j in i) {
            if (arr[i][j] === arr[j][i]) {
                continue;
            } else {
                return 0;
            }
        }
    }
    return 1;
}