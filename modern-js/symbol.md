# Symbol

- string, number, boolean, undefined, null, object
- symbol

symbol은 다른 값과 중복되지 않는 유일한 값이다. 따라서 유일한 프로퍼티 키를 만들기 위해 주로 사용한다.

> Note : 프로퍼티 키로 사용할 수 있는 타입은 string, symbol

## 생성

```js
const uniqueData = Symbol();

// output: symbol
console.log( typeof uniqueData );
// output: Symbol()
console.log( uniqueData );
```
```js
/*  Symbol 함수는 생성자 함수가 아니기 때문에
 *  new 와 함께 사용할 수 없다.
 *  output: Error!
 */
new Symbol();
```
`TypeError: Symbol is not a constructor`

```js
const uniqueData1 = Symbol('symbol');
const uniqueData2 = Symbol('symbol');

/*  Symbol 함수에 인자로 string 을 주면서
 *  symbol 에 대한 Description 을 추가할 수 있다. 
 *  주의할 점은 Description 은 해당 symbol 에 대한 설명일 뿐이라는 것!!!
 *  사람의 이름이 같다고 해서 같은 사람인 것은 아니다.
 *  
 *  output: false
 */
console.log( uniqueData1 === uniqueData2 );
```

Symbol 도 다른 primitive type 과 같이 래퍼객체가 자동으로 생성되서 메서드를 사용할 수 있다.
```js
// @param { string }
const uniqueData = Symbol('symbol');

/*  wrapper object 가 생성되서 프로퍼티, 메서드 호출 후 제거
 *  
 *  output: symbol
 *  output: Symbol(symbol)
 */
console.log(uniqueData.description);
console.log(uniqueData.toString());
```

## method
```js
/*  @param {string}
 *  Symbol.for(key) -> symbol-value
 *  
 *  `global symbol registry` 에서 해당 key 와 일치하는 symbol-value 를 검색한다.
 *  - success search! 찾은 symbol-value 를 반환
 *  - fail search! 새로운 key, symbol-value pair 를 `global symbol registry` 에 추가하고 해당 symbol-value 를 반환
 */
const uniqueData1 = Symbol.for('symbol');
const uniqueData2 = Symbol.for('symbol');
const uniqueData3 = Symbol('Symbol');

// output: true
console.log( uniqueData1 === uniqueData2 );

/*  Symbol(description) 은 새로운 symbol-value 를 반환
 *  전달받은 string 은 key 의 역할을 하지 않고 그냥 단순 description 임
 *  
 *  Symbol.for(key) 은 `global symbol registry` 에서 검색 후
 *  symbol-value 를 반환
 */
console.log( uniqueData1 === uniqueData3 );
```
- `Symbol(description)` 은 검색할 수 있는 key 를 지정할 수 없기 때문에 JS Engine 이 관리하는 `global symbol registry` 에 저장될 수 없다. 
- `Symbol.for(key)` 은 검색할 수 있는 key 를 지정할 수 있기 때문에 `global symbol registry` 에서 해당 key 로 검색 후 존재하면 검색된 symbol-value 를 반환하고 없으면 해당 key-value fair 를 저장한 후 symbol-value 를 반환한다.
- `Symbol.for(key)` 를 이용하면 전역에서 접근할 수 있는 unique-data 를 만들 수 있다. 


```js
/*  @param { string }
 *  Symbol.keyFor(symbol-value)
 *
 *  argument 로 입력받은 `symbol-value` 에 매칭되는 key 값을 
 * `global symbol registry` 에서 찾아 반환해준다.
 *  없으면 undefined 반환
 */

const uniqueData = Symbol.for('symbol');
const uniqueData2 = Symbol('non-key');

// output: symbol
console.log(Symbol.keyFor(uniqueData));

// output: hi
console.log(Symbol.keyFor(Symbol.for('hi')));

// output: undefined
// uniqueData2 는 Symbol() 로 생성했기 때문에 
// key 값이 없음,,,
console.log(Symbol.keyFor(uniqueData2));
```

## 프로퍼티 with Symbol
프로퍼티 (key-value fair in object) 키값으로 string or symbol 을 사용할 수 있다. symbol 을 사용하기 위해서는 대괄호와 같이 사용해야한다.

symbol-value 는 유일한 값이기 때문에 추후에 프로퍼티가 추가되더라도 겹치지 않을 것이다.
```js
const mutantMonkey = {
  [Symbol.for('number')]: 1
};
console.log(mutantMonkey[Symbol.for('number')]);
```
```js
// output: Error!
mutantMonkey.Symbol.for('number');
```
`TypeError: Cannot read properties of undefined (reading 'for')`
```js
// output: Error!
const mutantMonkey = { Symbol.for('number'): 1 };
```
`SyntaxError: Unexpected token '.'`

```js
/*  Symbol 로 property 를 만든 경우 
 *  `for...in`, `Object.keys`, `Object.getOwnPropertyNames` 
 *  로 찾을 수 없다.
 */
let num = 0;

class MutantMonkey {
  constructor(owner) {
    if (num >= 2) { 
      return null;
    }
    this[Symbol.for('number')] = ++num;
    this[Symbol.for('owner')] = owner;
    this.name = 'mutant-king';
    this.earnPerDay = 5;
  }
}

const monkey1 = new MutantMonkey('#012335');
const monkey2 = new MutantMonkey('#383974934');
const monkey3 = new MutantMonkey('#98934JNF');

// output: #012335
console.log(monkey1[Symbol.for('owner')]);
// output: #383974934
console.log(monkey2[Symbol.for('owner')]);
// output: undefined
console.log(monkey3[Symbol.for('owner')]);

/*  output:
 *  name
 *  earnPerDay
 */
for (let key in monkey1) {
  console.log(key);
}
// output: [ 'name', 'earnPerDay' ]
console.log(Object.keys(monkey1));
console.log(Object.getOwnPropertyNames(monkey1));

/*  Object.getOwnPropertySymbols 로는 가능,,, 
 *  output: [ 'Symbol(number)', 'Symbol(owner)' ]
 */
console.log(Object.getOwnPropertySymbols(monkey1));
```

# 참고
- 모던 자바스크립트 Deep Dive
