function solution(score) {
    let avg = score.map((val) => (val[0] + val[1]) / 2);
    
    let sorted = avg.slice().sort((a, b) => b - a);
    
    return avg.map((val) => sorted.indexOf(val) + 1); 
}