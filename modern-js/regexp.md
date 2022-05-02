# Regular Expression
- [Regular Expression](#regular-expression)
  - [Method](#method)
    - [RegExp.prototype.exec](#regexpprototypeexec)
    - [RegExp.prototype.test](#regexpprototypetest)
    - [String.prototype.match](#stringprototypematch)

## Method
### RegExp.prototype.exec
```js
let coin = 'bitcoin, Bitcoin gold, biTCoin cash, bItcoIn dia';
let regExp = /coin/ig;

console.log(regExp.exec(coin));
// ['coin', index: 3, input: 'bitcoin, Bitcoin gold, biTCoin cash, bItcoIn dia', groups: undefined]
// index : 패턴과 매칭된 문자열의 위치
// input : 패턴 매칭 대상 문자열 
```
- `exec` method 는 가장 먼저 매칭된 1개의 요소에 대한 결과만을 array 형태로 반환한다.
- 매칭된 결과가 없다면 `null` 을 반환한다.

### RegExp.prototype.test
```js
let coin = 'bitcoin, Bitcoin gold, biTCoin cash, bItcoIn dia';
let regExp = /coin/ig;

regExp.test(coin);
// true
```
- `test` method 는 정한 패턴에 대해서 매칭된 결과의 유무를 반환한다 (true/ false)

### String.prototype.match
```js
let coin = 'bitcoin, Bitcoin gold, biTCoin cash, bItcoIn dia';
let regExp = /coin/ig;

coin.match(regExp);
// ['coin', 'coin', 'Coin', 'coIn']

regExp = /coin/;
coin.match(regExp);
// ['coin', index: 3, input: 'bitcoin, Bitcoin gold, biTCoin cash, bItcoIn dia', groups: undefined]

regExp = /aaaa/;
coin.match(regExp)
// null
```
- `match` method 는 패턴과 매칭된 결과를 1개 이상을 찾아서 Array 형태로 반환한다.
- 매칭된 결과가 없으면 `null` 을 반환한다.

> **RegExp.prototype.exec** Vs **String.prototype.match**
> exec 는 **g** flag 가 있더라도 1개만 찾는다.
> match 는 **g** flag 가 있다면 패턴과 매칭되는 모든 string 을 찾는다. (없으면 1개)

