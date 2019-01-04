# Jooui -  Ui pattern 


## Toggle  

### 1. 카테고리 Meun UI   <http://jooe.kr/jooui/toggle/ui-toggle-menu-1.html>

* 객체리터럴 표기법

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

### 1. 카테고리 SideBar Menu UI   

- Left <http://jooe.kr/jooui/toggle/ui-toggle-sidemenu-left.html>
- Right  <http://jooe.kr/jooui/toggle/ui-toggle-sidemenu-right.html>


* css

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


* 객체리터럴 표기법

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





### 참고 URL 


