// # 📝 [JavaScript] 124 나라의 숫자
// ---

// ## ▷ 문제 설명
// 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.




// | 10진법 | 124 나라 | 10진법 | 124 나라 |
// | :-: | :-: | :-: | :-: |
// | 1	| 1 | 6 | 14 |
// | 2 | 2 | 7 | 21 |
// | 3	| 4 | 8 | 22 |
// | 4	| 11 | 9 | 24 |
// | 5	| 12 | 10 | 41 |

// 자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.



// ## ▷ 제한사항
// 제한사항
//   - n은 50,000,000이하의 자연수 입니다.





// ## ▷ 입출력 예

// ```jsx
// solution(1) // 1
// solution(2) // 2
// solution(3) // 4
// solution(4) // 11
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(n) {
//   let answer = '';
//   while(n > 0) {
//     if(n % 3 === 0){
//       answer = '4' + answer;
//       n = n / 3 - 1;
//     } else if( n % 3 === 1) {
//       answer = '1' + answer;
//       n = Math.floor(n / 3);
//     } else if( n % 3 === 2){
//       answer = '2' + answer;
//       n = Math.floor(n / 3);
//     }
//   }
//   return answer;
// }
// ```

// ## ▷ 접근 방식
// 1. 나머지가 0 일 때 4, 1일 때 1, 2일 때 2가 붙음

// ---
// >
// 출처: [프로그래머스](https://programmers.co.kr/)
// >
