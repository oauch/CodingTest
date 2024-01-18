function solution(array, commands) {
    const result = [];
    for (const cmd of commands) {
        const [start, end, k] = cmd;
        const slicedArray = array.slice(start - 1, end);
        const sortedArray = slicedArray.sort((a, b) => a - b);
        const kthElement = sortedArray[k - 1];
        result.push(kthElement);
    }
    return result;
}