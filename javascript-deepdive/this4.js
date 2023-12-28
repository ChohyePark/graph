// 메서드 호출
// 메서드를 호출할 때 메서드 이름 앞의 마침표 (.) 연산자 앞에 기술한 객체가 바인딩 된다.
// 주의할 것은 메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩 된다는 것이다


const person = {
  name : "Lee",
  getName () {
    return this.name;
  }
};

// person 객체의 getName 프로퍼티가 가리키는 함수 객체는 person 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체다. getName 프로퍼티가 함수 객체를 가리키고 있을 뿐이다.

// 따라서 getName 메서드는 다른 객체의 프로퍼티에 할당하는것으로 다른 객체의 메서드가 될 수도 있고 일반 변수에 할당하여 일반 함수로 호출될 수도 있다.


const anotherPerson = {
  name : "kim" 
};

// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

// getName 메서드를 호출한 객체는 anotherPerson이다.

console.log(anotherPerson.getName()); // kim

// getName 메서드를 변수에 할당

const getName = person.getName;

// 일반 함수로 호출
console.log(getName());

// 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name 과 같다


function Person2 (name) {
  this.name = name;
}

Person2.prototype.getName = function () {
  return this.name;
}

const me = new Person2('Lee');

// getName 메서드를 호출한 객체는 me이다.
console.log(me.getName());

Person2.prototype.name = "Park";
 
// getName 메서드를 호출한 객체는 Person2.prototype이다. 
// Person2.prototype도 객체이므로 직접 메서드를 호출할 수 있다.
console.log(Person2.prototype.getName()); // Park
