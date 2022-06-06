크로미아 기반 웹 브라우저 : 크롬, 브라우저, 웨일 등등,,

javascript 는 브라우저에 내장되어 있음... 별도로 다운할 필요가 없다.
즉, 브라우저가 있다면 js 는 자동적으로 딸려온다!!!! 

- three.js
- react native
- electron
- socket.io
- ml5.js

---

브라우저는 `.html` 파일을 불러오고 `.html` 파일이 `.css`, `.js` 파일을 불러온다
- link tag
- script tag

그 후 브라우저는 css, js 파일들을 인지하고 각각의 엔진을 통해 실행한다.

---

JS 는 HTML 의 요소에 접근할 수 있다.

`document` 는 브라우저 실행시에 만들어지는 객체이고 html 파일을 가리키는 객체이다.

브라우저는 html 에서 `document` 객체를 만들고 js 는 일반적인 객체 프로퍼티 접근 방식을 통해 html 여러 요소에 접근할 수 있다.
-> js 를 통해 html 요소를 추가할 수 있다!!! (변경, 삭제 등등)

`document.getElementById` 는 단일 객체 반환
`document.getElement~` 나머지는 `array` 형태를 반환
`document.querySelector` 는 단일 객체 반환
`document.querySelectorAll` 는 `array` 형태를 반환, NodeList 형태로 실시간으로 변경이 반영된다.

querySelector 의 경우 CSS selector 를 인자로 가진다.
( CSS selector 가 편한 사람은 get series 를 사용하지 않아도 될까? )
  
---

`addEventLister(event, callback)` 을 통해 브라우저가 특정 event 가 발생할 때 특정 일이 일어나도록 할 수 있다.
- web api mdn 을 통해 모든 event 를 찾아볼 수 있음
- click, mouseenter, mouseleave ...

style 은 CSS 파일을 통해 결정되는 것이 대부분 옳다. 단, JS 로도 설정 가능하다는 것은 알고 있자. (?? JS 로 CSS 파일 변경이 가능하다는 걸까 ??)

---

event listen 을 위한 2가지 방법이 있다.
- `addEventListener(event, callback)` method 이용
  - `removeEventListener` 을 통해 event listen 제거 가능
- `on~ = callback` method 이용

```js
const h1 = document.querySelector('div h1');
console.dir(h1);

h1.addEventListener('click', () => {
  h1.style.color = 'tomato';
})
h1.addEventListener('mouseenter', () => {
  h1.innerText = 'mouse is here';
})
h1.addEventListener('mouseleave', () => {
  h1.innerText = 'mouse is gone';
})

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
  alert('copier!!');
}

function handleWindowOffline() {
  alert('SOS no whifi!!');
}

function handleWindowOnline() {
  alert('wifi!!');
}
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
```

---

1. find element
2. event listen
3. react to event

```js
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor; 

  if (currentColor == 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  }

  h1.style.color = newColor;
}
```
js 에서도 style 을 이렇게 변경할 수 있지만 js 에서 css 파일에 접근해서 거기서 수정을 할 수 있을까? ( 이전 방법은 그다지 스마트하지 않음 ,, 깔끔하지 않음 -> 각각이 근본적으로 맡은 역할을 생각해보자 )
```css
h1 {
  color: cornflowerblue;
}

.active {
  color: tomato;
}
```
```js
function handleTitleClick() {
  if (h1.className === 'active') {
    h1.className = '';
  } else {
    h1.className = 'active';
  }
}
```
```js
// 동일한 raw string 을 사용하면 실수로 잘못 작성해도 오류를 나타내지 않지만
// 변수를 잘못 작성하면 오류를 나타내준다.
// 그렇기 때문에 변수에 raw string 을 저장해서 사용하는 것도 좋은 방법이 된다.
function handleTitleClick() {
  const clickedClass = 'clicked';
  if (h1.className === clickedClass) {
    h1.className = '';
  } else {
    h1.className = clickedClass;
  }
}
```
여러개의 class 를 가지는 경우 직접적으로 모든 class 를 적어줘도 되지만 다른 방법은 없을까?
-> `classList`

---

```js
function handleTitleClick() {
  const clickedClass = 'clicked';
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
```
```js
// very simple
function handleTitleClick() {
  // @param : className
  // classList 에서 해당 className 이 있는지 확인해서
  // if exist -> remove
  // if non-exist -> add 
  h1.classList.toggle('clicked');
}
```

- style property 로 직접 js 에서 수정
- css 에 class 에 해당하는 style 을 추가하고 js 에서 html 에 class 부여
- toggle 로 한방에 정리

---

```js
const loginForm = document.getElementById('login-form');

// search range 를 document 전체에서 특정 부분으로 줄일 수 있다.
// starting point 를 조절함으로써,,,
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

// const loginInput = document.querySelector('#login-form input');
// const loginInput = document.querySelector('#login-form button');

function onLoginBtnClick() {
  const userName = loginInput.value;
  // empty
  if (vale === '') {
    console.log('Please write your name');
  } 

  // length
  else if (value.length > 15) {
    console.log('Your name is too long')
  }

  // valid
  
}

loginButton.addEventListener('click', onLoginBtnClick);
```

`<input>` 에 특정 attr 은 validation 을 자체적으로 수행할 수 있도록 옵션을 부여할 수 있는데 이것이 수행되기 위해서는 `<form>` 안에 위치해야 가능하다. 

`<div>` 내부에 위치할 때는 수행되지 않는다. 

그렇기에 `<form>` 내부에 위치시키거나 js 로 interaction 해야 한다.

<form> 내부에서 더 이상 입력할 <input> 이 없을 때 Enter 를 누르면 자동적으로 submit (제출) 된다. ( 이때, 웹페이지가 새로고침 되는 것은 덤,, input value 가 모두 사라진다 )
- submit 은 웹페이지의 새로고침이 동반된다.

제출 시에 새로고침이 되면 input value 가 모두 사라지는 데 이것을 막기 위해서는 어떻게 해야할까?? form - input pair 를 사용하지 않는 방법뿐일까??

브라우저는 form - input 후에 enter (or click) 시에 제출 후 새로고침 하도록 프로그래밍 되어 있음. 이 default 를 수정할 수 있다.

```js
// info argument 는 없어도 무방,, 하지만 JS 는 해당 argument 에 
// 발생한 event 에 대한 정보를 담을 그릇으로 생각해 정보를 담는다.
function onLoginSubmit(event) {

  // event 발생 시에 default 로 발생하는 일들을 막는다.
  // 이 경우 form 을 submit 할 경우 
  // 브라우저가 페이지를 새로고침하는 것이 default 로 설정되어 있지만 
  // 발생하지 않도록 한다.
  event.preventDefault();
  console.log(event);
}

// addEventListener 를 통해 특정 event 가 발생하면
// 브라우저는 callback 함수를 호출한다.
// 이때, JS Engine 은 발생한 event 에 대한 정보를 제공한다.
// 우리는 function 작성시에 argument 를 작성하면 
// 그 곳에 event info 가 저장되고 이것을 이용할 수 있다.
loginForm.addEventListener('submit', onLoginSubmit);
```
> Note : `form` 의 default 동작은 `submit`
---

> Note : `a` 의 default 동작은 `move to href`

```js
function handleLinkClick(event) {
  alert('clicked!');
}
```

alert 가 실행되면 모든 동작이 STOP!,, 확인 누르면 다시 EXEC!
( alert 를 잘 사용하지 않는 이유 )


