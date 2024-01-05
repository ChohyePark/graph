// 실행 컨텍스트의 생성과 식별자 검색 과정

const { functions } = require("lodash");

var x = 1;
const y = 2;

function foo (a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z = 5;
    console.log(a+b+x+y+z);
  }
  bar(10);
}

foo(20);// 42

// 1. 전역 객체를 생성한다. 전역 객체도 Object.prototype을 상속 받는다. 즉, 전역 객체도 프로토 타입 체인의 일월이다.

// 2. 전역 코드 평가. 
// - 1. 전역 실행 컨텍스트 생성
// - 2. 전역 렉시컬 환경 생성
// - 2-1 전역 환경 레코드 생성
// - 2-1.1 객체 환경 레코드 생성
// - 2-1.2 선언적 환경 레코드 생성
//  2-2 this 바인딩
//  2-3 외부 렉시컬 환경에 대한 참조 결정


