# arrow function

함수를 만드는 방법들 중 하나이다.

- `function name(parameters) {}`

- `let func = function (parameters) {};`

- `let func = (parameters) => expression;`



```javascript
// 모두 같은 의미를 나타낸다.
function showCoin() {
    alert('bitcoin');
}

let showCoin = function() {
    alert('bitcoin');
};

let showCoin = () => {
    alert('bitcoin');
};

let showCoin = () => alert('bitcoin');
```



arrow function 에서 parameter 가 1개인 경우 생략가능하다. 그 외의 경우는 생략할 수 없다.
```javascript
// success
let showCoin = altcoin => { alert('only bitcoin'); };

// error
let showCoin = altcoin1, altcoin2 => { alert('only bitcoin'); };
```
Error: `Uncaught SyntaxError: Unexpected token '=>'`

## 사용
```javascript
let onlyCoin = prompt('input coin name', '');

let answer = (onlyCoin === 'btc' || onlyCoin === 'bitcoin') ?
    () => { alert('right!'); } :
    () => { alert('trash!'); };

answer();
```

## 추가적인 기능들
**arrow function 은 코드를 간결하게 작성할 수 있다** 라는 장점이 존재한다. 하지만 단지 이 요인 때문에 arrow function 을 사용하는 것은 아니다. 여러가지 기능들을 추가적으로 제공한다.

### `this`를 가지지 않는다.
arrow function 은 내부적으로 this 값을 가지지 않기 때문에 외부 블록의 this 를 가지고 온다.
```js
let coins = {
    real_coins: ['btc'],
    trash_coins: ['eth', 'eos', 'xrp'],
    showCoinList() {
        console.log('----   real coins  ----');
        this.real_coins.forEach(
            (coin) => console.log('- ' + coin)
        );
        console.log('-----------------------');
        console.log('----   trash coins ----');
        this.trash_coins.forEach(
            (coin) => console.log('- ' + coin)
        );
        console.log('-----------------------');
    },
}

coins.showCoinList();
```
### `arguments`를 지원하지 않는다.
... args 에 대해서 배운 후에 하자. 이해가 안됨
### `new`와 함께 호출할 수 없다.
- new 연산자를 통해 객체의 instance 를 만들 때 this 를 이용하는데 arrow function 은 this 가 없다.

```js
function Coin(name, price) {
    // this = {}; : new 로 instance 를 만들 때 수행된다.
    this.name = name;
    this.price = price;
    // return this; : new 로 instance 를 만들 때 수행된다.
}

let btc = new Coin('bitcoin', 100000000000000000);
```
```js
let Coin = (name, prpice) => {
    this.name = name;
    this.price = price;
};

let btc = new Coin('bitcoin', 100000000000000000);
```
`Uncaught TypeError: Coin is not a constructor at <anonymous>`
### `super`를 가지지 않는다.
class 부분을 배울 때 추가하자