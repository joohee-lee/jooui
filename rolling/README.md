# Jooui -  Ui pattern 


## Banner 

```
/*

* module pattern / Namespace 
* img(banner) rolling case 
********************************
* @moduel : uiRollingA
* @param  : { Elemenet } componentID 
* @pargm  : { Elemenet } item / { Number } current / { String } state / { Number } len 
* @method  : init / setCurrent / setItemCurrent / next / play / stop
* 참조 @method : dataset.getData / dataset.setData
* 참조 @method : cc.nextIdx 

*/

```

------------------------------------------------------------
### 1.배너  <http://jooe.kr/jooui/rolling/ui_img-function.html>

* 함수선언식  
* id / item / item.len (length) / current = 0 


```
	
@ data-current / data-state
@ getAttribute / setAttribute 
@ setIntterval(function(){ nextBanner();  }, time)

@param 
	var elBanner // wrapper 
	var elItem  // 롤링 대상 아이템 
	var elItemLeng  // item 총 갯수 	

@method
	nextBanner()
	prevBanner()
	currentBanner()
	playBanner()
	stopBanner()

@eventBinding 
	HTMl handler event 

	onclick="currentBanner(this);"
	onclick="nextBanner();"
	onclick="playBanner();"
	onclick="stopBanner();"

```
### 2.배너  <http://jooe.kr/jooui/rolling/ui_img-rolling.html>

* 객체리터럴 표기법  
* id / item / item.len (length) / current = 0 

```

* singleton 

@namespace

	var uiRollingA = { ..

	}

@eventBinding 
	onclick="uiRollingA.play('compBanner1'); return false;"
	onclick="uiRollingA.stop(); return false;"
	onclick="uiRollingA.setCurrent('compBanner1', this);"

```

### 3.배너   <http://jooe.kr/jooui/rolling/ui_img-rolling-instance.html>

```

@namespace

	var uiRollingA = function( cnpt ){

		this.elCnpt = cnpt;
		this.elIem = '';
		this.current = 0;
		this.len = 0;
		this.time =  2000;
		this.state = '';
	};

	uiRollingA.prototype = {
	...
	}

//>banner - basic -- 1
var a = new uiRollingA();
a.play('compBanner1', 3000);

//>banner - basic -- 2
var b = new uiRollingA();
b.play('compBanner2', 1000);

//>banner - basic -- 3
var c = new uiRollingA();
c.play('compBanner3', 2000);
```

### 4. coupang main  - 카테고리별  BEST 상품 component 

- <https://www.coupang.com/>
- 2019.01.20
- <http://jooe.kr/jooui/rolling/coupang_product.html>
- <http://jooe.kr/jooui/rolling/coupang_product-2.html>

```
// markup  

data-cateory ="woman"
data-cateory ="man"
data-cateory ="baby"
..

cpnt-ctgbest
	.cpnt-inner

	.ctgbest-header
		
		.ctgbest-title
			.ctgbest-name
			.ctgbest-link

		.ctgbest-keyword
			.keyword-title
			.keyword-list
				.keyword-item
	
	.ctgbest-promo
		.promo-list ( data-current=1 )
			.promo-item (data-index=1)
				.promo-caption
					.promo-title
					.promo-desc
				.promo-img
				
			.promo-item
			.promo-item
			.promo-item
			.promo-item

		.div-nav
			.sp-dot
			.sp-dot
			.sp-dot
			.sp-dot
			.sp-dot

		.div-control
			.btn-prev
			.btn-next	


	.ctgbest-prds 
		
		.prd-lists (data-current="1")
			.prd-list
				.prd-item   (data-index="1") (1~18개)
					.prd-img
					.prd-name
					.prd-price (data-type="sale")
					.prd-price (data-type="normal")
						.badge-discount
						.badge-rocket
				.prd-item 
				.prd-item 
				.prd-item 
				.prd-item 		
				.prd-item 

		.div-nav
			.sp-dot
			.sp-dot
			.sp-dot
			.sp-dot
			.sp-dot

		.div-control
			.btn-prev
			.btn-next

// 쿠팡 메인 카테고리멸 BEST 상품 컴포넌트 
// coupang_product-2.html


// 프로모션 배너 
@namespace

	var uiCtgBestPromo = function( cnpt ){

		this.elCnpt = cnpt;
		this.elIem = '';
		this.current = 0;
		this.len = 0;
		this.time =  2000;
		this.state = '';
	};

	uiCtgBestPromo.prototype = {
	...
	}
	
	//카테고리별 
	//>banner - woman
	var uiBestWoman = new uiCtgBestPromo();
	uiBestWoman.play('ctgWoman');

	//>banner - man
	var uiBestMan = new uiCtgBestPromo();
	uiBestMan.play('ctgMan');

// 베스트 상품 리스트 
	var uiCtgBestPrds = {
		...
	}


// top 기능 추가 



```

### 참고 URL 


