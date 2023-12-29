// 생성자 함수

function Circle (radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius
  }
}

// 반지름이 5인 Circle 객체를 생성
const circle1= new Circle(5);
// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

// 만약 new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.
const circle3 = Circle(30);

// 일반 함수로 호출된 circle에는 반환문이 없으므로 암묵적으로 undefined 출력
console.log(circle3);

// 일반 함수로 호출된 circle 내부의 this는 전역 객체를 가리킨다.
console.log(radius);

// Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// apply, call, bind 메서드는 Function.prototype의 메서드다. 즉, 이들 메서드는 모든
// 함수가 상속받아 사용할 수 있다.

function getThisBinding () {
  return this;
}

// this로 사용할 객체

const thisArg = {a : 1};

console.log(getThisBinding()); // window

console.log(getThisBinding.apply(thisArg)); // {a:1}
console.log(getThisBinding.call(thisArg)); // {a:1}

// aplly와 call 메서드의 본질적인 기능은 함수를 호출 하는 것이다. 함수를 호출하면서 첫번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.
// apply와 call 메서드는 호출한 함수에 인수를 전달하는 방식만 다를 뿐 동일하게 동작한다.
// 위 방법은 함수에 인수를 전달하지는 않는다.


function getThisBinding2 () {
  console.log(arguments);
  return this;
}

const thisArg2 = {b:1};

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding2.apply(thisArg2,[1,2,3])); // [Arguments] { '0': 1, '1': 2, '2': 3 } { b: 1 }

//call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding2.call(thisArg2,1,2,3)); // [Arguments] { '0': 1, '1': 2, '2': 3 } { b: 1 }

// ** apply와 call 메서드의 대표적인 용도는 argument 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우다. argument 객체는 배열이 아니기 때문에 Array.prototype.slice 같은 배열의 메서드를 사용할 수 없으나 apply와 call 메서드를 이용하면 가능하다.

