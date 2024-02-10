function solution(name, yearning, photo) {
    const memory = {};
    for (let i = 0; i < name.length; i++) {
        memory[name[i]] = yearning[i];
    }

    // 각 포토 마다의 점수를 배열로 구해야 하므로 map을 이용한다.
    return photo.map((arr) => arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0));
}