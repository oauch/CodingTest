function solution(s) {
    let array = s.split(' ');
    let result = [];
    for (i of array) {
        let formatWord = '';
        for (let j = 0; j < i.length; j++) {
            if (j % 2 === 0){
                formatWord += i[j].toUpperCase();
            } else {
                formatWord += i[j].toLowerCase();
            }
        }
        result.push(formatWord);
    }
    return result.join(' ');
}