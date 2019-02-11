#  Ajax

- Ajax는 'Asynchronous JavaScript and XML'의 약자.
- Web에서 화면을 갱신하지 않고 Server로부터 Data를 가져오는 방법. 
- Ajax의 동작원리는 Browser에서 서버로 보낼 Data를 Ajax Engine을 통해 Server로 전송 
- 이 때 Ajax Engine에서는 JavaScript를 통해 DOM을 사용하여 XMLHttpRequest(XHR) 객체로 Data를 전달
- 이 XHR을 이용해서 Server에서 비동기 방식으로 자료를 조회
- Server에서 Data를 전달 할 때 화면전체의 HTML을 전달하지 않고 Text 또는 Xml형식으로 Browser에 전달


[] jquery ajax Api 이해한다. 
[] sample 코드를 테스트해본다. 
[] jquery & ajax & json  페이지를 만들어 본다. 

## jquery ajax api 
- jQuery이용해서 Ajax를 사용하게 되면 많은 이점이 있는데 그 중의 하나가 크로스브라우징의 문제를 jQuery가 알아서 해결해준다는 것이다. 
	뿐만 아니라 여러가지 편리한 기능들을 제공한다.
- jQuery.ajax : <http://api.jquery.com/jQuery.ajax/>
- api : $.ajax 

```

// jQuery를 이용한 Ajax 기본 사용방법

$.ajax({
    // URL은 필수 요소이므로 반드시 구현해야 하는 Property입니다.
    url : '요청 URL 주소를 입력'
    // 다양한 속성들 중에서 필요한 Option을 선택해서 구현('[]'는 반복해서 사용할 수 있다는 의미)
    [, Options]
});

```
