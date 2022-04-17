# 함수

## return

- `return;` 은 `return undefined;` 와 같다.

## naming

- 함수 이름은 가능한 한 간결하고 명확해야 한다.

- 함수 이름은 해당 함수가 어떤 동작을 하는지 쉽게 유추할 수 있게 지어야 한다.
  
  - "show..." : 무언가를 보여준다.
  
  - "get..." : 값을 반환한다.
  
  - "calc..." : 무언가를 계산한다.
  
  - "create..." : 무언가를 생성한다.
  
  - "check..." : 무언가를 확인하고 true/false 값을 반환한다.

> Note: 함수는 최대한 동작 하나만 하도록 작성해야 한다.

```javascript
// n 이하의 수들 중에 소수인 수들을 보여준다
// version 1
function showPrimes(n) {
    let isPrime = true;

    for (let i = 2; i <= n; i++) {
        isPrime = true;

        // console.log(`i: ${i}`);
        for (let j = 2; j <= Math.sqrt(i); j++) {
            // console.log(`j: ${j}`);
            if (i % j == 0) isPrime = false;    
        }

        // console.log('=====================\n\n');
        if (isPrime) alert(i);    
    }
}
```

```javascript
// version 2
function showPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) alert(i);
    }
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;    
    }

    return true;
}
```

- version 1
  
  - showPrimes(n)
    
    - n 이하의 수들 중에 소수인 수를 출력한다.
    
    - n 이하의 수들이 소수인지 확인한다.

- version 2
  
  - showPrimes(n) : n 이하의 수들 중에 소수인 수를 출력한다.
  
  - isPrime(n) : n 이하의 수들이 소수인지 확인한다. 
