function solution(입력) {
    const 길이 = 입력.map((val) => val.length);
    const 길이의_갯수 = {};
    길이.map((val) => (길이의_갯수[val] = (길이의_갯수[val] ?? 0) + 1))
    return Math.max(...Object.values(길이의_갯수));
}