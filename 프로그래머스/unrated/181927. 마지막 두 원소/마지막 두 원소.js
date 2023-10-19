function solution(num_list) {
    let answer = [];
    let last1 = num_list.at(-1);
    let last2 = num_list.at(-2);
    num_list.map((num) => answer.push(num));
    if (last1 > last2) {
        answer.push(last1 - last2);
    } else {
        answer.push(last1 * 2);
    }
    return answer;
}