// ## <!-- # 📝 [JavaScript] 개인정보 수집 유효기간

// ## ▷ 문제 설명

// ![](https://velog.velcdn.com/images/middledown12/post/83dc789c-e053-4467-b49e-4eb5c8f99430/image.png)

// ## ▷ 제한사항

// ![](https://velog.velcdn.com/images/middledown12/post/42cad082-dd18-431f-9c4f-31739a898d0e/image.png)

// ## ▷ 입출력 예

// ```jsx
// solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]); // [1, 3]
// solution(
//   "2020.01.01",
//   ["Z 3", "D 5"],
//   ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
// ); // [1, 4, 5]
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(today, terms, privacies) {
//   let answer = [];
//   let today_year = Number(today.split(".")[0]);
//   let today_month = Number(today.split(".")[1]);
//   let today_day = Number(today.split(".")[2]);

//   let terms_obj = {};
//   for (let i = 0; i < terms.length; i++) {
//     // console.log(terms[i].split(" ")[0])
//     terms_obj[terms[i].split(" ")[0]] = terms[i].split(" ")[1];
//   }

//   console.log(terms_obj);

//   for (let i = 0; i < privacies.length; i++) {
//     let collection_time = privacies[i].slice(0, -2).split(".");

//     // 개인정보 수집일 계산
//     let collection_year = Number(collection_time[0]);
//     let collection_month = Number(collection_time[1]);
//     let collection_day = Number(collection_time[2]);

//     // 개인정보 유효기간 계산
//     let expiration_year = collection_year;
//     let expiration_month = Number(terms_obj[privacies[i].charAt(privacies[i].length - 1)]) + collection_month;
//     let expiration_day = collection_day - 1;

//     // month가 2를 넘어가면 계산해서 재할당
//     if (expiration_month > 12) {
//       expiration_month = "0" + (expiration_month % 12);
//       console.log(expiration_month);
//       expiration_year = Number(collection_year) + 1;
//     }
//     // day가 0보다 작거나 같으면 지난달로 계산해서 재할당
//     if (expiration_day <= 0) {
//       expiration_month = expiration_month - 1;
//       expiration_day = 28 + expiration_day;
//     }

//     // 오늘 날짜랑 비교
//     if (today_year > expiration_year) {
//       answer.push(i + 1);
//     } else if (today_year === expiration_year) {
//       if (today_month > expiration_month) {
//         answer.push(i + 1);
//       } else if (today_month === expiration_month) {
//         if (today_day >= expiration_day) {
//           answer.push(i + 1);
//         }
//       }
//     }
//   }
//   return answer;
// }
// ```

// ## ▷ 접근 방식

// 계속 테스트케이스가 9번부터 19번까지 실패를 해서 다시한번 고민을 해봐야할 것 같다. 문제점으로 생각되는 것이 month가 12개월 이상이 되었을 때, year을 더해주고 month에서 12를 빼줘야하는게 잘못된 것 같다. 그 로직을 한번 생각해 봐야겠다.

// ---

// > 출처: [프로그래머스](https://programmers.co.kr/)
// > -->
