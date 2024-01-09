function solution(s) {
    let alph = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    alph.map((val, index) => s = s.split(val).join(index))
    return Number(s);
}
