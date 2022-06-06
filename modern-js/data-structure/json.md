# JSON
JavaScript Object Notation 은 주로 네트워크상에서의 데이터 교환을 목적으로 한다.
- [JSON.stringify](##json.stringify) : object -> JSON ( dataType -> string
- [JSON.parse](##json.parse) : JSON -> object ( string -> dataType )

객체뿐 아니라 primitive type 에도 적용할 수 있다.
- object
- array
- primitive
  - string
  - number
  - boolean
  - null

JSON.stringify 호출 시에 무시되는 프로퍼티가 있다
```js
let user = {
  // method
  sayHi() { alert('Hello'); },

  // key => symbol type
  [Symbol('id')]: 123,

  // value => undefined
  something: undefined
};
```
객체를 대상으로 `stringify`를 수행할 때 **중첩 객체** 프로퍼티는 문제없지만 **순환 참조**는 오류를 발생시킨다
```js
let john = { name: "John", };
let alice = { name: "Alice", };
john.wife = alice;
alice.husband = john;

console.log(JSON.stringify(john)); // error
```
`Uncaught TypeError: Converting circular structure to JSON`

## JSON.stringify
```js
JSON.stringify(value[, replacer, space]);
```
- value : 인코딩하려는 값
- replacer : JSON으로 인코딩 하길 원하는 properties(in array) or function(key, value) (mapping function)
- space : 공백 문자 수 ( 서식 )

```js
let user = { name: "nothing", age: 28, };
let assets = {
  coins: [{name: "bitcoin", price: 1000,}, {name: "ethereum", price: 10,}],
  stocks: [{name: "kakao", price: 1}, {name: "tesla", price: 10}, {name: "netflex", price: 0.1}],
  money: 0,

  showCoins() {
    for (let coin of this.coins) {
        console.log(coin.name);
    }
  },
  showStocks: function() {
    for (let stock of this.stocks) {
      console.log(stock.name);
    }
  },
  showMoney() {
    let arrow = () => { consnole.log(this.money); };
    arrow();
  },
};

console.log( JSON.stringify(assets) );
// '{"coins":[{"name":"bitcoin","price":1000},{"name":"ethereum","price":10}],"stocks":[{"name":"kakao","price":1},{"name":"tesla","price":10},{"name":"netflex","price":0.1}],"money":0}'

console.log( JSON.stringify(assets, ['coins', 'name', 'stocks'] );
// '{"coins":[{"name":"bitcoin"},{"name":"ethereum"}],"stocks":[{"name":"kakao"},{"name":"tesla"},{"name":"netflex"}]}'

console.log( JSON.stringify(assets, null, 2);
/*
{
  "coins": [
    {
      "name": "bitcoin",
      "price": 1000
    },
    {
      "name": "ethereum",
      "price": 10
    }
  ],
  "stocks": [
    {
      "name": "kakao",
      "price": 1
    },
    {
      "name": "tesla",
      "price": 10
    },
    {
      "name": "netflex",
      "price": 0.1
    }
  ],
  "moeny": 0
}
*/

user.asset = assets;
assets.owner = user;

let json = JSON.stringify(assets, (key, value) => {
  console.log(`${key}: ${value}`);
  return (key === 'owner') ? undefined : value;
}, 2);
/*
'': [object Object]
coins: [object Object], [object Object]
0: [object Object]
name: bitcoin
price: 1000
1: [object Object]
name: ethereum
price: 10
stocks: [object Object], [object Object], [object Object]
0: [object Object]
name: kakao
price: 1
1: [object Object]
name: tesla
price: 10
2: [object Object]
name: netflex
price: 0.1
money: 0
showCoins: showCoins() {
    for (let coin of this.coins) {
      console.log(coin.name);
    }
  }
showStocks: function() {
    for (let stock of this.stocks) {
      console.log(stock.name);
    }
  }
showMoney: showMoney() {
    let arrow = () => { console.log(this.money); };
    arrow();
  }
owner: [object Object]
*/

console.log(json);
/*
{
  "coins": [
    {
      "name": "bitcoin",
      "price": 1000
    },
    {
      "name": "ethereum",
      "price": 10
    }
  ],
  "stocks": [
    {
      "name": "kakao",
      "price": 1
    },
    {
      "name": "tesla",
      "price": 10
    },
    {
      "name": netflex",
      "price": 0.1
    }
  ],
  "money": 0
}
*/

```
