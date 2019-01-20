
"use strict";

var uiCtgBestPromo = function( cnpt ){

	this.elPromo = cnpt;
	this.elIems = '';
	this.current = 0;
	this.elItemLeng = 0;
	this.time =  2000;
	this.state = '';
};


uiCtgBestPromo.prototype = {

		init : function(cpnt){

			this.elPromo = document.querySelector( "." + cpnt + " .ctgbest-promo" );
			this.current = this.elPromo.getAttribute('data-current');
			this.state = this.elPromo.getAttribute('data-state');
			this.elItems = document.querySelectorAll( "." + cpnt + " .promo-item");
			this.elItemLeng = this.elItems.length;
			
			//console.log(this.elPromo);
			//console.log(this.elItems);
		},

		setCurrent : function( el, idx ){

			el.setAttribute('data-current', idx);
		},

		next : function(cpnt){

			this.init(cpnt);

			this.pause();

			this.current = Number(this.current) + 1;

			if( this.current > this.elItemLeng ){
					this.current = 1;
			}

			//this.elList.setAttribute('data-current', this.current);
			this.setCurrent( this.elPromo, this.current );

			this.play(cpnt);
		},

		prev : function(cpnt){

			this.init(cpnt);

			this.pause();

			this.current = Number(this.current) -1;

			if( this.current <= 0 ){
				this.current = this.elItemLeng;
			}

			this.setCurrent(  this.elPromo, this.current );

			this.play(cpnt);
		},

		play : function(cpnt){

			console.log(cpnt);

			this.init(cpnt);

			var self = this;
			this.interval = setInterval( function(){ self.next(cpnt); }, 2000);
			this.elPromo.setAttribute('data-state', 'play');
		},

		pause : function(){

			clearInterval(this.interval);
			this.elPromo.setAttribute('data-state', 'state');
		}
	};

// autorolling 
//uiCtgBestPromo.init('ctgWoman');
//uiCtgBestPromo.play('ctgWoman'); // woman category rolling

//uiCtgBestPromo.play('ctgWoman');
//uiCtgBestPromo.play('ctgMan');

//>banner - woman
var uiBestWoman = new uiCtgBestPromo();
uiBestWoman.play('ctgWoman');

//>banner - man
var uiBestMan = new uiCtgBestPromo();
uiBestMan.play('ctgMan');


//uictgBestPrds 
var uiCtgBestPrds = {

		init : function(cpnt){

			this.elPrds = document.querySelector( "." + cpnt + " .ctgbest-prds" );
			this.current = this.elPrds.getAttribute('data-current');
			this.state = this.elPrds.getAttribute('data-show');
			this.showItem = Number(this.elPrds.getAttribute('data-show'));
			
			this.elItems = document.querySelectorAll( "." + cpnt + " .item");
			this.elItemLeng = this.elItems.length;

			this.paging = this.elItemLeng / this.showItem ;

			//console.log(this.elPrds);
			//console.log(this.elItemLeng);
			//console.log(this.paging);
				
		},

		setCurrent : function( el, idx){

			el.setAttribute('data-current', idx);

		},

		next : function(cpnt){

			this.init(cpnt);

			this.current = Number(this.current) + 1;

			if ( this.current > this.paging ){

				this.current = 1 ;
			}

			//this.elPrds.setAttribute('data-current', this.current);
			this.setCurrent(this.elPrds , this.current);

		},

		prev : function(cpnt){

			this.init(cpnt);

			this.current = Number(this.current) - 1 ;

			if ( this.current === 0 ){

				this.current = this.paging ;
			}

			//this.elPrds.setAttribute('data-current', this.current);
			this.setCurrent(this.elPrds , this.current);

		},

		setShow : function(el, cpnt){

			this.init(cpnt);

			var elIndex = el.parentNode.getAttribute('data-index');
			this.setCurrent(this.elPrds , elIndex);
		}

	};




