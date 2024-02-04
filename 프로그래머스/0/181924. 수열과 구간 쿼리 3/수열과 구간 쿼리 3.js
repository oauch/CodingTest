function solution(arr, queries) {
    queries.map((val) => [arr[val[0]], arr[val[1]]] = [arr[val[1]], arr[val[0]]])
    return arr;
}
