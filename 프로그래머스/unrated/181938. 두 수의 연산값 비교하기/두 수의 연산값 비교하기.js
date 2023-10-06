function solution(a, b) {
    let answer = 0;
    ab = Number(String(a) + String(b));
    twoAB = 2 * a * b;
    if (ab > twoAB) {
        answer += ab;
    } else {
        answer += twoAB;
    }
    return answer;
}