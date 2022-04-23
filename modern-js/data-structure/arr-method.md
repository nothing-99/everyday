# Method of Array
- [arr.push(...items)](#arr.push(...items))
- [arr.pop()](#arr.pop())
- [arr.shift()](#arr.shift())
- [arr.unshift(...items)](#arr.unshift(...items))
- [arr.splice](#arr.splice())
- [arr.slice](#arr.slice())

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

let realScams = scams.slice(1, 4);
console.log(realScams);
```