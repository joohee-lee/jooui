
"use strict";

//pc&mobile check 
// HTML과 script가 로드된 시점에 발생하는 이벤트
var deviceCheck = function(){

	var elBody = document.body;
	var app = "win16|win32|win64|mac";
	var navi = navigator.platform.toLowerCase();
	var type = '';

	if( app.match(navi) < 0 ){
		console.log('mobile');
		//elBody.className ='mobile';
		elBody.setAttribute( 'class', 'mobile');
	} else {
		console.log('pc');
		//elBody.className ='pc';
		elBody.setAttribute( 'class' , 'pc');
	}
};

window.addEventListener('DOMContentLoaded', function(){ 
	
	//실행될 코드 
	deviceCheck();

})



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

/* used ClassName
	//class 유효 체크 
	//addClass
	//removeClass
*/


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

/* img - rolling 
*/

