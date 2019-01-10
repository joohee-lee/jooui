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

* setInterval / clearInterval / setTimeout 개념 


### 참고 URL 


