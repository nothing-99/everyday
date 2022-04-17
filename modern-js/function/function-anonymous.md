# 익명 함수 (anonymous function)

변수에 할당하는 것 없이 ( 이름 없이 ) 선언한 함수를 말한다.

익명 함수는 이름이 없기 때문에 당연히 외부에서는 접근할 수 없다.

```javascript
function ask(question, yes, no) {
    if (confirm(question)) 
        return yes();
    return no();
}
```

```javascript
ask(
    "only bitcoin",
    function() { alert('agree'); },
    function() { alert('disagree'); }
);
```


