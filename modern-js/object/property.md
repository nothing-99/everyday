# Object Property
- [Object Property](#object-property)
  - [Flag and Descriptor](#flag-and-descriptor)
    - [getOwnPropertyDescriptor](#getownpropertydescriptor)
    - [defineProperty](#defineproperty)
    - [Example](#example)
  - [Getter and Setter](#getter-and-setter)

## Flag and Descriptor
property 는 `key: value` 뿐 아니라 더 다양한 옵션을 가지고 있다.
- `writable` : value 수정 가능 여부
- `enumerable` : 반복문을 통해 나열 가능 여부
- `configurable` : property 삭제 가능 여부, 3개의 옵션 수정 가능 여부

method
- [Object Property](#object-property)
  - [Flag and Descriptor](#flag-and-descriptor)
    - [getOwnPropertyDescriptor](#getownpropertydescriptor)
    - [defineProperty](#defineproperty)
    - [Example](#example)
  - [Getter and Setter](#getter-and-setter)

### getOwnPropertyDescriptor
```js
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```
- **obj** : property 정보를 가지고 있는 객체
- **propertyName** : 가지고 올 property
- propertyName 을 key 로 하는 프로퍼티의 descriptor 를 가지고 온다.

```js
let descriptors = Object.getOwnPropertyDescriptors(obj);
```
- **obj** : property 정보를 가지고 있는 객체
- 객체의 모든 property 에 대한 descriptors 를 가지고 온다.

[up](#object-property)
### defineProperty
```js
Object.defineProperty(obj, propertyName, descriptor);
```
- **obj**, **propertyName** : descriptor 를 적용하고 싶은 객체와 객체 프로퍼티
- **descriptor** : 적용하고자 하는 descriptor of property
- descriptor 에서 flags 들의 default 값은 false 이다. -> 설정해주지 않으면 자동적으로 false 로 세팅된다.

```js
Object.defineProperties(obj, descriptos);
// 여러개를 한 번에 설정 가능
```
[up](#object-property)

### Example
```js
let user = {
    name: 'john',
    toString() { return this.name; },
};

for (let key in user) { console.log(key); }
/* return
name
toString 
*/

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));
/* return
{
  "value":  "john",
  "writable":  true,
  "enumerable":  true,
  "configurable":  true
}

객체 선언할 때나 `obj.propertyName = value` 형태로 
프로퍼티를 추가할 때는 flags of property 는 모두 true
*/

Object.defineProperty(user, 'sayHi', {
    value: function() { console.log(`Hello, ${this.name}`); }
});
descriptor = Object.getOwnPropertyDescriptor(user, 'sayHi');
console.log(JSON.stringify(descriptor, null, 2));
/* return
{
  "writable":  false,
  "enumerable":  false,
  "configurable":  false  
}

Object.getOwnPropertyDescriptor 로 프로퍼티를 추가하면
나머지 flags 들은 모두 false
*/
```
[up](#object-property)

```js
let coin = {};

// value, writable, enumerable, configurable
// defineProperties 로 설정하지 않은 플래그들은 자동적으로 false 
Object.defineProperties(coin, {
    name: {
        value: 'bitcoin',
        enumerable: true,
        configurable: false,
    },

    isScam: {
        value: false,
        writable: true,
        configurable: true,
    },

    buy: {
        value: function() {
            console.log('buy');
        },
        enumerable: true,
        configurable: true,
    },

    sell: {
        value: function() {
            console.log('sell');
        },
    },
});

let descriptors = Object.getOwnPropertyDescriptors(coin);
console.log(JSON.stringify(descriptors, null, 2));
/* return
{
  "name": {
    "value": "bitcoin",
    "writable": false,
    "enumerable": true,
    "configurable": false
  },
  "isScam": {
    "value": false,
    "writable": true,
    "enumerable": false,
    "configurable": true
  },
  "buy": {
    "writable": false,
    "enumerable": true,
    "configurable": true
  },
  "sell": {
    "writable": false,
    "enumerable": false,
    "configurable": false
  }
}

method 의 경우는 value 가 나오지 않음... 실행해보면서 처음 봄
defineProperty로 설정하지 않은 플래그들은 (자동적으로) 모두 false
*/
```
```js
'use strict'
coin.name = 'ethereum' // error (use strict 가 없으면 오류가 발생하지 않지만 결과는 똑같음 -> 값이 바뀌지 않을 것임)
```
`Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>' at <anonymous>:2:11`
- `writable` flag 가 false 이기 때문에 값을 수정할 수 없음

writable 값을 **true** 로 바꾸면 가능할 것 같다
```js
'use strict'
Object.defineProperty(coin, 'name', { writable: true }); // error
delete coin.name; // error
/* 
name
- writable: false
- enumerable: true
- configurable: false
*/
```
`Uncaught TypeError: Cannot redefine property: name at Function.defineProperty (<anonymous>) at <anonoymous>:1:8`
`Uncaught TypeError: Cannot delete property 'name' of #<Object> at <anonymous>:2:1`
- `configurable` flag 가 false 이기 때문에 flag를 수정할 수도 해당 property 를 삭제할 수도 없다.

> [Note] configurable 은 property 값의 수정 여부를 결정하는 것이 아니다. configurable 이 false 더라도 writable 이 true 라면 해당 property 의 값은 수정 가능하다.

```js
'use strict'
coin.isScam = true; // success
console.log(coin.isScam);
/* return
true

isScam
- writable: true
- enumerable: false
- configurable: true
*/
```
```js
for (let key in coin) {
    console.log(key);
}
/* return
name
buy

enumerable
- name -> true
- isScam -> false
- buy -> true
- sell -> false
*/
```
[up](#object-property)

---

## Getter and Setter