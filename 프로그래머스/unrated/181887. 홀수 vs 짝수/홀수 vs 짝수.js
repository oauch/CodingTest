function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.map((num, i) => i % 2 === 0 ? even += num : odd += num)
    if (even > odd) {
        return even
    } else {
        return odd;
    }
}