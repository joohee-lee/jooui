
	/* ---------------------------------------------------------------------- */

	function setBreakPoint() {
		var device_width = 
			window.innerWidth 
			|| document.documentElement.clientWidth 
			|| document.body.clientWidth ; 

		if (device_width <= 460) {
			BP = 'BP1'; 
			wr._groupSize = 1; 
		} else if (device_width <= 630) {
			BP = 'BP2'; 
			wr._groupSize = 2; 
		} else if (device_width > 630 && device_width < 1000) {
			BP = 'BP3'; 
			wr._groupSize = 3; 
		} else {
			BP = 'BP4'; 
			wr._groupSize = 3; 
		}

		
		if(wr._groupSize > 1) {
			wr.weeklyRankingPaging(BP); 
		}

		wr.setCurrent(0); 
	}

	function addEvent(evnt, elem, func) {
		if (elem.addEventListener)  {
			elem.addEventListener(evnt,func,false);
		} else if (elem.attachEvent) { 
			elem.attachEvent("on"+evnt, func);
		} else { 
			elem[evnt] = func;
		}
	}

	var compfunc = {
		next: function() {
			var sx = this._currentGroup + 1; 
			var su = sx * this._groupSize; 

			if(su >= this._length)  { 
				su = 0; 
			}

			this.setCurrent(su); 
		}, 
		prev: function() {
			var sx = this._currentGroup - 1;
			var su = sx * this._groupSize; 

			if(su < 0) { 
				su = this._length - this._groupSize; 
			}

			this.setCurrent(su); 
		}, 
		count: function() {
			this.elCount.innerHTML = this._currentGroup +1; 
			this.elLength.innerHTML = this._length; 
		}, 
		current: function(su) {
			var _cg = this._currentGroup; 

			this.elItems[this._currentItem].className = 'book_info';
			this.elItems[su].className = 'book_info on';

			this._currentItem = su; 

			this._currentGroup = Math.floor(su / this._groupSize);

			this.elPagingItems[_cg].className = ''; 
			this.elPagingItems[this._currentGroup].className = 'on'; 

			this.setCount(); 
		}
	}; 


	/* ---------------------------------------------------------------------- */

	var BP;  //  현재 BreakPoint를 저장하는 변수

	
	/* ---------------------------------------------------------------------- */

	/* 
		메인페이지, 
		'주간베스트' 컴포넌트 
	*/
	var wr = document.getElementById('weekly_ranking'); 
	wr.elTemplate = document.getElementById('weekly_ranking_section'); 
	wr.elGalleryWrap = wr.getElementsByTagName('DIV')[2]; 


	/* elements */
	wr.elPrevBtn = document.getElementById('weekly_ranking_prev');
	wr.elNextBtn = document.getElementById('weekly_ranking_next'); 
	wr.elPaging = document.getElementById('weekly_ranking_paging');
	wr.elCount = document.getElementById('weekly_ranking_current'); 
	wr.elLength = document.getElementById('weekly_ranking_length');

	/* 프로퍼티 설정 */
	wr._currentItem = 0; 
	wr._currentGroup = 0; 
	wr._groupSize = 1; // 바뀌는 값 1,2,3

	/* function binding */
	wr.eNext = compfunc.next; 
	wr.ePrev = compfunc.prev; 
	wr.setCount = compfunc.count; 
	
	wr.setCurrent = function(su) {
		var cgroup = this._currentGroup; 

		/* 
			#issue1 
			1,2,3 단을 오고가면서 현재 current 값 해제가 자연스럽게 되지 않는다.
			무리해서라도 각각 요소들을 돌려 해제를 하는 for 문을 추가. 
		*/
		for(var i = 0; i < this._length; i++) {
			this.elItems[i].className = 'book_info';
		}
		
		for(var i = 0; i < this._groupSize; i++) {
			this.elItems[su + i].className = 'book_info on';
		}
		/* /#issue1 */

		this._currentItem = su; 
		this._currentGroup = Math.floor(su / this._groupSize);

		if(BP !== 'BP1') {
			this.elPagingItems[cgroup].className = ''; 
			this.elPagingItems[this._currentGroup].className = 'on'; 
		}

		this.setCount(); 
	};

	wr.elNextBtn.onclick = function() { 
		wr.eNext(); 
		return false;  
	};

	wr.elPrevBtn.onclick = function() { 
		wr.ePrev(); 
		return false; 
	};

	wr.weeklyRankingPaging = function(breakpoint) {
		var template = '<a class="{class}">{idx}</a>'; 
		var arr = []; 
		var gLen;
		var className; 

		switch(breakpoint) {
			case 'BP1': 
				this._groupSize = 1; 
				this.elPaging.innerHTML  = ''; 
				return false; 

				break; 
			case 'BP2': 
				this._groupSize = 2; 

				break; 
			case 'BP3': 
			case 'BP4': 
				this._groupSize = 3; 

				break; 
			default: 
				break; 
		}


		gLen  = this._length / this._groupSize; 

		for(var i = 0; i < gLen; i++) {
			if(i === this._currentGroup) {
				className = 'on'; 
			} else {
				className = '';
			}

			arr.push(template.replace('{class}', className).replace('{idx}', i+1)); 
		}

		this.elPaging.innerHTML = arr.join(''); 
		this.elPagingItems = this.elPaging.getElementsByTagName('A');

		for(var i = 0; i < this.elPagingItems.length; i++) {
			this.elPagingItems[i].idx = i; 
			this.elPagingItems[i].onclick = function() {
				
				wr.elPagingItems[wr._currentGroup].className = ''; 
				wr.elPagingItems[this.idx].className = 'on';

				wr.setCurrent((this.idx) * wr._groupSize); 

				return false; 
			};
		}

		this.setCurrent(0); 
	};




	/* ---------------------------------------------------------------------- */
	/*
		메인페이지, 
		'오늘의 책' 컴포넌트 
	*/
	var tb = document.getElementById('today_book'); 
	tb.elItems = tb.getElementsByTagName('SECTION');
	tb.elPrevBtn = document.getElementById('today_book_prev');
	tb.elNextBtn = document.getElementById('today_book_next'); 
	tb.elPaging = document.getElementById('today_book_paging');
	tb.elPagingItems = tb.elPaging.getElementsByTagName('A'); 
	tb.elCount = document.getElementById('today_book_current'); 
	tb.elLength = document.getElementById('today_book_length');

	tb._currentItem = 0; 
	tb._currentGroup = 0; 
	tb._groupSize = 1;
	tb._length = tb.elItems.length; 

	tb.eNext = compfunc.next; 
	tb.ePrev = compfunc.prev; 
	tb.setCount = compfunc.count; 
	tb.setCurrent =  compfunc.current; 

	tb.elNextBtn.onclick = function() {
		tb.eNext(); 
		return false; 
	};

	tb.elPrevBtn.onclick = function() {
		tb.ePrev(); 
		return false; 
	};


	for(var i = 0; i < tb._length; i++) {
		tb.elPagingItems[i].idx = i;
		tb.elPagingItems[i].onclick = function() {

			tb.elPagingItems[tb._currentGroup].className = ''; 
			tb.elPagingItems[this.idx].className = 'on';

			tb.setCurrent(this.idx); 

			return false; 
		};
	}

	tb.setCurrent(0);





	/* ---------------------------------------------------------------------- */
	/*
		메인페이지, 
		'요즘 이책' 컴포넌트 
	*/
	var bb = document.getElementById('best_book'); 
	bb.elItems = bb.getElementsByTagName('SECTION');
	bb.elPrevBtn = document.getElementById('best_book_prev');
	bb.elNextBtn = document.getElementById('best_book_next'); 
	bb.elPaging = document.getElementById('best_book_paging');
	bb.elPagingItems = bb.elPaging.getElementsByTagName('A'); 
	bb.elCount = document.getElementById('best_book_current'); 
	bb.elLength = document.getElementById('best_book_length');

	bb._currentItem = 0; 
	bb._currentGroup = 0; 
	bb._groupSize = 1;
	bb._length = bb.elItems.length; 

	bb.eNext = compfunc.next; 
	bb.ePrev = compfunc.prev; 
	bb.setCount = compfunc.count; 
	bb.setCurrent = compfunc.current; 

	bb.elNextBtn.onclick = function() {
		bb.eNext(); 
		return false; 
	};

	bb.elPrevBtn.onclick = function() {
		bb.ePrev(); 
		return false; 
	};


	for(var i = 0; i < bb._length; i++) {
		bb.elPagingItems[i].idx = i;
		bb.elPagingItems[i].onclick = function() {

			bb.elPagingItems[bb._currentGroup].className = ''; 
			bb.elPagingItems[this.idx].className = 'on';

			bb.setCurrent(this.idx); 

			return false; 
		};
	}

	bb.setCurrent(0);







	/* ---------------------------------------------------------------------- */

	addEvent('load', window, function() { 
		var compiled = dust.compile(wr.elTemplate.innerHTML, 'writem'); 
		dust.loadSource(compiled); 
		dust.render('writem', weeklyRankingData, function(err, out) {

			wr.elGalleryWrap.innerHTML = out; 

			wr.elItems = wr.elGalleryWrap.getElementsByTagName('SECTION');
			wr._length = wr.elItems.length; 

			setBreakPoint(); 
		});
	}); 

	addEvent('focus', window, function() { setBreakPoint(); }); 
	addEvent('orientationchange', window, function() { setBreakPoint(); }); 
	addEvent('resize', window, function() { 
		if(window.orientation === undefined) {
			setBreakPoint();	
		}
	}); 



