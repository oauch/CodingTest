function solution(myString) {
    let answer = '';
    for (let i = 0; i < myString.length; i++) {
        if (myString[i].includes('A')) {
            answer += myString[i];
        }
        else if (myString[i].includes('a')) {
            answer += 'A'
        } else {
            answer += myString[i].toLowerCase();
        }
    }
    return answer;
}