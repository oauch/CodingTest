function solution(q, r, code) {
    return code.split('')
        .map((val, index) => index % q === r && val)
        .filter((val) => val).join('');
}
