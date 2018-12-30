# Jooui -  Ui pattern 


## Toggle  

### 1. 카테고리 메뉴 UI   <http://jooe.kr/jooui/toggle/ui-toggle-menu-1.html>

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







### 참고 URL 


