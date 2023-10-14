function solution(n) {
    const rv = [];
    for (let i of String(n)) {
        rv.push(Number(i));
    }
    rv.sort();
    rv.reverse();
    return Number(rv.join(''));
}