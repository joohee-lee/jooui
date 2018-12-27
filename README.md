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


### Tab
1. Tab - simple 
- Ui tab simple markup / css
- Ui tab show / hide function add



### 참고 URL 


