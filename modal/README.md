# Jooui -  Ui pattern 


## Modal

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



### 참고 URL 


