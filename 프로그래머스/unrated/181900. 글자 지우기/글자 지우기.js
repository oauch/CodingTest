function solution(my_string, indices) {
    return my_string.split('').filter((string, index) => !indices.includes(index)).join('');
}