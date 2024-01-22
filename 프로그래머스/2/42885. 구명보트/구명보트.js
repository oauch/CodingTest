function solution(people, limit) {
    let count = 0;
    let sortedPeople = people.sort((a, b) => a - b);
    
    while (sortedPeople.length !== 0) {
        if (sortedPeople[0] + sortedPeople[sortedPeople.length - 1] <= limit) {
            count++;
            sortedPeople.shift();
            sortedPeople.pop();
        } else {
            count++;
            sortedPeople.pop();
        }
    }
    return count;
}