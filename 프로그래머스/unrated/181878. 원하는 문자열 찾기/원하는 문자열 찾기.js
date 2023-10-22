function solution(myString, pat) {
    let answer = 0;
    let a = myString.toUpperCase();
    let b = pat.toUpperCase();
    if (a.includes(b)) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}