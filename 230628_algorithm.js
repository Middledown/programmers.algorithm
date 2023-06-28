// # 오늘의 알고리즘 👍

// ## 📝 1. 달리기 경주
// ---

// 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.

// #### 제한사항
// - 5 ≤ players의 길이 ≤ 50,000
//   - players[i]는 i번째 선수의 이름을 의미합니다.
//   - players의 원소들은 알파벳 소문자로만 이루어져 있습니다.
//   - players에는 중복된 값이 들어가 있지 않습니다.
//   - 3 ≤ players[i]의 길이 ≤ 10
// - 2 ≤ callings의 길이 ≤ 1,000,000
//   - callings는 players의 원소들로만 이루어져 있습니다.
//   - 경주 진행중 1등인 선수의 이름은 불리지 않습니다.

// ### ▷ 입출력 예

// ```jsx
// solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]) //	["mumu", "kai", "mine", "soe", "poe"]
// ```

// ### ▷ 내 풀이

// ```jsx
// function solution(players, callings) {
//   let playersIndex = {};

//   for(let i = 0; i < players.length; i++) {
//     playersIndex[players[i]] = i
//   }

//   for(let i = 0; i < callings.length; i++) {
//     const index = playersIndex[callings[i]]
//     const arr = players[index - 1]

//     players[index - 1] = callings[i]
//     players[index] = arr

//     playersIndex[callings[i]] = index - 1;
//     playersIndex[arr] = index
//   }

//   return players;
// }
// ```

// ### ▷ 접근 방식
// 객체에 선수의 이름과 인덱스를 담아줘서 비교하고 이름이 불리면 앞에 있는 선수와 이름을 바꿔주는 식으로 접근해서 풀었다.

// ## 📝 2. 덧칠하기
// ---

// 어느 학교에 페인트가 칠해진 길이가 n미터인 벽이 있습니다. 벽에 동아리 · 학회 홍보나 회사 채용 공고 포스터 등을 게시하기 위해 테이프로 붙였다가 철거할 때 떼는 일이 많고 그 과정에서 페인트가 벗겨지곤 합니다. 페인트가 벗겨진 벽이 보기 흉해져 학교는 벽에 페인트를 덧칠하기로 했습니다.

// 넓은 벽 전체에 페인트를 새로 칠하는 대신, 구역을 나누어 일부만 페인트를 새로 칠 함으로써 예산을 아끼려 합니다. 이를 위해 벽을 1미터 길이의 구역 n개로 나누고, 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호를 붙였습니다. 그리고 페인트를 다시 칠해야 할 구역들을 정했습니다.

// 벽에 페인트를 칠하는 롤러의 길이는 m미터이고, 롤러로 벽에 페인트를 한 번 칠하는 규칙은 다음과 같습니다.

// - 롤러가 벽에서 벗어나면 안 됩니다.
// - 구역의 일부분만 포함되도록 칠하면 안 됩니다.

// 즉, 롤러의 좌우측 끝을 구역의 경계선 혹은 벽의 좌우측 끝부분에 맞춘 후 롤러를 위아래로 움직이면서 벽을 칠합니다. 현재 페인트를 칠하는 구역들을 완전히 칠한 후 벽에서 롤러를 떼며, 이를 벽을 한 번 칠했다고 정의합니다.

// 한 구역에 페인트를 여러 번 칠해도 되고 다시 칠해야 할 구역이 아닌 곳에 페인트를 칠해도 되지만 다시 칠하기로 정한 구역은 적어도 한 번 페인트칠을 해야 합니다. 예산을 아끼기 위해 다시 칠할 구역을 정했듯 마찬가지로 롤러로 페인트칠을 하는 횟수를 최소화하려고 합니다.

// 정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요.

// #### 제한사항
// - 1 ≤ m ≤ n ≤ 100,000
// - 1 ≤ section의 길이 ≤ n
//   - 1 ≤ section의 원소 ≤ n
//   - section의 원소는 페인트를 다시 칠해야 하는 구역의 번호입니다.
//   - section에서 같은 원소가 두 번 이상 나타나지 않습니다.
//   - section의 원소는 오름차순으로 정렬되어 있습니다.

// ### ▷ 입출력 예

// ```jsx
// solution(8,	4, [2, 3, 6]) // 2
// solution(5,	4, [1, 3]) // 1
// solution(4,	1, [1, 2, 3, 4]) // 4
// ```

// ### ▷ 내 풀이

// ```jsx
// function solution(n, m, section) {
//   let answer = 1;
//   let roll = section[0] + (m - 1);
//   console.log(roll)

//   for (let i = 0; i < section.length; i++) {
//     if (section[i] > roll) {
//       roll = section[i] + (m - 1);
//       answer++;
//     }
//   }

//   return answer;
// }
// ```

// ### ▷ 접근 방식
// section의 첫번째 인덱스에 있는 수부터 롤러의 길이까지 색칠한 인덱스를 뽑아서 section의 i번째 인덱스보다 roll변수에 담긴 수가 작다면 answer를 더해주는 식으로 풀이했다.

// ## 📝 3. 공원 산책
// ---

// 지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다. 산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며, 명령은 다음과 같은 형식으로 주어집니다.

// ["방향 거리", "방향 거리" … ]
// 예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다. 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.

// 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
// 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
// 위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
// 공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.

// ![](https://velog.velcdn.com/images/middledown12/post/4e9cd859-fc2e-42f0-8b0f-96f9a2fa38ec/image.png)

// 공원을 나타내는 문자열 배열 park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때, 로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

// #### 제한사항
// 3 ≤ park의 길이 ≤ 50
// 3 ≤ park[i]의 길이 ≤ 50
// - park[i]는 다음 문자들로 이루어져 있으며 시작지점은 하나만 주어집니다.
// ```
// S : 시작 지점
// O : 이동 가능한 통로
// X : 장애물
// ```

// park는 직사각형 모양입니다.
// 1 ≤ routes의 길이 ≤ 50
// routes의 각 원소는 로봇 강아지가 수행할 명령어를 나타냅니다.
// 로봇 강아지는 routes의 첫 번째 원소부터 순서대로 명령을 수행합니다.
// routes의 원소는 "op n"과 같은 구조로 이루어져 있으며, op는 이동할 방향, n은 이동할 칸의 수를 의미합니다.
// - op는 다음 네 가지중 하나로 이루어져 있습니다.
// ```
// N : 북쪽으로 주어진 칸만큼 이동합니다.
// S : 남쪽으로 주어진 칸만큼 이동합니다.
// W : 서쪽으로 주어진 칸만큼 이동합니다.
// E : 동쪽으로 주어진 칸만큼 이동합니다.
// ```
// 1 ≤ n ≤ 9

// ### ▷ 입출력 예

// ```jsx
// solution(["SOO","OOO","OOO"],	["E 2","S 2","W 1"]) //	[2,1]
// solution(["SOO","OXX","OOO"],	["E 2","S 2","W 1"]) //	[0,1]
// solution(["OSO","OOO","OXO","OOO"],	["E 2","S 3","W 1"]) //	[0,0]
// ```

// ### ▷ 내 풀이

// ```jsx
// function solution(park, routes) {
//   let answer = [];
//   let start = [];

//   const move = {
//     E: [0, 1],
//     W: [0, -1],
//     S: [1, 0],
//     N: [-1, 0]
//   };

//   // 시작 위치인 'S'의 위치를 찾음
//   for(let i = 0; i < park.length; i++) {
//     const startIdx = park[i].indexOf('S');
//     if(startIdx > -1) {
//       start = [i, startIdx];
//       break;
//     }
//   }
//   console.log(start)

//   // for문을 돌면서 routes 명령대로 움직임
//   for (let i = 0; i < routes.length; i++) {
//     const route = routes[i];
//     const [di, n] = route.split(' '); // ex) di = 'E', n = 2
//     const moving = [...start]; // 이동위치
//     let noMove = false;

//     // for문을 돌때마다 이동
//     for (let j = 0; j < n; j++) {
//       moving[0] += move[di][0];
//       moving[1] += move[di][1];

//       console.log(moving)

//       // 공원 밖으로 나가면 움직이지 않음
//       if (
//         moving[0] < 0 ||
//         moving[0] > park.length - 1 ||
//         moving[1] < 0 ||
//         moving[1] > park[0].length - 1
//       ) {
//         noMove = true;
//         break;
//       }

//       // 움직이는 경로에 'X'가 존재한다면 움직이지 않음
//       if (park[moving[0]][moving[1]] === 'X') {
//         noMove = true;
//         break;
//       }
//     }

//     // noMove가 true라면 움직이지 않음
//     if (!noMove) {
//       start = moving;
//     }
//   }

//   return start
// }
// ```

// ### ▷ 접근 방식
// 1. park를 이중배열로 만들어서 'S'가 있는 위치를 찾는다
// 2. "S"가 있는 위치에서 routes만큼 이동시킨다.
// 3. 2번을 실행할 때 만약 이동하는 곳에 "X"가 있으면 이동시키지 않는다.

// ## 📝 4. 기사단원의 무기
// ---

// 숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 기사들은 무기점에서 무기를 구매하려고 합니다.

// 각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.

// 예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다. 만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, 15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다. 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.

// 기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때, 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.

// #### 제한사항
// 1 ≤ number ≤ 100,000
// 2 ≤ limit ≤ 100
// 1 ≤ power ≤ limit.

// ### ▷ 입출력 예

// ```jsx
// solution(5,	3, 2) //	10
// solution(10, 3, 2) //	21
// ```

// ### ▷ 내 풀이

// ```jsx
// function solution(number, limit, power) {
//   let answer = 0;
//   let nums = [];

//   // 1부터 number 까지 순차적으로 약수의 개수를 확인한다.
//   for (let i = 1; i <= number; i++) {
//     let divisor = 0;

//     for (let j = 1; j <= i / 2; j++) {
//       if (i % j === 0) {
//         divisor += 1;
//       }
//     }
//     nums.push(divisor + 1)
//   }

//   for(let i = 0; i < nums.length; i++) {
//     answer += (nums[i] > limit ? power : nums[i])
//   }

//   return answer;
// }
// ```

// - 시간초과로 실패함

// ### ▷ 다시 푼 풀이

// ```jsx
// function solution(number, limit, power) {
//   let answer = 0;

//   for (let i = 1; i <= number; i++) {
//     let divisor = 0;
//     for (let j = 1; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         if (i / j === j) {
//           divisor++;
//         } else {
//           divisor += 2;
//         }
//       }
//     }
//     answer += (divisor > limit ? power : divisor);
//   }

//   return answer;
// }
// ```

// ### ▷ 접근 방식
// number까지의 수의 약수의 개수를 확인하고, limit보다 작다면 그냥 더해주고, limit보다 큰 수가 있으면 power변수를 더해주는 식으로 풀이하였다.

// ---
// >
// 출처: [프로그래머스](https://programmers.co.kr/)
// >
