function solution(myString, pat) {
    let count = 0;
    for(let i in myString) {
        if (myString.split('').splice(i, pat.length).join('') === pat) {
            count += 1;
        }
    }
    return count;
}