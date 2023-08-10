// # 📝 [JavaScript] 약수의 개수와 덧셈

// ## ▷ 문제 설명

// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// ## ▷ 제한사항

// - 1 ≤ left ≤ right ≤ 1,000


// ## ▷ 입출력 예

// ```jsx
// solution("{{2},{2,1},{2,1,3},{2,1,3,4}}") // [2, 1, 3, 4]
// solution("{{1,2,3},{2,1},{1,2,4,3},{2}}") // [2, 1, 3, 4]
// solution("{{20,111},{111}}") //	[111, 20]
// solution("{{123}}") // [123]
// solution("{{4,2,3},{3},{2,3,4,1},{2,3}}") // [3, 2, 4, 1] 
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(s) {
//   let answer = [];
//   s = s.replaceAll("{","[")
//   s = s.replaceAll("}","]")
//   s = JSON.parse(s)
  
//   s.sort((a, b) => {
//     return a.length - b.length
//   })
    
//   s.forEach((col) => {
//     col.forEach((row) => {
//       if (!answer.includes(row)) answer.push(row);
//     });
//   });
//   return answer
// }
// ```

// ## ▷ 접근 방식
// 문자열로 s를 받아오기 때문에 일단 배열안에 배열로 repalceAll 매서드를 사용해서 변환해주고 문자열을 JSON.parse 매서드로 벗겨줬다. 그리고 length를 기준으로 정렬을 해주고, forEach문을 통해서 배열안에 배열의 숫자들을 접근해주고, 그 수가 없다면 answer에 push하는 식으로 문제를 풀이했다.

// ---
// >
// 출처: [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=javascript)
// >
