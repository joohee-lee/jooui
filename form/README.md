# Form


## task

- [ ] 폼 요소 재정리

## Form

1. button
	> 허용된 ARIA ROLE : checkbox , link, menuitem, menuitemcheckbox, menuitemradio, radio, switch, tab
	- DOM 인터페이스 : HTMLButtom Element
	- button mdn <https://developer.mozilla.org/ko/docs/Web/HTML/Element/button>
	- html.spec.whatwg.org <https://developer.mozilla.org/ko/docs/Web/HTML/Element/button>

	```
		//type
		<button type="submit">submit</button> // submits the form
		<button type="reset">reset
		</button> // reset the form
		<button type="button">click</button> // Does nothing.
	```

2. datalist
	> 허용되는 부모 요소 Any element that accepts phrasing content.
	- <https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content>
	- Dom 인터페이스 : HTMLDataListElement
	- safari 지원 안함.
	- chrome 20 / ff4.0 / IE 10/ ..

```

	<div>Choose a browser from this list:</div>
	<input list="browsers" />
	<datalist id="browsers">
	  <option value="Chrome">
	  <option value="Firefox">
	  <option value="Internet Explorer">
	  <option value="Opera">
	  <option value="Safari">
	</datalist>

	<label>
	 gender:
	 <input name=sex list=genders>
	 <datalist id=genders>
	  <option value="Female">
	  <option value="Male">
	 </datalist>
	</label>

```

3. fieldset
4. form
5. input

> html.spec.whatwg.org <https://html.spec.whatwg.org/multipage/input.html>

```

	- <input type="hidden"> //Hidden
	- <input type="text"> //TEXT
	- <input type="search"> ///SEARCH
	- <input type="tel"> //telephone
	- <inut type="url"> // URL
	- <inut type="email">
	- <input type="password">
	- <input type="date">
	- <input type="month">
	- <input type="week">
	- <input type="time">
	- <input type="datetime-local">
	- <input type="number">
	- <input type="range">
	- <input type="color">
	- <input type="checkbox">
	- <input type="radio">
	- <input type="file">
	- <input type="submit">
	- <input type="image">
	- <input type="reset">
	- <input type="button">

 * Common input element attributes
	- maxlength / minlength
	- size
	- readonly
	- required
	- multiple
	- pattern
	- min / max
	- step
	- list
	- placeholder

```



6. keygen
7. label
8. legend - HTMl legend 요소는 유저 인터페이스 내 아이템의 캡션
9. meter
10. optgroup
11. option
12. output - 계산이나 사용자 행동의 결과
13. select -
14. textarea

## form html
- el-check-radio component <http://jooe.kr/jooui/form/el-check-radio.html>

## HTML5 forms introduction and new attributes

## 참고 URL

- html5-forms-introduction-and-new-attributes <http://html5doctor.com/html5-forms-introduction-and-new-attributes/>
