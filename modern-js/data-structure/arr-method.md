# Method of Array
- [arr.push(...items)](#arr.push(...items))
- [arr.pop()](#arr.pop())
- [arr.shift()](#arr.shift())
- [arr.unshift(...items)](#arr.unshift(...items))
- [arr.splice](#arr.splice())
- [arr.slice](#arr.slice())
- [arr.concat](#arr.concat())

## arr.push(...items)
## arr.pop()
## arr.shift()
## arr.unshift(...items)
## arr.splice()
```js
arr.splice(index[, deleteCount, ...elements])
```
- index : **1st element**
- deleteCount : **# of element** for deletion
- elements : **elements for adding** in array

```js
let coins = ['btc', 'eth', 'xrp', 'stx', 'etc'];

/** deletion **/

coins.splice(1, 1);
// index 1 인 element 부터 1개의 element 를 제거 
// return : ['etc']
// coins : ['btc', 'xrp', 'stx', 'etc']

coins.splice(1, 3); 
// index 1 인 element 부터 3개의 element 를 제거
// return : ['xrp', 'stx', 'etc']
// coins : ['btc']

/** addition **/

coins.splice(0, 0, 'eth', 'xrp');
// index 0 에서부터 'eth', 'xrp' 를 추가하고 기존의 index 0 에 있는 element 부터 시작해서 추가되는 element 만큼 미룬다
// return : []
// coins : ['eth', 'xrp', 'btc']

coins.splice(3, 0, 'stx', 'xlm');
// index 3 에서부터 'stx', 'xrp' 를 추가하고 기존의 index 3 에 element 가 있다면 추가되는 element 수 만큼 미룬다
// return : []
// coins : ['eth', 'xrp', 'btc', 'stx', 'xlm']

/** replace **/

coins.splice(3, 2, '1inch', 'doge', 'etc');
// index 3 부터 2개의 element 를 제거하고 index 3 부터 '1inch', 'doge', 'etc' elements 를 추가한다.
// return : ['stx', 'xlm']
// coins : ['eth', 'xrp', 'btc', '1inch', 'doge', 'etc']
```
> [Note] element 추가 시에 splice 와 [index] 의 차이
> ```js
> let coins = ['btc', 'eth'];
> coins.splice(5, 0, 'stx'); // ['btc', 'eth', 'stx']
>
> let coins = ['btc', 'eth']; 
> coins[5] = 'stx'; // ['btc', 'eth', undefined*3, 'stx']
> ```

> [Note] 음수 index 도 사용가능,, 원리는 똑같음.


## arr.slice()
```js
arr.slice([start], [end]);
```
- start, end : index
- start index 부터 end index 바로 전까지의 subarray 를 반환

```js
let coins = ['btc', 'eth', 'etc', 'stx', 'xlm'];

let scams = coins.slice(1);
console.log(scams); // ['eth', 'etc', 'stx', 'xlm'];

let realScams = scams.slice(1, 3);
console.log(realScams); // ['etc', 'stx']


let copy = coins.slice();
// argument 로 아무것도 주지 않으면 전체 배열을 복사할 수 있다
// copy : ['btc', 'eth', 'etc', 'stx', 'xlm']
console.log(copy === coins); // false
```
> [Note] arr.slice() 를 통해 전체 배열의 복사본을 얻을 수 있다
> 복사본이라 동일한 elements 를 가지지만 각각의 배열이 다른 메모리 공간에 저장되어 있다. 그렇기에 === 연산을 수행하면 false 가 나온다.

## arr.concat()
```js
arr.concat(arg1, arg2...);
```
- arg 는 각각의 element 가 될 수 있고 array 가 올 수 있다
- concat 은 arr의 elements 와 arg 들의 각각의 elements 를 합친 새로운 array 를 반환
- arg 에 array 형이 오면 그 안의 각각의 요소들을 합친다. (배열 자체를 하나의 요소로 보는 것이 아니라)

```js
let coins = ['btc'];

let scams = ['eth', 'xrp', 'xlm'];

console.log( coins.concat('eth') );
// ['btc', 'eth']

console.log( coins.concat('eth', 'xrp', ['xlm', '1inch']) );
// ['btc', 'eth', 'xrp', 'xlm', '1inch']

console.log( coins.concat('eth', 'xlm', scams) );
// ['btc', 'eth', 'xlm', 'eth', 'xrp', 'xlm']
```

concat 의 인자로 **유사 배열 객체** 가 오면 배열처럼 동작할까?
-> 특수한 프로퍼티를 추가하면 가능하다.

```js
let arr = [1, 2];
let arrayLike = {
  0: 'zero',
  1: 'one',
  length: 2,
};

console.log( arr.concat(arrayLike) );
// [1, 2, [object Object]]
// 유사 배열 객체를 1개의 element 로 취급한다

arrayLike[Symbol.isConcatSpreadable] = true;
// special property : [Symbol.isConcatSpreadable]

console.log( arr.concat(arrayLike) );
// [1, 2, 'zero', 'one']
```

> [Note] Symbol.isConcatSpreadable
> concat 은 해당 프로퍼티를 가지고 있는 유사배열객체를 배열로 취급한다


