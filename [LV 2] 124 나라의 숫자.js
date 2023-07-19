// # 📝 [JavaScript] 124 나라의 숫자
// ---

// ## ▷ 문제 설명
// ![](https://velog.velcdn.com/images/middledown12/post/4a2e91d3-8d62-4277-83aa-a07af73fe5b3/image.png)



// ## ▷ 제한사항
// ![](https://velog.velcdn.com/images/middledown12/post/930d854d-9232-434c-bdca-4430ecddf75d/image.png)





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
