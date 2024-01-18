function solution(array, commands) {
    const result = []
    for (i of commands) {
        result.push(array.slice(i[0]-1, i[1]).sort((a, b) => a - b)[i[2]-1]);
    }
    return result;
}