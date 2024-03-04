function solution(strArr) {
    
    const a = strArr.map((val) => val.length);
    const result = {}
    a.forEach((val) => result[val] = (result[val] || 0) + 1);
    
    return Math.max(...Object.values(result));
    
    // 실패케이스
    // for (let i of strArr) {
    //     answer.push(i.length);
    //     result.push(answer.sort().map((val) => val === i.length).filter((val) => val).length);
    // }
    // return Math.max(...result);
}
