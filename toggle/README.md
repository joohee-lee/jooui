# Jooui -  Ui pattern 


## Toggle  

### 1. 카테고리 Meun UI 

-  <http://jooe.kr/jooui/toggle/ui-toggle-menu-1.html>

#### JS

```
	
/*

* module pattern / Namespace 
* uiCategory - Gnb menu 영역 

********************************

* @moduel : uiCategory
* @param :  { Element } elCnpt
* @param :  { Element } elBtnOpen / elBtnClose 
* @param :  { Element } elCnptDisplay / elBtnExpanded

* 참조 @method : dataset.getData / dataset.setData

*/

@ data-expanded / data-display
@ getAttribute / setAttribute 

@param 
	elCnpt:'',
	elBtn:'',
	elCnptDisplay:'',
	elBtnExpanded:'',
	elBtnClose:''
			

@method
	uiCategory.init()
	uiCategory.toggle()

@eventBinding 
	HTMl handler event 

	onclick="uiCategory.init();"

```

### 2. 카테고리 SideBar Menu UI   

- Left <http://jooe.kr/jooui/toggle/ui-toggle-sidemenu-left.html>
- Right  <http://jooe.kr/jooui/toggle/ui-toggle-sidemenu-right.html>


#### css

```

/* css Design  */
.div-sidebar{
		
	......

	transition: transform .5s ease, -webkit-transform .5s ease;
	
	}

/* left */
	.div-sidebar[data-align='left']{
		right: auto;
	    left: 0;
	}
	.div-sidebar[data-align='left'][data-show="false"]{
		-webkit-transform: translate3d(-100%,0,0);
	    transform: translate3d(-100%,0,0);
	}
	.div-sidebar[data-align='left'][data-show="true"]{
	    -webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	
/* right */
	.div-sidebar[data-align='right']{
		left: auto;
	    right: 0;
	}
	.div-sidebar[data-align='right'][data-show="false"]{
		-webkit-transform: translate3d(100%,0,0);
	    transform: translate3d(100%,0,0);
	}
	.div-sidebar[data-align='right'][data-show="true"]{
	    -webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
/*

```


#### JS 

```
* module pattern / Namespace 
* uiSideBar - Gnb menu 영역 

********************************

* @moduel : uiSideBar
* @param [element] elCnpt
* @param [element] elDimmed
* @param [boolean] elCpntShow / true / false 

* @method this.init()
* @method uiSideBar.setShow()
* @method uiSideBar.setHide()

*/

@ data-show / trur / false
@ getAttribute / setAttribute 

@param 
	elCnpt:'',
	elDimmed: '',
	elCpntShow

@method
	init();
	setShow();
	setHide();

@eventBinding 
	HTMl handler event 

	onclick="uiSideBar.setShow();"
	onclick="uiSideBar.setHide();"

```

### 3. js - classList used simeple test  (2019.02.11)
 - Element.classList
 - ie10++
 - mdn <https://developer.mozilla.org/ko/docs/Web/API/Element/classList>
 
 - Test HTML
 	* ex1. es5 <http://jooe.kr/jooui/toggle/ui-toggle-classlist-es6.html>
 	* ex2. es6 <http://jooe.kr/jooui/toggle/ui-toggle-classlist-es6.html>

### 4.accordion (2019.02.12)
 
 - Todo.
	* Element.classList 사용.
	* array.filter()를 이해.
	* CSS animation/transition를 이용하여 슬라이드 효과를 구현함.  
	* CSS animation/transition은 적절한 타이밍을 유지.(열고 닫히는 타이밍이 동일해야함) 
	* data-* 사용하지 않고, '.active' class + js control 

- Test HTML
- ex1. es5 <http://jooe.kr/jooui/toggle/ui-accordion-es5.html>
- ex2. es5/option - single  <http://jooe.kr/jooui/toggle/ui-accordion-option-es5.html>
- ex3. es5/option - multi  <http://jooe.kr/jooui/toggle/ui-accordion-option-es5-2.html>

```
 	* data-multi="true" ( mutil open )
	* data-multi="false" ( single open )
	* array -  [].filter.call 
	* array.filter()를 이해한다. 
	- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>
```

```
	
	list = document.getElementById("raffles-list").children; 
				list = [].filter.call(list, function(j) {
				    if (j.getAttribute("style") === "") {
				        return true;
				    } else {
				        return false;
				    }
	});

```

 - ex4. 
 	* es6 <http://jooe.kr/jooui/toggle/ui-accordion.html>	


- 참고 <https://poiemaweb.com/js-accordion-ui>




### 참고 URL 


