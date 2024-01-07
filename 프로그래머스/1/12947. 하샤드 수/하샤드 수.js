function solution(x) {
    let result = 0;
    
    for(let i of String(x)) {
        result += Number(i);
    }
    
    return x % result === 0 ? true : false;
}