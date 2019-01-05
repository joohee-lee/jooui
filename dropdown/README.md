# Jooui -  Ui pattern 


## Dropdown

```
.cpnt-dropdown  -  container element common class naming 
.dropdown-1 , dropdown-2 ... -  container element class naming :  number add. 
.dropdown-1[data-index="1"] , dropdown-2[data-index=2] ...      -  data-index 

ex)
<div class="cpnt-dropdown dropdown-1" data-index="1" data-expanded="false">
...
</div>

// css /* js control */
.cpnt-dropdown[data-expanded="false"] .dropdown-menu{ display: none; }
.cpnt-dropdown[data-expanded="true"] .dropdown-menu{ display: block; }

```

------------------------------------------------------------
### 1. Dropdown - Basic  <http://jooe.kr/jooui/dropdown/ui-dropdown-menu.html>

* dropdown component
* 함수표현식(객체리터럴)으로만  설계. 

```

/* dropDown
 * data-index 값을 가져와서 이벤트 대상 타겟을  querySelector 로 찾는다. 
 * data-expanded control / 
 * @param  data-expanded / true /false 
 * @method toggle 펼침 / 닫힘 
 * css
 .cpnt-dropdown[data-expanded="false"] .dropdown-menu{ display: none; }
 .cpnt-dropdown[data-expanded="true"] .dropdown-menu{ display: block; }	
*/

@ data-expanded / true /false 
@ getAttribute / setAttribute 
@ classlist / addClass 

@param 

//selecting jquery or js
var $elNum = $(el).parent().attr('data-index');
var elCpnt = document.querySelector('.dropdown-'+$elNum);
var dataExpanded = dataset.getData(elCpnt, 'data-expanded');

//특이사항 
- jquery 셀렉팅을 해보았음. 
- jquery 변수는 변수명앞에 "$" 표기한다. 

@method
var uiDropDownToggle = function(el){  ... }

@eventBinding 
	HTMl handler event 
	onclick="uiDropDownToggle(this);"


```

### 2. Dropdown - Basic  <http://jooe.kr/jooui/dropdown/ui-dropdown-menu-2.html>

* dropdown component

```
/* dropDown
 * data-index 값을 가져와서 이벤트 대상 타겟을  querySelector 로 찾는다. 
 * data-expanded control / 
 * @param  data-expanded / true /false 
 * @method toggle 펼침 / 닫힘 
 * @method allHide 모두 열려져 있는 data-expanded = true 이면 false로 변경한다.  <-- 추가 
 * css
 .cpnt-dropdown[data-expanded="false"] .dropdown-menu{ display: none; }
 .cpnt-dropdown[data-expanded="true"] .dropdown-menu{ display: block; }	
*/

@ data-expanded / true /false 
@ getAttribute / setAttribute 
@ classlist / addClass 

@param 

//selecting jquery or js
var $elNum = $(el).parent().attr('data-index');
var elCpnt = document.querySelector('.dropdown-'+$elNum);
var dataExpanded = dataset.getData(elCpnt, 'data-expanded');

//특이사항 
- jquery 셀렉팅을 해보았음. 
- jquery 변수는 변수명앞에 "$" 표기한다. 

@method

var uiDropDown = {

	toggle: function(){

		},
	allHide: function(){

	} 	
};
@eventBinding 
	HTMl handler event 
	onclick="uiDropDown.toggle(this);

```
### 3. Dropdown - Basic  <http://jooe.kr/jooui/dropdown/ui-dropdown-menu-3.html>
// 이벤트가 발생하는 element가 아니라, 사용자가  outside(window.onclick=function(evt){....}) 를  click 할 경우. 

```

// When user clicks anywhere outside of the dropdown button( modal componet... ), close it

 * data-event  add ( modal, dropdown, ....)
 * @method clickOutside() add
 * @method allHide -> logic 을 javascript 로 변경 
   ( jquery / js performance 차이란 ?   )

//jquery 

	var $elCnptAll = $('.cpnt-dropdown');
	$elCnptAll.attr('data-expanded', false);


//js -- 1
		
	var elCnptAll = document.querySelectorAll('.cpnt-dropdown');

	for (var i in elCnptAll) {

		console.log(elCnptAll[i]);

	  	for (var j = 0; j < elCnptAll.length; j++) {
			dataset.setData( elCnptAll[j], 'data-expanded', false );
	  	}
	}
		
//js -- 2
	 var elCnptAll = document.querySelectorAll('.cpnt-dropdown');
		for (var i = 0; i < elCnptAll.length; i++) {
			dataset.setData( elCnptAll[i], 'data-expanded', false );
	}

```

### 이슈 


### 참고 URL 


