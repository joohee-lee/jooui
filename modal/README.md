# Jooui -  Ui pattern 


## Modal

```
// .modal-open      - body class for killing the scroll 
// .modal           - container to scroll within
// .modal-dialog    - positioning shell for the actual modal
// .modal-content   - actual modal w/ bg and corners and stuff
// .modal-back. - dimmed bg 

cf. Bootrstarp modal ui 
```

------------------------------------------------------------
### 1. Modal-default  <http://jooe.kr/jooui/modal/ui-modal-1.html>

* modal component
* component id 

```
	
@ data-hidden / true or false 
@ getAttribute / setAttribute 
@ classlist / addClass 

@param 
	// global
	var elBody, hideTarget 
	
	// 
	var elModal, elModalBtn, dataHidden 
		

@method
	toggleModal(cpnt, el)

@eventBinding 
	HTMl handler event 
	onclick="toggleModal('exampleModal-1', this);"
	onclick="toggleModal('exampleModal-1');"


```

### 2. Modal-default  <http://jooe.kr/jooui/modal/ui-modal-2.html>

* modal component
* dimmed 동적으로 생성. 
* component id 

```
# ui.js add
	
@ data-hidden / true or false 
@ dataset / getAttribute / setAttribute 
@ classlist / addClass 

@param 
	
	hideTarget : undefined,
	
	var elBody  // document.body;
	var elModal // componet id element
	var elModalBtn // modal first focus element 
	var dataHidden // modal data-hidden true or false

@method
	uiModal.toggleModal(cpnt, el)
	uiModal.showDimmed() // dimmed create Element
	uiModal.hideDimmed() // remove create Element

@eventBinding 
	HTMl handler event 
	onclick="uiModal.toggleModal('exampleModal-1', this);"
	onclick="uiModal.toggleModal('exampleModal-1');"


```

#### 이슈 
- 상황 dimme div 생성시, .innerHTml 과 += 사용하니 더이상 구문을 실행하지 않는 이슈가 발생 
- 대안  creatElement 와 removeElement 메소드 사용하여 dimmed element 를 동적으로 구현. 


### 3. Modal-middle  <http://jooe.kr/jooui/modal/ui-modal-4-m.html>
```
<style> 
#wrapper { display: table; } 
#cell { display: table-cell; vertical-align: middle; } 
</style> 
<div id="wrapper">
	 <div id="cell"> 
	 	<div class="content">Content goes here</div> 
	 </div> 
</div>

############################################################

.modal[data-centered="true"] .modal-middle{
	display: table;
	width: 100%;
	height: 100%;

}
.modal[data-centered="true"] .modal-dialog{
	display: table-cell;
    padding: 10%;
    vertical-align: middle;
}

.modal[data-centered="true"] .modal-content{
	width: inherit;
    height: inherit;
    margin: 0 auto;
}


```
### 4. Modal-ani--1  <http://jooe.kr/jooui/modal/ui-modal-1-ani.html>
* 참고 Bootstrap ui logic 
* animation add
* css taransition / transform 

```

@ css

/* animation */
.fade { transition: opacity .15s linear;}
.fade:not(.show) { opacity: 0; }

.modal-dialog {
   width: auto;
 }    

.modal.fade .modal-dialog{
   /* transition:-webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,
    -webkit-transform .3s ease-out;
    */
    -webkit-transform: translate(0,-25%);
    transform: translate(0,-25%);
    transition: transform .3s ease-out;
}

.modal.show .modal-dialog {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
}


@ ui.js add
	
@ data-hidden / true or false 
@ dataset / getAttribute / setAttribute 
@ classlist / addClass 

@param 
	
	hideTarget : undefined,
	
	var elBody  // document.body;
	var elModal // componet id element
	var elModalBtn // modal first focus element 
	var dataHidden // modal data-hidden true or false

@method
	uiModalAni.toggleModal(cpnt, el)
	this.showDimmed() // dimmed create Element
	this.hideDimmed() // remove Element

@eventBinding 
	HTMl handler event 
	onclick="uiModalAni.toggleModal('exampleModal-1', this);"
	onclick="uiModalAni.toggleModal('exampleModal-1');"


```


### 참고 URL 


