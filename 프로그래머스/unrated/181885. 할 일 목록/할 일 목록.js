function solution(todo_list, finished) {
    let result = []
    todo_list.map((todo, index) => finished[index] === false ? result.push(todo) : false);
    return result;
}