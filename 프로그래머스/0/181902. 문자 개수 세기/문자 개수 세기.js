function solution(my_string) {
  const result = new Array(52).fill(0);

  for (char of my_string) {
    if (char >= 'A' && char <= 'Z') {
      result[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
     console.log(char.charCodeAt(0) - 'A'.charCodeAt(0))
    } else if (char >= 'a' && char <= 'z') {
      result[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
    }
  }

  return result;
}