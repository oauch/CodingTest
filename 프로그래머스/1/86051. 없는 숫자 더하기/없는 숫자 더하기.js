function solution(numbers) {
    let result = 0;
    const chk_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    chk_numbers.filter((val) => !numbers.includes(val)).map((val) => result += val);
    
    return result;
}
