// # 📝 [JavaScript] 카펫
// ---
// ![](https://velog.velcdn.com/images/middledown12/post/c3807f3c-12e1-4d8d-b0d2-aa2ddca8bea4/image.png)![](https://velog.velcdn.com/images/middledown12/post/1eb5decf-8687-4f24-b384-a85962ac30b6/image.png)![](https://velog.velcdn.com/images/middledown12/post/3b096b4c-f2fe-4713-8300-cf681e86d261/image.png)![](https://velog.velcdn.com/images/middledown12/post/71fbfb42-1c2b-44f2-af45-207a6a767a4d/image.png)

// ## ▷ 입출력 예

// ```jsx
// solution(10, 2) // [4, 3]
// solution(8, 1) //	[3, 3]
// solution(24, 24) //	[8, 6]
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(brown, yellow) {
//   let answer = [];

//   for(width = 1; width <= yellow; width++) {
//     let height = yellow / width;

//     if (width >= height) {
//       if (brown === width * 2 + 2 + height * 2 + 2) {
//         answer = [width+2, height+2];
//       }
//     }
//   }
//   return answer;
// }
// ```

// ## ▷ 접근 방식
// 문제를 이해하니 풀이는 쉬웠다. yellow를 가로로 나눴을 때 리턴값과, 노란색 카펫의 격자수(x, y) -> 갈색 테두리 (x*2 + y*2 + 4; 여기서 4=모서리값)의 리턴값이 같을경우 정답을 리턴하는 식으로 풀이했다.

// ---
// >
// 출처: [프로그래머스](https://programmers.co.kr/)
// >
