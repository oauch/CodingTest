function solution(arr, n) {
    let answer = [];

    if(arr.length%2===0) {
        answer = arr.map((v,i)=>i%2 === 1 ? v + n : v);
    } else {
        answer = arr.map((v,i)=>i%2 === 0 ? v + n : v);
    }


    return answer;
}



// function solution(arr, n) {
//     let answer = [];
//     if (arr.length % 2 === 0) {
//         for (let i in arr) {
//             if (i % 2 !== 0) {
//                 answer.push(arr[i] + n);
//             } else {
//                 answer.push(arr[i]);
//             }
//         }
//     } else {
//          for (let i in arr) {
//             if (i % 2 === 0) {
//                 answer.push(arr[i] + n);
//             } else {
//                 answer.push(arr[i]);
//             }
//         }
//     }
//     return answer;
// }
