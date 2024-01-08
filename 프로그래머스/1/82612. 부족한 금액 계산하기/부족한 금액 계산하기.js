function solution(price, money, count) {
    let allMoney = 0;
    
    for (let i = 1; i <= count; i++) {
        allMoney += price * i;
    }

    return allMoney <= money ? 0 : allMoney - money;
}

