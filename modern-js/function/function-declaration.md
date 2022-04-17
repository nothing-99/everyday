# Function (함수)

변수에는 값(데이터)을 저장한다. 자바스크립트에서는 함수를 "특별한 값"으로 취급한다. (함수는 "동작"을 나타내는 값)

-> 변수에 함수라는 "특별한 값"을 저장할 수 있다.

```javascript
// 함수 선언식
function sayBtc() {
    alert('bitcoin');
}
```

```javascript
// 함수 표현식
let sayBtc = function () {
    alert('bitcoin');
};
```

```javascript
// 결과 차이를 보자
sayBtc();
console.log(sayBtc);
```

() 괄호의 유무에 따라 다른 결과가 나온다 ("특별한 값" 이라고 하는 이유인 것 같음)

## 차이

함수 선언식과 함수 표현식은 여러가지 측면에서 다르다.

### 문법

가장 간단한 차이이다. 그냥 형태가 다르다.

### 생성 시점

자바스크립트 엔진은 스크립트를 실행하기 전에 스크립트에서 함수 선언식으로 작성된 전역함수를 찾아서 해당 함수를 생성한다. 그렇기에 스크립트를 실행하면 함수 선언식보다 위에서 해당 함수를 사용해도 문제없이 실행된다. 

```javascript
sayBtc(); // Gazua, btc!!

function sayBtc() {
    console.log('Gazua, btc!!');
}
```

함수 표현식으로 작성된 함수는 스크립트를 실행하면서 해당 라인에 도달해야 함수가 생성된다. 그렇기에 함수 표현식보다 위에서 해당 함수를 사용하면 문제가 발생한다.  그 시점에서는 해당 함수가 생성되지 않았기 때문이다. 

```javascript
sayBtc(); // Error!!

let sayBtc = function () {
    console.log('Gazua, btc!!');
};
```

### 스코프

**'use strict' 가정**

런타임에 특정 값이 정해지고 그 값에 따라 함수를 다르게 정의해야 하는 경우를 생각해보자.

#### 함수 선언문

```javascript
'use strict'

let coinName = prompt('코인 이름을 입력하세요.', '');

if (coinName === 'btc') {

    function showFullName() {
        alert('bitcoin');   
    }
} else {

    function showFullName() {
        alert('trash');  
    }
}

// Error!!
showFullName();
```

`Uncaught ReferenceError: showFullName is not defined` 

> Note: 'use strict' 를 지우고 실행하니 정상적으로 동작함... 

함수 선언문은 함수가 선언된 블록에서는 어디에서나 사용할 수 있다.

```javascript
'use strict'

let coinName = prompt('코인 이름을 입력하세요.', '');

if (coinName === 'btc') {
    // Success!!
    showFullName();

    function showFullName() {
        alert('bitcoin');   
    }

    // Success!!    
    showFullName();
} else {
    // Success!!
    showFullName();

    function showFullName() {
        alert('trash');  
    }

    // Success!!
    showFullName();
}

// Error!!
showFullName();
```

#### 함수 표현식

```javascript
let coinName = prompt('input name of coin', '');

let showFullName;

if (coinName === 'btc') {
    showFullName = function() {
        alert('bitcoin');
    }
} else {
    showFullName = function() {
        alert('trash');
    }
}

// Success!
showFullName();
```

```javascript
let coinName = prompt('input name of coin', '');
let showFullName = (coinName === 'btc') ?
  function() { alert('bitcoin'); } :
  function() { alert('trash'); };

showFullName();
```

## 공부할 것

- ''use strict'
