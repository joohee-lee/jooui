# jQuery 가이드 

> 참고
> 공식 사이트 : <http://jquery.com>
> API Documentation : <http://api.jquery.com/>

## index 
    
    1. 설치 및 버전 선택
	2. $ 식별자 
	3. DOM 탐색 
	4. DOM 조작 
	5. 이벤트 처리 
	6. 애니메이트 
	7. 메서드 체이닝
	8. Ajax 


## 1. 설치 및 버전 선택 
### 설치 
	- jQuery는 하나의 js 파일로 구성되어 다운로드 및 사용이 쉽다.
	- [jquery 공식 사이트 ](http://jquery.com
	- jQuery에서 제공하는 외부 URL을 이용하는 방법도 있으나, 지양
	- jQuery 같은 외부 소스는 다운로드해서 사용	



### 버전 선택 
	- 1.X 버전 : IE6 및 그 이후 버전을 지원
	- 2.X 버전 : IE 6~8버전은 지원하지 않으며, IE9 또는 그 이후 버전을 지원
		- PC 서비스의 경우 대부분 **1.X 버전(주로 1.8.3 버전)**을 사용
		- 모바일 서비스의 경우 대부분 **2.X 버전**을 사용


## 2. $ 식별자 
	- 함수명은 jQuery이고, jQuery() 함수 한 개만 사용하면 jQuery의 모든 기능을 이용
	- jQuery $ 식별자 사용
	- jQuery의 noConflict() 함수로 충돌 제거 및 jQuery 식별자 $ 대신 다른 것 사용하기 (prototype.js 과 같은 프레임워크를 사용시. 충돌이 있을 수 있음. )
	
    - jQuery(엘리먼트 오브젝트 | 'CSS스타일 선택자')

	```
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>  
    <script> 
     $.noConflict(); //이때부터 jQuery는 $ 식별자를 포기하고 jQuery() 를 사용함    
    </script>
    <script src="prototype.js"></script> 
    <script> 
     var arr = ['a', 'b', 'c', 'd', 'e']; 
     jQuery.each(arr, function(k, v){ //jQuery 식별자 사용 
           console.log(v);
     });
     jQuery('body').html('hello world');
    </script>
    ```

```
//$를 함수의 지역변수로 선언해서 외부에 있을지 모르는 타 라이브러리의 $와의 충돌을 예방
(function($){
    $('body').html('hello world');
})(jQuery)

```

```
	// jQuery 식별자 $ 대신 다른 것 사용
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>                 
    <script> 
     $.noConflict();
     var _$ = jQuery //식별자 변경 
    </script> 
    <script src="prototype.js"></script> 
    <script> 
     var arr = ['a', 'b', 'c', 'd', 'e']; 
     
     _$.each(arr, function(k, v){ //변경한 식별자로 jQuery 함수 사용 
           console.log(v);
     });
    </script> 
    ```


## 3. DOM 탐색 

- 가능하면, ID selector 를 사용하라 
(jquery - document.getElementById()를 사용)
```
// Fastest - 가장 빠른 것은 native javascript
document.getElementById("myId");

// Fast - still little slower than native
$("#myId");

// Slow
$('.myClass');
```

- class selector를 사용할 때에는 element type을 selector 앞에 사용하지 마라.
```
// Fast
var $products = $('.products');

// Slow
var $products = $('div.products');

```

- 특정 id를 기준으로 자식 element 목록을 탐색할 때는 .find()를 사용하라.
```
// Good - #products is already selected by document.getElementById() so only div.id needs to go through Sizzle selector engine
var $productIds = $('#products').find('div.id');

// Bad - a nested query for Sizzle selector engine
var $productIds = $('#products div.id');

```
- selector를 최적화하라
  (가능하다면 selector의 최우측은 "tag.class"를, 좌측엔 "tag" 또는 ".class"로 조합하면 빠르다.)
```
  // Optimized
$('.data td.gonzalez');

// Unoptimized
$('div.data .gonzalez');
```
- 복잡한 selector는 피하라.
```
/ Better
$('.data td.gonzalez');

// Normal
$('.data table.attendees td.gonzalez');
```

- 탐색 범위를 좁힐 수 있도록 selector에 context 정보를 제공하라.
```
// Faster - because now it only looks under class-container
$('.class','#class-container'); 

// Slower - because it has to traverse the whole DOM for .class
$('.class');
```

- 전역 selector는 피하라.
```
// Much better
$('.buttons').children();
// Extremely expensive
$('.buttons > *');

// Much better
$('.category input:radio'); 
// Implied universal selection
$('.category :radio');
// Same thing - explicit now
$('.category *:radio'); 
```

- selector를 명확하게 사용하라.
```
// Good
$('div.someclass input:radio');

// Bad
$('div.someclass :radio');
```

-  ID selector를 사용할때는 다른 것과 같이 사용하지 마라.  



## 4. DOM 조작 
- jQuery에 css 스타일을 섞어서 직접 사용하지 마라.
 (css에서 class를 정의하고, 자바스크립트에서 class를 추가, 삭제, 수정하여 스타일을 조작한다.)

```
/* Good */
.error { color: red; font-weight: bold; }

// Good
$("#mydiv").addClass("error");

// Bad
$("#mydiv").css({'color':red, 'font-weight':'bold'});

```

- element의 유무를 확인하고 실행하라.
```
// Good
var $mySelection = $('#nosuchthing');
if ($mySelection.length) {
    $mySelection.slideUp();
    ...
}
```

- append()를 보다 string concatenation 또는 array.join()을 사용하라.
```

// Even faster
var i = 0,
    array = [];
for(; i < 10000; i++){
    array[i] = '<li>' + i + '</li>';
}
$myList.html(array.join(''));

// Good
var $myList = $('#list'),
    list = '',
    i = 0;
for(; i < 10000; i++){
    list += '<li>' + i + '</li>';
}
$myList.html(list);

// Bad
var $myList = $('#list');
for(var i = 0; i < 10000; i++){
    $myList.append('<li>' + i + '</li>';);
}
```


# jQuery API 가이드

- <https://api.jquery.com/>