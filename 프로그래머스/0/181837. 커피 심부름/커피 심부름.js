function solution(order) {
    let result = 0;
    for (i of order) {
        if (i.includes('americano')) result += 4500;
        else if(i.includes('cafelatte')) result += 5000;
        else result += 4500;
    }
    return result;
}
