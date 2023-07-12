// # 📝 [JavaScript] 로또의 최고 순위와 최저 순위
// ---

// ![](https://velog.velcdn.com/images/middledown12/post/88007024-afe7-487d-9fc6-4c10c859689f/image.png)

// ![](https://velog.velcdn.com/images/middledown12/post/f1889a4b-41e6-4d2c-b51c-ab37a6103f9f/image.png)

// ## ▷ 입출력 예

// ```jsx
// solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]) // [3, 5]
// solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]) // [1, 6]
// solution([45, 4, 35, 20, 3, 9],	[20, 9, 3, 45, 4, 35]) //	[1, 1]
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(lottos, win_nums) {
//   let min = 0;
//   let max = 0;
//   let answer = [0, 6, 5, 4, 3, 2, 1]
//   for(let i = 0; i < lottos.length; i++) {
//     if(lottos[i]  === 0) {
//       max++;
//     }
//     for(let j = 0; j < lottos.length; j++) {
//       if(lottos[i] === win_nums[j]) {
//         min++;
//         max++;
//       }
//     }
//   }
//   if(!min) {
//     min = 1
//   }
//   if(!max) {
//     max = 1
//   }
//   return [answer[max],answer[min]]
// }
// ```

// ## ▷ 접근 방식
// min과 max변수 설정을 해주고 6개를 맞추면 1등이기 때문에 6번째 인덱스에 1을 넣어주는 식으로 풀이했다. 이중 for문을 사용하니까 쉽게 풀이할 수 있었던 것 같다.

// ---
// >
// 출처: [프로그래머스](https://programmers.co.kr/)
// >
