# This

modern javascript 에서 `arrow function` 을 보다가 `arrow function 은 this 를 가지지 않는다` 이 구문을 보고 `this`에 대해서 좀 더 알아보기로 함

## JS는 `this` 가 하나로 정해져 있지 않다

`global object`는 global scope(전역 범위)에 항상 존재하는 객체를 의미한다.
- in browser -> `window`
- in node -> `global`
- in worker -> `WorkerGlobalScope`

> Note: `global object (전역 객체)`는 global scope (전역 범위) 에 항상 존재하는 객체를 의미한다.
> - browser -> `window`
> - node -> `global`
> - worker -> `WorkerGlobalScope`

> Note: Web worker 는 스크립트 연산을 별도의 백그라운드 쓰레드에서 실행할 수 있는 기술

### 전역 범위에서의 this
전역 범위에서 this는 `global object`를 가리킨다.

```js
// in browser
console.log(this);
console.log(window);

// in node
console.log(this);
console.log(global);
```

### 함수에서의 this
함수 실행에서의 this는 `global object` 를 가리킨다
```js
function showThis() {
    console.log(this);
}
showThis(); // window (or global)
```

```js
let showThis = function() {
    console.log(this);
}
showThis(); // window (or global)
```

```js
(function() { console.log(this); })(); // window (or global)
```

> Note: `'use strict'` 엄격모드에서는 `undefined`


### 객체의 메서드에서의 this
method 의 this는 `method 가 선언된 object` 를 가리킨다
```js
// class 역할의 함수
function Coin(name, price) {
    this.name = name;
    this.price = price;
    this.showPrice = function() {
        console.log(this.price);
    };
}

/*
let btc = {
    name: 'bitcoin',
    price: 100000000000000,
    showPrice: function() { console.log(this.price); },
};
*/

let btc = new Coin('btc', 100000000000000);
btc.showPrice(); // 100000000000000
```
class 역할을 할 함수와 `new` 가 만나면 자동적으로 일어나는 일들이 있다.
1. `this = {};` 가 생성된다
2. 해당 함수의 코드들이 실행된다 :: this 객체에 프로퍼티로 추가된다
3. `return this;` 가 실행된다

```js
function Coin(name, price) {
    let this = {};

    this.name = name;
    this.price = price;
    this.showPrice = function() { console.log(this); };

    return this;
} // 왜 그럴까? 라는 생각은 접어두자,,, 만든 사람이 그렇게 하기로 했다
```

### 메서드 내부에서 선언된 함수에서의 this

메서드와 동일한 `this` 값을 가질 것 같지만 `global object` 를 가리킨다. 엄밀히 말하면 해당 함수는 객체의 메서드가 아닌 것이다.

```js
let btc = {
    name: 'bitcoin',
    price: 100000000000000,
    showPrice: function() { console.log(this.price); },
    showMethodThis: function() { 
        // first
        console.log(this);

        function showFuncThis() { console.log(this); }
        
        // second
        showFuncThis();
    },
};

btc.showMethodThis();
// btc object
// global object
```

메서드 내부에 선언된 함수가 메서드와 동일한 this 값을 가지기 위해서 어떻게 해야할까? (아직 공부를 덜해서 하면서 추가할 예정)
- arrow function : arrow function 은 별도로 this 객체를 가지지 않기 때문에 외부 스코프의 this 를 참조한다.

```js
let btc = {
    name: 'bitcoin',
    price: 100000000000000,
    showPrice: function() { console.log(this.price); },
    showMethodThis: function() { 
        // first
        console.log(this);

        let showFuncThis = () => { console.log(this); };
        
        // second
        showFuncThis();
    },
};

btc.showMethodThis();
// btc object
// global object
```
## 출처
- https://wormwlrm.github.io/2019/03/04/You-should-know-JavaScript-this.html.html
- https://www.zerocho.com/category/JavaScript/post/5b0645cc7e3e36001bf676eb
- https://developer.mozilla.org/ko/docs/Glossary/Global_object