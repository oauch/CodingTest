function solution(n) {
    const origin = n.toString(2).split('1').length;
    while (1) {
        n++;
        if (n.toString(2).split('1').length === origin) return n;
    }
}