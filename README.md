# Jooui -  Ui pattern 

# UI pattern 정의 

1. 필요한 컴포넌트를 정의한다.
2. 기능별로 컴포넌트(component) 구조 및 디자인을 ( Html: markup / CSS)한다. 
3. ui.js

## UI pattern 명세서 
-  Ui markup / css Guide / wai-aria 
-  Ui Script Guide

## markup 
### Using data attributes - data-* 정의 (aria-* 값을 참고) 

1. data-current : 현재 current 위치를 Number 로 정의  
2. data-index, data-idx : item 의 index 값 정의 
3. data-selectd : "true,false,undefined"
4. data-haspopup : token -  popup 상태 
5. data-hidden : "true,false,undefined"
6. data-state / control : "play, paused ..."
7. data-expanded : "true,false,undefined" (펼침:접힘)
8. data-modal : "true,false,undefined" 
9. data-show : "true, false, undefinded"



```
<! -- js control : data-*  -->
<element data-current="0">
<element data-idx="0">
<element data-selected="true , false , undefined">
<element data-haspopup="true, menu|dialog , listbox , tree, grid , false, default">
<element data-hidden="true, false, undefined">
<element data-control="play, paused ...">
<element data-expanded="true, false, undefined">
<element data-modal="true, fals, undefined">
```

## css

### Responsive breakpoints
```
//sm devices 기준 
//sm 576px 이상 
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

//md
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

//lg
// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

//xl
// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }


//xl desktop 기준

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

```

## wai-Aria ( role / states / properties)

### 참고 문서  
- HTML5.2 <https://www.w3.org/TR/html52/>
- wai-aria	<https://www.w3.org/TR/wai-aria/>
- using-aria	<https://www.w3.org/TR/using-aria/>
- html-aria	<https://www.w3.org/TR/html-aria/>
- wai-aria-practices	<https://www.w3.org/TR/wai-aria-practices/>
- wai-aria-practices-landmarks	<https://www.w3.org/TR/wai-aria-practices/examples/landmarks/>
- <https://github.com/lezhin/accessibility/blob/master/aria/README.md>

```
<!-- 역할(role) -->

<element role="tablist">
<element role="tab">
<element role="tabpanel">
<element role="tooltip">
<element role="alert">
<element role="alertdialog">
<element role="dialog">
<element role="navigation">
<element role="complementary">
<element role="none presentation">

<!-- 상태(states) -->
<element aria-current="page|step|location|date|time|true|false(default)">
<element aria-selected="false|true|undefined(default)">
<element aria-haspopup="true|menu|dialog|listbox|tree|grid|false(default)">
<element aria-expanded="true|false|undefined(default)">
<element aria-pressed="true|false|mixed|undefined(default)">
<element aria-hidden="true|false|undefined(default)">

<!-- 속성(properties) -->
<element aria-controls="ID reference list">
<element aria-live="polite|assertive|off(default)">
<element aria-labelledby="ID reference list">
<element aria-label="string">
<element aria-describedby="ID reference list">
<element aria-modal="true|false(default)">

```


## JS 

### 유지보수가 가능한 코드의 특징 
```

1. 읽기 쉽다. 
2. 일관적이다. 
3. 예측가능하다.
4. 한 사람이 작성한 것처럼 보인다. 
5. 문서화되어있다. 

```


### 객체 리터럴 문법 

```
1. 객체를 중괄호 { } 로 감싼다. 
2. 객체 내의 프로퍼티와 메서드를 쉼표(,) 로 분리한다. 
   마지막 이름-값 쌍 뒤에  쉼표가 들어가면 IE 에서는 에러가 발생하므로, 
   마지막에는 사용하지 말아야한다. 
3. property 명과 프로퍼티 값은 ; 으로 분리
4. 객체를 변수에 할당할 때는 닫는 중괄호 뒤에 세미콜론을 빼먹지 않도록 ! 

```

```
var module = { 
	key : 'value', 
	pulicMethod : function () { } 
}

```


### singleton pattern Design 

- the Basic Structure of the singleton

```
var Singleton = {
	
	attribute1 : true,
	attribute2 ; 10, 

	method1 : function() {

	},
	
	method2 : function(arg){

	},
	
	//initializtion method
	init: function(){

	}

};

var total = Singleton.attribute2 + 5;
var result = Singleton.method1();


- /* using a namespace */
var MyNamespace = {
	
	findProduct:function(id){
		....
	}
};
```

- A singleton as a wrapper for page-specific code
(페이지 특정 코드를위한 래퍼로서의 싱글 톤)

```

Namespace.PageName = {

	//page constants 
	constant_1 : true, 
	concstant_2 : 10, 

	//page methods
	method1: function(){
		...
	},

	method2: function(){
		...
	},

	//initializtion method
	init: function(){

	}
};

// Invoke the initialiaztio method after the page loads. 

addLoadEvent(Namespace.PageName.init);
```


### Module pattern Design 

- 모듈 패턴은 public과 private 형태로 내부 속성들을 관리할 수있는데,
모듈은 즉시실행함수표현(IIFE)를 통해 private 변수를 구현할 수 있다. 

- <http://webclub.tistory.com/5?category=501048>


```
var HTMLChanger = (function(){
		var contents = 'private 변수';

		var changeHTML = function(){
			var element = document.getElementById('attribute-to change');
			element.innerHTML = contents;
		}

		return {
			callChangeHTML : function(){
				changeHTML();
				console.log(contents);
			}
		}

	};
})();

```
 ```
즉시실행함수 
var clerk = (function(){

    //var. / 함수구문

}());

// SPA 모듈 작성 순서 예시
var app = (function() {

    // 1. 모듈 스코프 내에서 사용할 변수 작성
    var scopeVar = {};
    var utilMethod;
    var manipulateDom;
    var eventHandle;
    var initModule;

    // 2. 유틸리티 메소드 작성
    utilMethod = function() {
        // 실행코드
    };

    // 3. DOM 조작 메소드 작성
    manipulateDom = function() {
        // 실행코드
    };

    // 4. 이벤트 핸들러 작성
    eventHandle = function() {
        // 실행코드
    };

    // Public 메소드 작성
    initModule = function() {
        // 실행코드
    };

    return {
        init : initModule
    };
}());

var clerk = (function() {  

    var name = 'Teo';
    var sex = '남자';
    var position = '수석 엔지니어';
    
    // salary private
    var salary = 2000;
    var taxSalary = 200;
    var totalBonus = 100;
    var taxBonus = 10;

    var payBonus = function() {
        totalBonus = totalBonus - taxBonus;
        return totalBonus;
    };

    var paySalary = function() {
        return salary - taxSalary;
    };

    // Public 속성, 메소드
    return {
        name : name,
        sex : sex,                 
        position : position,
        paySalary : paySalary,
        payBonus : payBonus
    };

    
}());

```

### 전역변수 대신 네임스페이스를 사용

> 자바스크립트는 전역변수에 기반을 두고 있다.
> 즉, 모든 컴파일 단위는 하나의 공용 전역 객체(window)에 로딩된다.
> 전역변수는 언제든지 프로그램의 모든 부분에서 접근할 수 있기 때문에 편하지만,
> 바꿔 말하면 프로그램의 모든 부분에서 변경될 수 있고, 그로 인해 프로그램에 치명적인 오류를 발생시킬 수 있다.
> 전역변수 사용은 하위 모듈들이 독립적으로 실행되는 것을 어렵게하고, 프로그램의 신뢰도를 현격히 떨어뜨린다.

- 참고:// 안티 패턴 <https://github.com/nhnent/fe.javascript/wiki/%EC%95%88%ED%8B%B0-%ED%8C%A8%ED%84%B4>

```
[Good]
// 전역변수 global 하나만 추가
var global = {
    // 전역 변수 하위에 객체와 함수가 존재
    name: '',
    sayName: function() {
        alert(this.name);
    }
};

```
```
// ex company Name.의 네임스페이스로 cn를 사용
var cn = window.cn || {};

// 그 하위에 서비스명을 2차 네임스페이스로 사용 
cn.serviceName = cn.serviceName || {};

// 페이지별 또는 기능별 모듈명을 3차 네임스페이스로 사용
cn.serviceName.util = {...};
cn.serviceName.component = {...};
cn.serviceName.model = {...};

// 필요에 따라 4차, 5차 네임스페이스로 확장하여 사용
cn.serviceName.view.layer = {...};
cn.serviceName.view.painter = {...};


```
### Event Binding 
#### HTML 이벤트 핸들러  

```
 <a href="" onclick="hide()">click</a> 

- 이 방법은 권장하지는 않지만 운영이 쉽다고 생각함. 
- 빠른 개발, 단순한 기능, 보안상 중요하지 않은 기능, 
- 라이브러리를 이용 안한다면 inline 또는 onload와 같이 속성을 통해 직접 이벤트 등록
- 현재, jooui 에서는  HTML 이벤트 핸들러로 바인딩으로 설계. 
```


#### 전통적인 DOM 이벤트 핸들러  / HTML 과 자바스크립트 분리. 

```

element.onevent = functionName;

next.onclick = next ;

function next(){
	
	current = current +1;

	if( current > elItemsCount ){

		current = 1;
	}

	setCurrent(current);

	return false;

}
```

#### DOM2 이벤트 리스너 (event lintener)  

```
#### element.addEventListener('event', functionName [,불리언]); 
#### element.removeEventListener('event', functionName [,불리언]);

[, 불리언] --> capture 기능을 지정하며 일반적으로 false 를 사용한다. 
```
```
- ie8 에서 작동 되지 않음. 
- 하나의 이벤트로 여러개의 함수를 실행 할 수 있다. 

function next(){
	current = current +1;

	if( current > elItemsCount ){

		current = 1;
	}

	setCurrent(current);

	return false;
}


var el = document.ElementById('btnNext');
el.addEventListener('click', next, false);
```
------------------------------------------------------------

### Tab
* <http://jooe.kr/jooui/tab/>

------------------------------------------------------------

### banner 

* <http://jooe.kr/jooui/rolling/>


------------------------------------------------------------

### toggle

* <http://jooe.kr/jooui/toggle/>

------------------------------------------------------------

### Modal / popOver

* <http://jooe.kr/jooui/modal/>

------------------------------------------------------------

### Dropdown

* <http://jooe.kr/jooui/dropdown/>

------------------------------------------------------------

### carousel

* <http://jooe.kr/jooui/carousel/>

------------------------------------------------------------

### plugin - swipe (carousel 대응)

* <http://jooe.kr/jooui/swipe/>

### plugin - tweenmax (animate )

* <http://jooe.kr/jooui/tweenmax/>



### 참고 URL 


