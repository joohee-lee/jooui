# 전환(transform), 전이(transition), 애니메이션 


## animation
- 애니메이션 <https://developers.google.com/web/fundamentals/design-and-ux/animations/>
- css 애니메이션은 어떻게 작동할까요? <https://brunch.co.kr/@99-life/2?fbclid=IwAR1BGTBQqrN8z9rVqS5eiH1HmBrV6AaANI0Iw8Gh9SjEtRQBN0yswYug5QE>
- CSS와 자바스크립트 애니메이션 <https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript>


- CSS Animations is a module of CSS that defines how to animate the values of CSS properties over time, using keyframes. The behavior of these keyframe animations can be controlled by specifying their duration, their number of repetitions, and how they repeat.


- CSS의 animation 속성은 animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction 값들을 지정가능한 축약된 속성(shorthand property)이다. 

- Shorthand properties 
- animation : slidein 3s ease-in 1s infinite reverse both running ;


```
	//Properties
	
	animation-name. //slidin slideout.. 
	animation-duration  //1s 100ms ..
	animation-timing-function. //linear, ease, ease-in-out, ease-in ... 
	animation-delay // 1s, ..
	animation-iteration-count // infinite, 8 , 
	animation-direction //normla, alternate , reverse, alternate-reverse
	animation-play-state  //running, paused
	animation-fill-mode // none, forwards, backwards, both

    animation : slidein 3s ease-in 1s infinite reverse both running ;	

```

- animation : 모든 animation 속성을 이용한 스타일을 한 줄에 설정할 수 있음.
- animation-name : 애니메이션 효과의 이름을 설정함.
- animation-duration : 애니메이션 재생시간 
- animation-delay : 애니메이션 효과가 나타나기까지의 지연 시간을 설정함.
- animation-iteration-count : 애니메이션 효과가 몇 번 반복될지를 설정함
- animation-direction : 애니메이션의 진행 방향을 설정함.

- animation-timing-function : 애니메이션 효과의 시간당 속도를 설정함.

>1. linear : 애니메이션 효과가 처음부터 끝까지 일정한 속도로 진행됩니다.
>2. ease : 기본값으로, 애니메이션 효과가 천천히 시작되어, 그다음에는 빨라지고, 마지막에는 다시 느려집니다.
>3. ease-in : 애니메이션 효과가 천천히 시작됩니다.
>4. ease-out : 애니메이션 효과가 천천히 끝납니다.
>5. ease-in-out : 애니메이션 효과가 천천히 시작되어, 천천히 끝납니다.
>6. cubic-bezier(n,n,n,n) : 애니메이션 효과가 사용자가 정의한 cubic-bezier 함수에 따라 진행됩니다.

- animation-fill-mode : 애니메이션 효과가 재생 중이 아닐 때 요소의 스타일을 설정함.
- animation-play-state : 애니메이션 효과의 재생 상태를 설정함.

## At-Rules -  @keryframes
- mdn <https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes>
- (IE는 버전 10 이상에서 사용)

-  @keyframes at-rule 개발자가 애니메이션 중간중간의 특정 지점들을 거칠 수 있는 키프레임들을 설정함으로써 CSS 애니메이션 과정의 중간 절차를 제어할 수 있게 합니다.

- 키프레임을 사용하려면 @keyframes 룰을 애니메이션과 키프레임 리스트를 매칭시킬 animation-name 속성에서 사용할 이름과 함께 생성합니다. 각 @keyframes 룰은 키프레임 선택자의 스타일 리스트를 포함하고 있고, 각 리스트는 각 키프레임이 생성되고 키프레임의 스타일 정보를 포함하고 있는 지점에서 사용할 %로 구성됩니다.

```

@keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68%, 72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}

@keyframes name {
    0% { ... }
    n% { ... }
    100% { ... }
}

```


## transition
	- mdn <https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions>
	- transition-property
		: 트랜지션을 적용해야 하는 CSS 속성의 이름 혹은 이름들을 명시합니다. 여기에 나열한 속성만 트랜지션하는 동안 움직입니다. 또한, 다른 모든 속성에 대한 변화는 보통 때와 같이 즉시 일어납니다.
		: none, all, width, height

```
element {
  transition-property
  transition-duration
  transition-timing-function
  transition-delay
}
element {
  transition-property: border-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
  transition-delay: 1s;
}

RECOMMENDED SHORTHAND
element { 
  transition: [property][duration][timing-function][delay];
}
element { 
  transition: border-color 0.5s ease-in 1s;
}

```		

- transition-duration
	: 트랜지션이 일어나는 지속 시간을 명시
	: 0s, 1s, 100ms
- transition-timing-function
	> ease
	> linear
	> ease-in
	> ease-out
	> ease-in-out
	> cubic-bezier(.5, .5, .5, .5)
	> cubic-bezier(.5, 1.5, .5, -2.5)
	> step-start
	> step-end
	> steps(3, start)
	> steps(5, end)

- transtion-delay
	: 속성이 변한 시점과 트랜지션이 실제로 시작하는 사이에 기다리는 시간을 정의
	: 1s, -1s

- transition

```
#delay1 {
  position: relative;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  font-size: 14px;
}

#delay1:hover {
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  font-size: 36px;
}
```



## transform (전화)
> CSS의 transform 속성을 사용함으로써, CSS의 시각적 서식 모델(visual formatting model)의 좌표 공간을 변형시킬 수 있다. 해당 속성에 지정된 값에 따라 엘리먼트(element)에 이동(translate), 회전(rotate), 크기변경(scale), 기울임(skew)등의 효과를 줄 수 있다. 

- css3 mdn <https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms>
- css3 mdn <https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms>

- syntax
```

기본문법: <transform-function> [<transform-function>]* | none
transform: none
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)
transform: translate(12px, 50%)
transform: translateX(2em)
transform: translateY(3in)
transform: scale(2, 0.5)
transform: scaleX(2)
transform: scaleY(0.5)
transform: rotate(0.5turn)
transform: skewX(30deg)
transform: skewY(1.07rad)
transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0)
transform: translate3d(12px, 50%, 3em)
transform: translateZ(2px)
transform: scale3d(2.5, 1.2, 0.3)
transform: scaleZ(0.3)
transform: rotate3d(1, 2.0, 3.0, 10deg)
transform: rotateX(10deg)
transform: rotateY(10deg)
transform: rotateZ(10deg)
transform: perspective(17px)

transform: translateX(10px) rotate(10deg) translateY(5px)

```

- 2D 조건하에서 
- translate() : 이동 x축 , y축 
- skew() : 기울이기 / skewX(100deg) skewY(100deg)
- rotate() : 회전 
- scale() : 요소의 크기 조정 

- 3D 

```

element {
  transition: transform 1s ease-in-out;
}
element:hover {
  transform: rotate(90deg);
  transform: rotate(-30deg);
}

```
1. skew 기울이기 
```
element {
  transition: transform 0.3s ease;
}
element:hover {
  transform: skew(90deg); 
  transform: skewX(90deg);
  transform: skewY(-50deg);
  transform: skew(90deg, -50deg);
}
```

2. Scale 
```
element {
  transition: transform 1s ease;
}
element:hover {
  transform: scaleX(0.5);
  transform: scaleY(2);
  transform: scale(0.5);
  transform: scale(0.5, 2);
}
```
3. Translate  이동 
```
element {
  transition: transform 0.5s linear;
}
element:hover {
  transform: translateX(15px);
  transform: translateY(50px);
  transform: translate(15px, -40px);
}
```

4. Rotate 
```
element {
  transition: transform 1s ease-in-out;
}
element:hover {
  transform: rotate(90deg);
  transform: rotate(-30deg);
}
```

5. Combining Multiple Transforms
```

element {
  -webkit-transform: rotate(90deg); /* Ch <36, Saf 5.1+, iOS < 9.2,
                                    An =<4.4.4 */                 
      -ms-transform: rotate(90deg); /* IE 9 */
          transform: rotate(90deg); /* IE 10, Fx 16+, Op 12.1+ */
}



element {

	transformL: translate(260px, -85px) scale(3.13);
	transform-origin(0 , 0);

}
```

## TEST HTML 

- ss-will-change <https://dev.opera.com/articles/ko/css-will-change-property/>
- CSS 애니메이션 성능 개선 방법(reflow 최소화, will-change 사용)  https://wit.nts-corp.com/2017/06/05/4571

### css-animation
- css-animation-loading-1 <http://jooe.kr/jooui/csseffect/css-animation-loading.html>
- css-animation-loading-2 <http://jooe.kr/jooui/csseffect/css-transition-loading.html>
- <http://jooe.kr/jooui/csseffect/css-animation-key.html>
- css-animation-pie <http://jooe.kr/jooui/csseffect/css-animation-pie.html>
- css-animation-spin <http://jooe.kr/jooui/csseffect/css-animation-spin.html>
- css-animation-spin-2 <http://jooe.kr/jooui/csseffect/css-animation-spin-2.html>
- css-animation-typing<http://jooe.kr/jooui/csseffect/css-animation-typing.html>
- css-animation-updown <http://jooe.kr/jooui/csseffect/css-animation-updown.html>
- css-array <http://jooe.kr/jooui/csseffect/css-array.html>
- css-checkbox-togge <http://jooe.kr/jooui/csseffect/css-checkbox-toggle.html>
- css-flex<http://jooe.kr/jooui/csseffect/css-flex.html>
- css-perspective-preserve3d <http://jooe.kr/jooui/csseffect/css-perspective-preserve3d.html>
- css-animation-cube <http://jooe.kr/jooui/csseffect/css-animation-cube.html>
- css-scroll-indicator<http://jooe.kr/jooui/csseffect/css-scroll-Indicator.html>

### css-transform  & transition 
- <http://jooe.kr/jooui/csseffect/css-transform.html>
- <http://jooe.kr/jooui/csseffect/css-transform-2.html>
- <http://jooe.kr/jooui/csseffect/css-transition-1.html>
- tab-menu: hover <http://jooe.kr/jooui/csseffect/css-transition-hover.html>
- css - transition-timing-function : ease-in , .. cubic-bezier
- <http://jooe.kr/jooui/csseffect/css-transition-timing-function.html>


### css - animation
- 내용이 순차적으로 화면에 표시 <http://jooe.kr/jooui/csseffect/css_animation-delay.html>
- 내용이 순차적으로 화면에 표시2 - twm 사용 <http://jooe.kr/jooui/csseffect/css_animation-twm.html>

### 참고 URL
