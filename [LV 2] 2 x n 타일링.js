// # 📝 [LV 2] 2 x n 타일링
// ---

// 가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

// 타일을 가로로 배치 하는 경우
// 타일을 세로로 배치 하는 경우
// 예를들어서 n이 7인 직사각형은 다음과 같이 채울 수 있습니다.

// ![](https://velog.velcdn.com/images/middledown12/post/dc854fbf-a9c6-407f-af94-ddb67f3b2d41/image.png)

// 직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

// ### 제한사항
// - 가로의 길이 n은 60,000이하의 자연수 입니다.
// - 경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.

// ## ▷ 입출력 예

// ```jsx
// solution(4) // 5
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(n) {
//   let answer = [];
//   answer.push(0, 1, 2)
//   for(let i = 3; i <= n; i++) {
//     answer[i] = (answer[i - 1] + answer[i - 2]) % 1000000007;
//   }
//   return answer[n];
// }
// ```

// ## ▷ 접근 방식
// 사실 나 혼자의 힘으로는 풀기 어려웠던 문제였던 것 같다.

// 위와 같이 푸니까 실패(시간 초과)가 나와서 다시 풀어봤다.

// ## ▷ 다시 푼 풀이

// ```jsx
// function solution(n) {
//     let answer = Array(n).fill(0);
//     answer[1] = 1
//     answer[2] = 2
//     for(var i = 3; i <= n; i++){
//         answer[i] = (answer[i-1] + answer[i-2]) % 1000000007
//     }
//     return answer[n];
// }
// ```

// ## ▷ 접근 방식

// 위의 풀이와 다시 푼 풀이의 다른점은 위의 풀이는 하나하나 추가해주는 코드라면, 다시 푼 풀이는 미리 배열을 0으로 채워두고 재할당해주는 식이다. 이걸 이해하려면 더 많은 문제를 풀어봐야 할 것 같다.

// ---
// >
// 참고: [longroadhome.log](https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-2-x-n-%ED%83%80%EC%9D%BC%EB%A7%81-JS)
// 출처: [프로그래머스](https://programmers.co.kr/)
// >
