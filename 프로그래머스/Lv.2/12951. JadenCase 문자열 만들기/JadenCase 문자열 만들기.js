// 처음 시도할 때
// function solution(s) {
//     const test = s.split(' ').map((val) => val.toLowerCase());
//     return test.map((val) => val[0].toUpperCase() + val.slice(1)).join(' ');
// }


function solution(s) {
    return s.split(' ').map(sentence => sentence.replace(/\w/g, (t,idx)=>{
        return idx === 0 ? t.toUpperCase() : t.toLowerCase()
    })).join(' ')

}
