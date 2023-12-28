// 렉시컬 스코프와 this 바인딩은 결정 시기가 다르다.
// 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에
// 정적으로 상위 스코프를 결정한다. 하지만 this 바인딩은 함수 호출 시점에 결정된다.


// 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.
// 콜백 함수가 일반 함수로 호출 된다면 콜백 함수 내부의 this에도 전역 객체가 바인딩 된다. 어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩 된다.

var value = 1;

const obj = {
  value : 100,
  foo () {
    console.log(this); // {value : 100, foo : f}
    console.log(this.value); // 100
    setTimeout(function(){
      console.log("callback's this :", this); // window 
      console.log("callback's this.value", this.value); // 1
    },100);
  }
}



// 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위한 방법은 다음과 같다.

var value2 = 1;

const obj2 = {
  value2 :100,
  foo () {
    // this 바인딩 (obj)을 변수 that에 할당한다.
    const that = this;

    // 콜백 함수 내부에서 this 대신 that을 참조한다.
    setTimeout(function(){
      console.log(that.value2); // 100
    },100)
  }
}

obj2.foo();

// 화살표 함수를 사용해서 this 바인딩을 일치시킬 수 있다.

var value3 = 1;

const obj3 = {
  value3 : 100,
  foo () {
    setTimeout(()=>{
      console.log(this.value3); // 100
    },100)
  }
}

obj3.foo();

