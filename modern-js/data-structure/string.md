# String

- [backtick](#backtick)
- [str.length](#length-of-string)
- [str.charAt()](#charat)
- [str.toLowerCase()](#tolowercase)
- [str.toUpperCase()](#touppercase)
- [str.indexOf()](#indexof)
- [str.includes()](#includes)




## backtick
- '', "" 보다 늦게 나온 문법으로 더 많은 기능을 지원한다
- `${...}` 에 메서드, 함수의 return 값 또는 변수 등 값을 얻을 수 있는 코드가 들어가면 된다. 그 값을 바로 string 으로 출력 가능

```js
let btc = {
  name: 'bitcoin',
  price: 1000000000,
  owner: 'satoshi',
};

// ', " 둘다 사용 가능
console.log(btc.name + ' is made by ' + btc.owner);

// ` (backtick)
console.log(`${btc.name} is made by ${btc.owner}`);
```
## length of string
```js
str.length
```
- 메서드가 아니라 일반적인 프로퍼티이기 때문에 `str.length()` 가 아닌 `str.length`

```js
console.log('bitcoin'.length);
// return: 7
```

## charAt
```js
str.charAt(index)
```
- index: 0 ~ str.length-1 
- 문자열의 해당 index 에 위치하는 문자를 반환
```js
let str = 'bitcoin';

console.log(str.charAt(3));
// 'c'
// console.log(str[3]);

console.log(str.charAt(100));
// ''

console.log(str[100]);
// undefined
```
> [Note] But,,, 일반적으로 `str[index]` 를 더 많이 사용한다.
> 둘의 차이는 해당 index 에 어떠한 문자도 없는 경우에 발생한다
> - charAt: '' (empty string)
> - []: undefined

## toLowerCase
```js
str.toLowerCase()
```
- 모든 문자가 소문자인 문자열을 반환

```js
let btc = 'BitCoiN';

console.log(btc.toLowerCase());
// 'bitcoin'
```

## toUpperCase
```js
str.toUpperCase
```
- 모든 문자가 소문자인 문자열을 반환

```js
let btc = 'BitCoiN';

console.log(btc.toUpperCase());
// 'BITCOIN'
```

## indexOf
```js
str.indexOf(substr[, pos])
```
- substr: str 에서 찾을 문자열
- pos: str 에서 탐색을 시작할 위치
- str 에서 pos-index 부터 시작해서 substr 을 찾는다
- 있으면 substr 이 시작하는 index, 없으면 -1

```js
let str = 'btc is bitcoin. i think that btc is better than dollar';
let target = 'btc';

console.log(str.indexOf(target));
// 0
// str.indexOf(target, 0) 과 같다: 0번째 index 부터 시작해서 'btc' 를 찾는다.

console.log(str.indexOf('xrp', 3));
// -1

console.log(str.indexOf('btc', 30));
// -1
// 'btc' 가 시작하는 index는 0, 29 
// index 30 부터 보면 'btc' 가 없음


let pos = 0;
while (true) {

  let foundPos = str.indexOf(target, pos);
  // target(찾고자 하는 문자열) 을 str[pos] 에서부터 찾기 시작


  if (foundPos == -1) break;
  // 없을 때

  console.log(`pos: ${foundPos}`);
  // 있을 때


  pos = foundPos + 1;
  // 찾은 위치 다음부터 다시 검색 시작
  // pos = foundPos + target.length;
  // 이렇게 탐색 범위를 조금이라도 줄이면 효과가 있을까?
}
// 0
// 29
```

> `str.lastIndexOf(substr, position)`
> str의 끝에서부터 탐색한다

## includes
```js
str.includes(substr, pos)
```
- substr: target str
- pos: index
- pos-index 에서부터 탐색을 시작해서 해당 substr 이 존재하는지 탐색하는 메서드
- 있으면 **true**, 없으면 **false**
- substr 의 존재여부만 return 해준다

```js
let str = 'btc is only coin';

console.log(str.includes('btc');
// true

console.log(str.includes('eth');
// false
```

```js
let str = 'bitcoin and ethereum'

// str.startsWith('bit');
// 'bit' 로 시작하는 문자열이 있는지 검사
console.log(str.startsWith('bit');
// true

console.log(str.startsWith('xri');
// false

// str.endsWith('coin');
// 'coin' 로 끝나는 문자열이 있는지 검사
console.log(str.endsWith('coin');
// true

console.log(str.endsWith('bit');
// false

console.log(str.startsWith('and');
console.log(str.endsWith('and');
// false
// and 와 같이 매개변수로 넘긴 substr 이랑 완전히 똑같은 문자열은 포함 안시키는 듯,,,
```


