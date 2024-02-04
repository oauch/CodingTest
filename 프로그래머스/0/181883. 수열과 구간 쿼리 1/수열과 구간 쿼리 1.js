function solution(arr, queries) {
    queries.map((val) =>{
                for (let i = val[0]; i <= val[1]; i++) {
                    arr[i] += 1;
                }
    })
    return arr;
}