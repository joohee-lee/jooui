
"use strict";

/*
user agent check
html  data-useragent && data-platform 명시 
*/

/*
page uniqu classNaming add
*/

/*
pc&mobile check 
HTML과 script가 로드된 시점에 발생하는 이벤트
*/
var deviceCheck = function(){

	var elBody = document.body;
	var appCode = "win16|win32|win64|mac|macintel";
	var navi = navigator.platform.toLowerCase();
	
	if( appCode.indexOf(navi) < 0){

		alert('mobile');
		//classlist.addClass( elBody, 'mobile');
		elBody.setAttribute('class', 'mobile');

	} else {

		console.log('pc');
		//classlist.addClass( elBody, 'pc');
		elBody.setAttribute('class', 'pc');
	}
};

window.addEventListener('DOMContentLoaded', function(){ 
	//실행될 코드 
	deviceCheck();
});

/* classList 
 * @param [String] el (element or component.. )
 * @param [String] key (data-*)
 * @param [Number] val (value , 0 , 1, 2 ....)
 * @method : getData, setData, removeData 	
*/
var classlist = {

	addClass : function(el, className){
		el.className += " "  + className; 
	},

	removeClass : function(el, className){
		var check = new RegExp("(\\s|^)" + className + "(\\s|$)"); 
		el.className = el.className.replace(check, " ").trim();
	},

	toggleClass : function(el, className){
		var check = new RegExp("(\\s|^)" + className + "(\\s|$)"); 
		
		if (check.test(el.className)) { 
			
			el.className = el.className.replace(check, " ").trim(); 
		}
		else { 
		
			el.className += " " + className; 
		
		}
	},

	hasClass : function(el, className){
		return(' ' + el.clasName + ' ').indexOf(' ' + clasName + ' ') > -1;
	}

};

// object literal desigin
/* used Attribute  
 * data-*
 * @param [String] el (element or component.. )
 * @param [String] key (data-*)
 * @param [Number] val (value , 0 , 1, 2 ....)
 * @method : getData, setData, removeData  
*/
var dataset = {

	getData : function( el, key ){
		return el.getAttribute(key);
	},

	setData : function( el, key, val ){
		el.setAttribute( key, val );
	},

	removeData : function( el, key ){
		el.removeAttibute( key );
	}

};

/* cc
 * @param [Number] idx / current value 
 * @param [Number] len / item length  
 * @method nextIdx / prevIdx 
*/
var  cc = {

	nextIdx : function( idx, len ){

		idx++;

		if ( idx === len){
			idx = 0;
		}

		return idx;
	},

	prevIdx : function( idx, len ){

		idx--;

		if ( idx < 0 ){
			idx = len - 1;
		}

		return idx;
	}


};

/*
	category
	: header 영역  
	@param [element] elCnpt
	@param [element] elBtnOpen
	@param [element] elBtnClose
	@param [boolean] cpntDisplay / data-dispay/ true / false
	@param [boolean] btnExpanded / data-expended/ true / false
	@param [eventBinding] uiCategory.init();
*/

var uiCategory = {

	elCnpt:'',
	elBtnOpen:'',
	elCnptDisplay:'',
	elBtnExpanded:'',
	elBtnClose:'',
	
	init: function(){
		this.elCnpt = document.getElementById('cpntCategory');
		this.elBtnOpen = document.querySelector('.btn-ctg');
		this.elBtnClose = document.querySelector('.btn-ctg-close');
		this.cpntDisplay =  dataset.getData( this.elCnpt, 'data-display');
		this.btnExpanded =  dataset.getData( this.elBtnOpen, 'data-expanded');
		
		this.toggle();
	},

	toggle: function(){
		if( this.btnExpanded === 'false' && this.cpntDisplay === 'false' ){

			dataset.setData(this.elBtnOpen, 'data-expanded', true);
			dataset.setData(this.elCnpt, 'data-display', true);
			this.elBtnClose.focus();
			
		}else{

			dataset.setData(this.elBtnOpen, 'data-expanded', false);
			dataset.setData(this.elCnpt, 'data-display', false);
			this.elBtnOpen.focus();
			
		}
	}

};

/*
	sideBar 
	: header 
	@param [element] elCnpt
	@param [element] elDimmed
	@param [boolean] elCpntShow / true / false 

	@method this.init()
	@method uiSideBar.setShow()
	@method uiSideBar.setHide()

*/
var uiSideBar = {

	init: function(){
		
		this.elCpnt = document.querySelector('.div-sidebar');
		this.elCpntShow = dataset.getData( this.elCpnt, 'data-show');
		this.elDimmed = document.querySelector('.div-dimmed');

	},

	setShow : function(){

		this.init();

		if( this.elCpntShow === 'false' ){
			dataset.setData( this.elCpnt, 'data-show', true );
			dataset.setData( this.elDimmed, 'data-show', true);
		}

	},

	setHide : function(){

		this.init();

		if( this.elCpntShow === 'true' ){
			dataset.setData( this.elCpnt, 'data-show', false );
			dataset.setData( this.elDimmed, 'data-show', false );
		}

	},

};

/* Tab - simple 
 * data-current / data-idx
 * @param [Element] cpnt : component name ID 
 * @param [function] init : bindingId
 * @param [function] _setCurrent : setting data-current
*/
var uiTab = {

	init : function( cnpt, el ){
		var elCnpt = document.getElementById(cnpt);
		var idx = dataset.getData(el, 'data-idx');
		this._setCurrent( elCnpt, idx);
	},

	_setCurrent : function( cnpt, val ){
		dataset.setData( cnpt, 'data-current' , val);
	}

};

/* Tab - multi function 
 * data-current 
 * @param [Number] leng, item's length
 * @param [Number] time, auto play interval time
 * @param [Number] current, 
 * @param [] interval, 
 * @method init / setCurrent / prev / next  / prev / stop
*/

var uiTabModule = {

	//property:value
	elCnpt: '',
	elItem: '',
	current: 0,
	leng: 0,
	time: 2000,
	interval: '',


	init: function( cnpt ){
		this.elCnpt = document.getElementById(cnpt);
		this.elItem = this.elCnpt.querySelectorAll('.tab-item');
		this.current = dataset.getData(this.elCnpt, 'data-current');
		this.leng = this.elItem.length;
	},

	_setCurrent : function( cnpt, val ){
		dataset.setData( cnpt, 'data-current', val);
	},

	tabCurrent: function( cnpt, el ){

		//this.stop(); // play 를 우선 stop 하고 
		this.init(cnpt);
		var idx = dataset.getData(el, 'data-idx');
		this._setCurrent( this.elCnpt, idx);
		//this.play(cnpt); // 다시 play

	},

	next : function( cnpt ){
		this.init(cnpt);
		this.current = cc.nextIdx( this.current, this.leng);
		this._setCurrent(this.elCnpt, this.current);
	},

	prev : function( cnpt ){
		this.init(cnpt);
		this.current = cc.prevIdx( this.current, this.leng);
		this._setCurrent(this.elCnpt, this.current);
	},

	play : function( cnpt ){
		console.log('play');

		this.init(cnpt)
		var self = this;
		this.interval = setInterval(function(){ self.next(cnpt);}, this.time);
		dataset.setData( this.elCnpt, 'data-control', 'play');
	},

	stop : function(){
		console.log('stop');
		
		clearInterval(this.interval);
		dataset.setData( this.elCnpt, 'data-control', 'pause');
	}

};

/* rolling 
 * uiRollingA 	


*/
/*
var uiRollingA = {

	elCnpt:'',
	elIem: '',
	current: 0,
	len: 0,
	time: 2000,
	
	init : function( cnpt ){

		this.elCnpt = document.getElementById(cnpt);
		this.elItem = this.elCnpt.querySelectorAll('.item');
		this.current = dataset.getData(this.elCnpt, 'data-current');
		this.len = this.elItem.length;

		

	},

	setCurrent : function(cnpt, val){
		dataset.setData( cnpt, 'data-current', val);

	},

	next : function(cnpt, val, leng){
		this.init(cnpt);
		this.current = cc.nextIdx( this.current, this.len);
		this.setCurrent(this.elCnpt, this.current);


	},

	play : function(cnpt, auto){

		
		console.log('play');
		var self = this;
		var auto = auto;
		this.init(cnpt);
		auto = setInterval( function(){ self.next(cnpt) },  self.time);
		dataset.setData( this.elCnpt, 'dta-control', 'play');
	},

	stop : function(cnpt, auto){

		this.init(cnpt);
		console.log(cnpt);
		console.log(auto);
		
		console.log('stop');
		window.clearInterval(auto);
		dataset.setData( this.elCnpt, 'data-control', 'pause');

	} 


};
*/

/* Toggle 
 * data - expended

*/
var uiToggle ={


};

/* accordion 

*/

/* modal - basic

@param  hideTarget (focus)
@param  elBody = document.body;
@param  elModal = document.getElementById(cpnt);
@param  elModalBtn = elModal.querySelector('.btn-close');
@param  dataHidden = dataset.getData(elModal, 'data-hidden');

@ method
	toggleModal()
	showDimmed() // diemmed 생성
	hideDimmed() // diemmed 제거

@evnet binding	
	onclick="uiModal.toggleModal('exampleModal-1', this);"
	onclick="uiModal.toggleModal('exampleModal-1');"

*/
var uiModal = {

	hideTarget : undefined,

	toggleModal: function(cpnt, el){

		var elBody = document.body;
		var elModal = document.getElementById(cpnt);
		var elModalBtn = elModal.querySelector('.btn-close');
		var dataHidden = dataset.getData(elModal, 'data-hidden');
		
		if( dataHidden === 'true' ){
	
			//dimmed Element create
			this.showDimmed();

			classlist.addClass( elBody, 'modal-open' );
			dataset.setData( elModal, 'data-hidden', false );

			//first close button element - focus
			elModalBtn.focus();

			//focus  element 할당.
			this.hideTarget = el;
			
		}else{

			classlist.removeClass( elBody, 'modal-open');
			dataset.setData(elModal, 'data-hidden', true);
			
			//dimmed Element remove
			this.hideDimmed();
			
			if(this.hideTarget){
				this.hideTarget.focus();
				this.hideTarget = undefined;
			}	
		}

	},

	showDimmed: function(){
		var elBody = document.body;
		var newElement = document.createElement('div');
		newElement.setAttribute("id", "modalBack");
		newElement.setAttribute("class", "modal-back");
		elBody.appendChild(newElement);
	},

	hideDimmed: function(){
		var elBody = document.body;
		var elDimmed = document.getElementById('modalBack');
		elBody.removeChild(elDimmed);
	}

};

/* modal - Ani 

*/
var uiModalAni = {

	hideTarget : undefined,

	toggleModal: function(cpnt, el){

		var elBody = document.body;
		var elModal = document.getElementById(cpnt);
		//var elModalWrap = elModal.querySelector('.modal-middle');
		var elModalBtn = elModal.querySelector('.btn-close');
		var dataShow = dataset.getData(elModal, 'data-show');

		if( dataShow === 'false' ){
	
			//dimmed Element create
			this.showDimmed();

			classlist.addClass( elBody, 'modal-open' );
			dataset.setData( elModal, 'data-show', true );
			elModal.style.display = 'block';

			setTimeout( function(){ classlist.addClass( elModal, 'show' ); } , 200);
		
			//first close button element - focus
			elModalBtn.focus();

			//focus  element 할당.
			this.hideTarget = el;
			
		}else{

			classlist.removeClass( elModal, 'show'); 
			
			setTimeout( function(){ 
				dataset.setData(elModal, 'data-show', false);
				classlist.removeClass( elBody, 'modal-open');
				elModal.style.display = 'none';
			
			} , 200);

			//dimmed Element remove
			this.hideDimmed();

			//focus
			if(this.hideTarget){
				this.hideTarget.focus();
				this.hideTarget = undefined;
			}
				
		}

	},

	showDimmed: function(){
		var elBody = document.body;
		var newElement = document.createElement('div');
		newElement.setAttribute("id", "modalBack");
		newElement.setAttribute("class", "modal-back");
		elBody.appendChild(newElement);
	},

	hideDimmed: function(){
		var elBody = document.body;
		var elDimmed = document.getElementById('modalBack');
		elBody.removeChild(elDimmed);
	}

};


/* dropDown */

/* img - rolling */

/* form isValidation */


