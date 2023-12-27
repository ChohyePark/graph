
// 객체 리터럴
const circle = {
  radius : 5,
  getDiameter() {
    return 2 * this.radius;
  }
};

console.log(circle.getDiameter()); // 10

// 생성자 함수
function Circle2 (radius) {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
}

Circle2.prototype.getDiameter = function () {
  return 2 * this.radius;
}

const circle2 = new Circle2(5)
console.log(circle2.getDiameter()); // 10


// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.

console.log(this); // {} window

// 일반 함수
function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
  console.log(this);
  return number*number;
}

console.log(square(2));

// 객체 리터럴
const person = {
  name : 'Lee',
  getName () {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this); // {name : 'Lee' , getName : [Function : getName]}
    return this.name;
  }
}

console.log(person.getName());

// 생성자 함수

function Person(name) {
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.name = name;
  console.log(this); // Person {name : "Park"}
}

const me = new Person("Park");

