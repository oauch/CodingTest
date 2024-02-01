function solution(my_string, s, e) {
    let split_string =  my_string.split('');
    let slice_answer = split_string.slice(s, e + 1).reverse();
    
    split_string.splice(s, e + 1 - s, ...slice_answer).join(',');
    
    return split_string.join('');
}
