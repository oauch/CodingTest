function solution(numbers, n) {
    let answer = 0;
    numbers.map((num) => answer > n ? answer : answer += num);
    return answer;
}