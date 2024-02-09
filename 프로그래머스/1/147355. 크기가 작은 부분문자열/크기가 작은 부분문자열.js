function solution(t, p) {
    let count = 0;
    for (let i = 0; i <= t.length; i++) {
        if (t.slice(i, i + p.length).length !== p.length) continue;
        if (t.slice(i, i + p.length) <= p) count += 1;
    }
    return count;
}
