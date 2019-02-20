# Jooui -  Ui pattern 


## Carousel

```
케러셀 
회전목마와 같이 순환하는 슬라이드 쇼(이미지 또는 텍스트 슬라이드)를 구성하는 컴포넌트.


```

------------------------------------------------------------
### 1. product detail page  
* <http://jooe.kr/jooui/carousel/ui-carusel-1.html>
* product 상세보기 페이지에 "상품 이미지 뷰어" 컴포넌트 정의 
* 이전(prev) / 다음(next) control add
* css transtion 
* 함수선언식 
* option
 : 옵션은 data 속성을 통해 전달. data 속성의 경우 data-interval="" 처럼 data-에 옵션명을 추가.

```

# 옵션은 data 속성을 통해 전달. data 속성의 경우 data-interval="" 처럼 data-에 옵션명을 추가

@param data-current / number / 현재 아이템 index 값과 현재(current) item 값은 동일. 
@param  data-index / number  / 현재 item 의 색인(index) 값 (인디케이터 넘버가 될 수도 있음.)
@param data-type / String / img | text | video 


@ getAttribute / setAttribute 
@ classlist / addClass

@ 변수 선언부 
	var elCardImg = document.querySelector('.card-main-img');
	var elThumList = document.querySelector('.card-thum-list');
	var current = elThumList.getAttribute('data-current');
	var elItem = document.querySelectorAll('.item');
	var elItemLeng = elItem.length;

@method
	setPrdPreview(this);
	prev();
	next();

@eventBinding 
	HTMl handler event 
	onclick ="setPrdPreview(this);"
	onclick="prev();"
	onclick="next();"
	

```

* <http://jooe.kr/jooui/carousel/ui-carusel-1-1.html>


```

 * namespace 로 함수(객체리터럴) 설계 
/* 객체리터럴 / 네임스페이스 사용  */	
	var ui = window.ui || {};

	ui.sMallPrdCpnt = {
		
		init:function(){
			//스코프 내에서 사용할 변수 선언 
		},
		
		//method1
		setPrdPreview:function(){
		
		},

		//method2
		setCurrent : funcion(){

		},

		//method3
		next : funcion(){
			
		},

		//method4
		prev : funcion(){
			
		}	
	}	

@eventBinding 
	onclick="ui.sMallPrdCpnt.prev();"
	onclick="ui.sMallPrdCpnt.next();"

```

* <http://jooe.kr/jooui/carousel/ui-carusel-2.html>
* namespace 로 함수(객체리터럴) 설계 
* 이전(prev) / 다음(next) control add
* play /  control add
* css transtion  
* "hover" 추가필요.  
   mouseenter에서 캐러셀의 순환을 일시 중지하고 mouseleave에서 캐러셀을 다시 시작


```
	play: function(){

		},

	stop: function(){

		}
```

* setInterval / setTimeout 개념 

> setTimeout / clearTimeout
> 타이머가 만료된 뒤 함수나 지정된 코드를 실행하는 타이머를 설정합니다.
 <https://developer.mozilla.org/ko/docs/Web/API/WindowTimers/setTimeout>

> setInterval / clearInterval 
><https://developer.mozilla.org/ko/docs/Web/API/WindowTimers/setTimeout>


### 2. es6 / class 개념 이해 하기 

#### Todo 
* <http://jooe.kr/jooui/carousel/ui-carusel-es6-1.html>
* 무한루프 <http://jooe.kr/jooui/carousel/ui-carusel-es6-2.html>

- es6 문법을 사용하여 만들어본다. 
	- es6에서 class(함수를 의미) 란 무엇인가?
	- class 를 이용한 객체생성 
	- class 상속 
	- class 특징 
	- mdn <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes> 
```
	
	// Class는 사실 함수입니다. 함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class 문법도 class 표현식과 class 선언 두 가지 방법을 제공합니다.
	// sclass 선언 : class를 정의하는 한 가지 방법은 class 선언을 이용하는 것입니다. class를 선언하기 위해서는 클래스의 이름과 함께 class 키워드를 사용해야 합니다.
	// 최근 리액트 프로젝트들은 컴포넌트를 es6 class를 사용하는 추세입니다.

	class Polygon {
	  constructor(height, width) {
	    this.height = height;
	    this.width = width;
	  }
	}

```
- carusel 을 HtmlElement.offsetWidth 와 HtmlElement.offsetHeight 이용하여 아이템을 move 한다.

```
class Carousel {

			constructor(){

				this.carousel = document.querySelector('.comp-carousel');
				this.container = document.querySelector('.comp-carousel-inner');
				this.item = document.querySelector('.carousel-item');

				this.prevBtn = this.carousel.querySelector('.btn-prev');
				this.nextBtn = this.carousel.querySelector('.btn-next');
				
				this.itemWidth = this.item.offsetWidth;
				this.itemHeight = this.item.offsetHeight;
				this.itemLength = this.carousel.querySelectorAll('.carousel-item').length;

				
				//carousle move width 
				this.offset = 0;
				this.current = 1;


				//설정정보 
				this.config = {
					duration: 200,
					easing: 'ease-out'
				}

				//초기화 
				this.init();

				//evnet bining 
				this.attachEvent();

			}

			....
}			

```

### es6 - classes
	- class
		- constructor
		- extends
		- static

#### Constructor
- mdn <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/constructor> 
- <https://googlechrome.github.io/samples/classes-es6/index.html>
- 생성자(constructor) 메소드는 클래스가 오브젝트로 생성되고 초기되기 위한 특별한 메소드 입니다.
```
	//constructor([arguments]) { ... }

	class Polygon {
		constructor {
			this.name = "polygon";
		}
	}

	var poly1 = new Polygon();

	console.log(poly1.name);
	// 'polygon'
```		

#### extends

#### static


### 참고 URL 


