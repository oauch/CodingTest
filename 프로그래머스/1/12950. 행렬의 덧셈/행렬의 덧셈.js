function solution(arr1, arr2) {
    return arr1.map((val, i) => val.map((val2, j) => val2 + arr2[i][j]));
}