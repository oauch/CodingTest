function solution(num_list) {
    var answer = 1;
    let result = 0;
    for (let i of num_list) {
        answer *= i;
        result += i;
    }
    result *= result;
    
    if (answer < result) {
        return 1;
    } else {
        return 0;
    }
    
}