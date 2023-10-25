function solution(myString, pat) {
    let reverseString = '';
    for (let i of myString) {
        if (i === 'A') {
            reverseString += 'B'
        } else {
            reverseString += 'A'
        }
    }
    return reverseString.includes(pat) ? 1 : 0;
}