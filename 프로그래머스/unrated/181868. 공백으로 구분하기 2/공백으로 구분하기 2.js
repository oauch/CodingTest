function solution(my_string) {
    let result = [];
    let string = my_string.split(' ');
    string.map((word) => word !== '' ? result.push(word) : word);
    return result;
}