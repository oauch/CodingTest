function solution(ineq, eq, n, m) {
    var answer = 0;
    if (ineq === ">" && eq === "=") {
        if (Boolean(n >= m)) {
            answer = 1;
        }
    } else if (ineq === "<" && eq === "=") {
        if (Boolean(n <= m)) {
            answer = 1;
        }
    } else if (ineq === ">" && eq === "!") {
        if (Boolean(n > m)) {
            answer = 1;
        }
    } else {
        if (Boolean(n < m)) {
            answer = 1;
        }
    }
    return answer;
}