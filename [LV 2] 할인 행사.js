// # 📝 [JavaScript] 할인 행사
// ---

// ## ▷ 문제 설명
// ![](https://velog.velcdn.com/images/middledown12/post/715d58e1-b2cf-4f9b-8f7a-f4511db85713/image.png)


// ## ▷ 제한사항
// ![](https://velog.velcdn.com/images/middledown12/post/9ae77e97-3239-4d18-9951-d9962554d102/image.png)




// ## ▷ 입출력 예

// ```jsx
// solution(["banana", "apple", "rice", "pork", "pot"],	[3, 2, 2, 2, 1],	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]) //	3
// solution(["apple"],	[10],	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]) //	0
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(want, number, discount) {
//   let answer = 0;

//   // 10개씩 연속된 상품을 검사해야 하므로 discount 배열의 길이 - 9를 범위로 지정
//   for(let i = 0; i < discount.length - 9; i++) {
//     let j;
  
//     // 원하는 제품의 배열 인덱스를 가져오기 위해 사용
//     for(j = 0; j < want.length; j++) {
//       let check = 0;
      
//       // 현재 검사 중인 10개의 상품이 원하는 상품 중 몇 개를 포함하는지를 확인
//       for(let q = i; q < i + 10; q++) {
//         if(discount[q] === want[j]) {
//           check++;
//         }
//       }
      
//       // 10개의 상품 중 원하는 제품의 개수를 충족하지 못하면 for문을 멈춤
//       if(check < number[j]) {
//         break;
//       }
//     }
    
//     // 모든 원하는 제품의 개수를 만족하는 경우
//     if(j === want.length) {
//       answer++;
//     }
//   }
//   return answer;
// }
// ```

// ## ▷ 접근 방식
// 1. 10개씩 연속된 상품을 검사해야 하므로 discount 배열의 길이 - 9를 범위로 지정
// 2. 현재 검사 중인 10개의 상품이 원하는 상품 중 몇 개를 포함하는지를 확인
// 3. 10개의 상품 중 원하는 제품의 개수를 충족하지 못하면 for문을 멈춤
// 4. 모든 원하는 제품의 개수를 만족하는 경우 answer++

// ---
// >
// 출처: [프로그래머스](https://programmers.co.kr/)
// >
