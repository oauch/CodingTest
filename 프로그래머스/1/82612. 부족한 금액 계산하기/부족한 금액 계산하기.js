function solution(price, money, count) {
    let allMoney = 0;
    
    for (let i = 1; i <= count; i++) {
        allMoney += price * i;
    }
    
    if (allMoney <= money) {
        return 0;
    }
    return allMoney - money;
    
}