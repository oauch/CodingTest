function solution(num_list) {
    const result = [];
    const sort_list = num_list.sort((a, b) => a - b);
    for (let i = 5; i < sort_list.length; i++) {
        result.push(sort_list[i]);
    }
    return result;
}