

const makeCalendar = (date) => {

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1; 

  //getMonth 는 0부터 월 정보를 반환하기 때문에 +1을 해줘야 한다.

  const firstDay = new Date(date.setDate(1)).getDay();
  // getDay는 요일 정보를 가져올 수 있는 날짜 메서드 , 첫날의 요일 구하기

  const lastDay = new Date(currentYear, currentMonth, 0).getDate();
  // 마지막 날짜 구하기 


  let htmlDummy = '';

  // 한달 전 날짜 표시하기
  for (let i = 0; i < firstDay; i++ ) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  // 이번달 날짜 표시 
  // 1부터 시작
  for(let i = 1; i <= lastDay; i++) {
    htmlDummy += `<div>${i}</div>`;
  }

  // 남은 박스 만큼 다음달 날짜 표시
  const limitDay = firstDay + lastDay;

  // 한 열에 7개의 박스가 들어가니 무조건 7의 배수로 올림 시켜준다 
  const nextDay = Math.ceil(limitDay/7) * 7;

  // 다음달 날짜 표시하기
  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
}

  document.querySelector(`.dateBoard`)
  .innerHTML = htmlDummy;

  document.querySelector(`.dateTitle`)
  .innerText = currentYear + "년 " + currentMonth + "월"
}

// date 객체 선언
const date = new Date();

makeCalendar(date);

// 이전달 이동
document.querySelector(`.prev`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
}
  
// 다음달 이동
document.querySelector(`.next`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
}