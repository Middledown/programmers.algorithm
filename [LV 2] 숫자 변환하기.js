// # 📝 [JavaScript] 숫자 변환하기

// ## ▷ 문제 설명
// 자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

// - x에 n을 더합니다
// - x에 2를 곱합니다.
// - x에 3을 곱합니다.
// 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.

// ## ▷ 제한사항
// - 1 ≤ x ≤ y ≤ 1,000,000
// - 1 ≤ n < y

// ## ▷ 입출력 예

// ```jsx
// solution(10, 40, 5) // 2
// solution(10, 40, 30) // 1
// solution(2, 5, 4) //	-1
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(x, y, n) {
//   let answer = -1;
//   let count = 0;
  
//   function counting(y, count) {
//     if(x === y) {
//       if(answer === -1) answer = count;
//       else {
//         if(answer > count) answer = count;
//       }
//       return;
//     }
//     else if (x > y) return;
//     else {
//       counting(y / 2, count + 1);
//       counting(y / 3, count + 1);
//       counting(y - n, count + 1);
//     }
//   }
  
//   counting(y, count);
//   return answer;
// }
// ```

// ## ▷ 접근 방식
// 처음에 위의 풀이처럼 풀었는데 테스트케이스 14개 중 7개가 시간 초과가 나와서 다음에 다시한번 풀어봐야 할 것 같다.
// 다른 사람들이 푼 풀이를 봤는데 bfs를 활용한 풀이가 많아서 bfs를 공부해서 풀어봐야겠다.

// ---
// >
// 출처: [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/154538?language=javascript)
// >
