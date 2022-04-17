# 콜백 함수 (callback)

함수를 값처럼 전달할 수 있다.

```javascript
// yes, no -> 'callback function' or 'callback'
function ask(question, yes, no) {
    if (confirm(question)) 
        return yes();
    return no();
}
```

```javascript
function showOk() {
    alert('agree');
}
```

```javascript
function showCancel() {
    alert('disagree');
}
```

```javascript
ask('only bitcoin!!', showOk, showCancel);
```

> Note: 자바스크립트는 함수를 "특별한 값" 으로 취급한다는 점을 생각해보면 이해하기 쉬울 것임
