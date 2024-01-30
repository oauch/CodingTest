function solution(board, k) {
    let answer = 0;
    board.map((val, index) => val.map((val2, index2) => index + index2 <= k && 
                                      (answer += board[index][index2])));
    return answer;
}
