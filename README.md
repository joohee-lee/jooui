# Jooui -  Ui pattern 

# UI pattern 정의 

1. 필요한 컴포넌트를 정의한다.
2. 기능별로 컴포넌트(component) 구조 및 디자인을 ( Html: markup / CSS)한다. 
3. ui.js

## UI pattern 명세서 
-  Ui markup / css Guide / wai-aria 
-  Ui Script Guide

## markup 
### data-* 정의 (aria-* 값을 참고) 

1. data-current : 현재 current 위치를 Number 로 정의  
2. data-index, data-idx : item 의 index 값 정의 
3. data-selectd : "true,false,undefined"
4. data-haspopup : token -  popup 상태 
5. data-hidden : "true,false,undefined"
6. data-control : "play, paused ..."
7. data-expanded : "true,false,undefined" (펼침:접힘)
8. data-modal : "true,false,undefined" 

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

1. Tab - simple 
- Tab comopnent id 네이밍   
- Ui tab simple markup / css
- @method show / hide 
- <http://jooe.kr/jooui/tab/ui_tab.html>

2. Tab - multi 
- Tab comopnent id 네이밍 
- Ui tab markup / css
- @method show / hide / prev / next / autorolling / play / stop
- <http://jooe.kr/jooui/tab/ui_tab-m.html>

3. Tab - multi  
- Tab comopnent id 네이밍 
- Ui tab markup / css
- Ui tab show / hide / prev / next / autorolling / play / stop
- css3 / transition 
- <http://jooe.kr/jooui/tab/ui_tab-transition.html>

------------------------------------------------------------

### banner 

```
/*

* module pattern / Namespace 
* img(banner) rolling case 
********************************
* @moduel : uiRollingA
* @param  : { Elemenet } componentID 
* @pargm  : { Elemenet } item / { Number } current / { String } state / { Number } len 
* @method  : init / setCurrent / setItemCurrent / next / play / stop
* 참조 @method : dataset.getData / dataset.setData
* 참조 @method : cc.nextIdx 

*/

```

------------------------------------------------------------

1. banner 


- 배너 1 . <http://jooe.kr/jooui/rolling/ui_img-rolling.html>
```
* singleton 

var uiRollingA = { ..

}	
```

-  배너 2 . <http://jooe.kr/jooui/rolling/ui_img-rolling-instance.html>

```
var uiRollingA = function( cnpt ){

	this.elCnpt = cnpt;
	this.elIem = '';
	this.current = 0;
	this.len = 0;
	this.time =  2000;
	this.state = '';
};

uiRollingA.prototype = {
...
}

//>banner - basic -- 1
var a = new uiRollingA();
a.play('compBanner1', 3000);

//>banner - basic -- 2
var b = new uiRollingA();
b.play('compBanner2', 1000);

//>banner - basic -- 3
var c = new uiRollingA();
c.play('compBanner3', 2000);

```


### 참고 URL 


