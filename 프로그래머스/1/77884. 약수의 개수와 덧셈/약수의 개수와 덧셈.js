function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let result = [];
        let index = 1;
        while (index <= i) {
            if (i % index === 0) result.push(index);
            index++;
        }
        if (result.length % 2 === 0) answer += i;
        if (result.length % 2 !== 0) answer -= i;
    }
    return answer;
}
