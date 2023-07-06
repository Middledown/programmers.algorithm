// # 📝 [LV 2] 뒤에 있는 큰 수 찾기
// ---

// 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

// ### 제한사항
// - 4 ≤ numbers의 길이 ≤ 1,000,000
//   - 1 ≤ numbers[i] ≤ 1,000,000

// ## ▷ 입출력 예

// ```jsx
// solution([2, 3, 3, 5])	// [3, 5, 5, -1]
// solution([9, 1, 5, 3, 6, 2]) // [-1, 5, 6, 6, -1, -1]
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(numbers) {
//   let answer = [];

//   for(let i = 0; i < numbers.length; i++) {
//     let num = -1;
//     for(let j = i + 1; j < numbers.length; j++) {
//       if(numbers[i] < numbers[j]) {
//         num = numbers[j]
//         break;
//       }
//     }
//     answer.push(num)
//   }
//   return answer;
// }
// ```

// ## ▷ 접근 방식
// 이중 for문을 사용하여 기준이되는 i번째 인덱스와 그 뒤에 있는 모든 수를 비교해서 큰 수가 있으면 num에 재할당해서 answer배열에 push() 해주는 식으로 접근해봤지만 테스트 20 ~ 23까지 실패 (시간 초과)가 나와서 풀이에 실패했다.

// ## ▷ 다시 푼 풀이

// ```jsx
// function solution(numbers) {
//   let answer = new Array(numbers.length).fill(-1)
//   let stack = [];
//   for(let i = 0; i < numbers.length; i++) {
//     while(stack.length && numbers[stack.at(-1)] < numbers[i]){
//       answer[stack.pop()] = numbers[i]
//     }
//     stack.push(i)
//   }
//   return answer
// }
// ```

// ## ▷ 접근 방식
// 요소가 모두 -1인 값을 가진 answer배열을 생성하고, numbers를 한번씩 돌면서 스택에 값이 있고, stack 맨 앞 값 < numbers[i] 라면 그 stack 인덱스는 numbers[i] 가 가장 가까운 값이라고 정해서, 스택에 있는 마지막요소를 제거해주고, 그 값에는 numbers[i] 값을 할당했다. 그리고 i를 스택에 푸쉬해주는 것을 반복했다.
// ---
// >
// 출처: [프로그래머스](https://programmers.co.kr/)
// >
