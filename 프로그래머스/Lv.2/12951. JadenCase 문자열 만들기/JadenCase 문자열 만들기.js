function solution(s) {
    return s.split(' ').map((val) => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()).join(' ');
}
