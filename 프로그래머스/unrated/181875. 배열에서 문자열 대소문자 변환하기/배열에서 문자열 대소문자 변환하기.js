function solution(strArr) {
    const result = [];
    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) {
            let lowerStr = strArr[i].toLowerCase();
            result.push(lowerStr);
        } else {
            let upperStr = strArr[i].toUpperCase();
            result.push(upperStr);
        }
    }
    return result;
}
