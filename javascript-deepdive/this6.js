function convertArgsToArray () {
  console.log(arguments);

  // arguments 객체를 배열로 반환
  // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다.

  const arr = Array.prototype.slice.call(arguments);
  //Array.prototype.slice.apply(arguments);

  console.log(arr);
  return arr;
}

convertArgsToArray(1,2,3,4,5);

// Function.prototype.bind 메서드는 apply와 call 메서드와 달리 함수를 호출하지 않는다.
// 다만 첫 번째 인수로 전달한 값으로 this 바인딩이 교체된 함수를 새롭게 생성해 반환한다.

function getThisBinding() {
  return this;
}

// this로 사용할 객체
const thisArg = {a:1};

// bind 메서드는 첫 번째 인수로 전달한 thisArg로 this 바인딩이 교체된
// getThisBinding 함수를 새롭게 생성해 반환한다.

console.log(getThisBinding.bind(thisArg)) // getThisBinding

// bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야한다.
console.log(getThisBinding.bind(thisArg)()); // {a:1}


// bind 메서드는 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치 하는 문제를 해결하기 위해 유용하게 사용된다.

const person = {
  name : "Lee",
  foo(callback) {
    setTimeout(callback,100);
  }
};

// person.foo의 콜백 함수가 일반 함수로서 호출된 시점에서 this는 전역 객체를 가리킨다.
person.foo(function(){
  console.log(`Hi my name is ${this.name}`);
})

// person.foo의 콜백 함수는 외부 함수 person.foo를 돕는 헬퍼 함수 (보조함수) 역할을 하기 때문에 외부 함수 person.foo 내부의 this와 콜백 함수의 this가 상이하면 문맥상 문제가 발생한다.
// 이때 bind 메서드를 사용하여 this를 일치 시킬 수 있다.

const person2 = {
  name : "Park",
  foo(callback) {
    setTimeout(callback.bind(this),100);
  }
}

person2.foo(function(){
  console.log(`Hi my name is ${this.name}`); // Hi my name is Park 
})