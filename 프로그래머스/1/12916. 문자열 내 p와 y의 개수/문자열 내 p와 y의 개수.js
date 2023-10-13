function solution(s){
    let answer = true;
    let result1 = 0;
    let result2 = 0;
    s = s.toLowerCase();
    for (let i of s) {
        if (i === 'p') {
            result1 += 1;
        } else if (i === 'y') {
            result2 += 1;
        }
    }
    console.log(result1);
    console.log(result2);
    if (result1 === result2) {
        return answer;
    } else {
        answer = false;
    }

    return answer;
}