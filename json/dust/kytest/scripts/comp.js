
	/*
		[ 설명 ]
		element의 dataset object에 값을 설정하거나 반환하는 function
		
		[ parameter ]
		- element :  dataset object를 수정/반환할 대상
		- key : dataset object의 property 이름 
		- value : key의 value

		[ 특징 ]
		1. 이전 IE 버전에서도 동작되게끔 dataset object에 값을 설정하는 실행문 뿐만 아니라 'data-*' DOM 프로퍼티 이름으로 바로 등록하게끔 하는 코드도 함께 작성
		2. value가 undefined일 경우 element의 dataset object 값을 반환한다. 
		3. 이전 IE 버전에서도 사용될수 있게끔 'data-*' 프로퍼티 값을 반환.
	*/

	function Dataset(element, key, value) {
		if(value === undefined) {
			return element['data-js']; 
		}

		element['data-' + key] = value; 
		element.dataset[key] = value; 
	}

	function state() {
		var log = {
			current_index: current_index, 
			current_box: current_box
		};

		// console.log('log', JSON.stringify(log));
	}





	var elemt = soopul.bind(document.getElementById('elemt')); 
	var elemtNextBtn = document.getElementById('elemt_item_next_btn');
	var elemtPrevBtn = document.getElementById('elemt_item_prev_btn');
	var elemtNextBtn2 = document.getElementById('elemt_box_next_btn');
	var elemtPrevBtn2 = document.getElementById('elemt_box_prev_btn');

	/* elemt 초기화 */
	elemt.dataset.currentItem = 0; 
	elemt.dataset.currentGroup = 0; 
	elemt.dataset.groupItemSize = 3; 
	elemt.dataset.itemHeight = 100; 

	elemt._contentsBox_ = elemt.getElementsByTagName('UL')[0];
	elemt._contents_ = elemt._contentsBox_.getElementsByTagName('LI'); 
	elemt.contentsLength = elemt._contents_.length; 

	elemtNextBtn.onclick = function() {
		elemt._move('next-item');
		return false; 
	};

	elemtPrevBtn.onclick = function() {
		elemt._move('prev-item');
		return false; 
	};

	elemtNextBtn2.onclick = function() {
		elemt._move('next-group'); 
		return false;
	};

	elemtPrevBtn2.onclick = function() {
		elemt._move('prev-group'); 
		return false;
	};


