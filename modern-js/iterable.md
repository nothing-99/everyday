# Iterable

- `iteration protocol` : 순회 가능한 자료구조를 만들기 위한 약속
  - `iterable protocol`
    - `[Symbol.iterator]( )` 메서드를 호출하면 iterator protocol 을 준수한 iterator 를 반환하는 규약
    - iterable protocol 을 준수한 객체를 => `iterable` 
    - 이런 객체는 `for...of` `spread syntax` `destructuring assignment`의 대상이 될 수 있다.
  - `iterator protocol`
    - iterable 을 순회하며 value, done 을 프로퍼티로 가지는 객체를 반환하는 `next( )` 메서드를 가진 객체를 반환하는 규약
    - `iterable[Symbol.iterator]( )` 을 실행하면 iterator protocol 을 준수하는 iterator 를 반환

- iterator 를 반환하는 `[Symbol.iterator]( )` 메서드를 가진 객체를 `iterable` 이라 한다.
- iterator 는 `{ value: ret, done: boolean }` 를 반환하는 `next( )` 메서드를 가진 객체이다.
- `for...of` `spread syntax` `destructuring assignment` 에서 iterator 가 사용되고 next 메서드가 사용된다.

> [protocol] 다수의 불특정 다수가 특정 프로세스를 처리하기 위해 사전에 정의한 것, 

```js
// Array Object
const kindOfMonkeys = ['bitcoin monkey', 'mutant monkey'];

/*  Symbol.iterator 를 가지는 객체는 iterable 객체이다
 *  ( iterable protocol 준수 )
 *  for...of, spread syntax, destructuring 가능
 *  
 *  output: true => iterable obj
 */
console.log(Symbol.iterator in kindOfMonkeys)

/*  output:
 *  bitcoin monkey
 *  mutant monkey
 */
for(const monkey of kindOfMonkeys) {
  console.log(monkey);
}

/*  output: [ 'bitcoin monkey', 'mutant nonkey' ]  */
console.log([...monkey]);

/*  output: bitcoin monkey [ 'mutant nonkey' ]  */
const [bitcoin, ...rest] = kindOfMonkeys;
console.log(bitcoin, rest);
```

## 인터페이스 역할
Iteration Protocol 에 맞게 객체를 만들면 해당 객체는 `for...of` `spread syntax` `destructuring` 에 사용될 수 있다.
- [Symbol.iterator]()
- `next()` 메서드를 가진 객체 반환
  - return `{ value: data, done: boolean }`


## for...of Iterable
- iterator 를 이용
- iterator.next() 를 호출
- next()를 통해 반환된 iterator result obj 의 `value` 프로퍼티 값을 for...of 문에 사용된 변수에 할당
- `done` 프로퍼티가 false 일 동안 iterable 을 순회한다.
## for...in Object
- property attribute [[enumerable]] 의 값이 true 인 프로퍼티를 순회한다.
  - `Object.getOwnProperty(obj, property)` `Object.getOwnProperties(obj)` 를 통해 볼 수 있음.
- 단, Symbol 형의 경우 제외

## code

```js
// iterable 객체
// Symbol.iterator 메서드를 가진다
const iterable = {

  // Symbol.iterator 메서드는
  // next() 메서드를 가진 객체를 반환
  [Symbol.iterator]() {
    
    return {

      // next() 메서드는
      // iterator result object 를 반환
      // { value: [, done: ] }
      next() {
        return { value: , done: };
      }
    };
  }
};
```
```js
class monkeys {
  // mutant monkey [mm1, mm2, mm3] 
  // mutant monkey level
  constructor() {
    this.bitcoinMonkeys = 0;
    this.mutantMonkeys = [0, 0, 0];
  }

  add(type, level) {

    console.log(type, level);
    // bitcoin monkey
    if (type === 'bitcoin') {
      this.bitcoinMonkeys++;
    } 
    // mutant monkey
    else if (type === 'mutant') {
      switch (level.toLowerCase()) {
        case 'mm1':
          this.mutantMonkeys[0]++;
          break;
        case 'mm2':
          this.mutantMonkeys[1]++;
          break;
        case 'mm3':
          this.mutantMonkeys[2]++;
          break;
      }
    }
  }

  printInfoMonkeys() {
    console.log(`=====\nbitcoin monkeys: ${this.bitcoinMonkeys}\nmutant monkeys: ${this.mutantMonkeys}\n=====`);
  }

  /*  bitcoin monkey 는 하루에 2개의 바나나를 번다.
   *  mutant monkey 는 하루에 2, 5, 10개의 슬라임을 번다. 
   *  ( mutant monkey level 별로 다름 )
   *  해당 이터레이터를 이용해서 n-day 동안 벌어들이는 
   *  수익에 대한 정보를 얻을 수 있다.
   */
  [Symbol.iterator]() {
    const bananaPerDay = this.bitcoinMonkeys * 2;
    const slimePerDay = this.mutantMonkeys[0] * 2 + this.mutantMonkeys[1] * 5 + this.mutantMonkeys[2] * 10;
    let [banana, slime] = [0, 0];

    return {
      next() {
        banana += bananaPerDay;
        slime += slimePerDay;
        return { value: [banana, slime] };
      }
    };
  }
}

const myMonkeys = new monkeys();

myMonkeys.add('bitcoin');
myMonkeys.add('bitcoin');
myMonkeys.add('mutant', 'mm1');
myMonkeys.add('mutant', 'MM2');

/*  output:
 *  bitcoin monkeys: 2
 *  mutant monkeys: 1,1,0
 */
myMonkeys.printInfoMonkeys();

/*  output:
 *  1-day banana(4) / slime(7)
 *  2-day banana(8) / slime(14)
 *  3-day banana(12) / slime(21)
 */
let count = 0;
for (let [banana, slime] of myMonkeys) {
  // 3일 동안 벌어들이는 banana, slime 
  if (count === 3) break;
  console.log(`${count+1}-day banana(${banana}) / slime(${slime})`);
  count++;
}

const [day_1, day_2, day_3] = myMonkeys;
/*  output: 
 *  [4, 7]
 *  [8, 14]
 *  [12, 21]
 */
console.log(day_1);
console.log(day_2);
console.log(day_3);
```

# 참고
- 모던 자바스크립트 Deep Dive
