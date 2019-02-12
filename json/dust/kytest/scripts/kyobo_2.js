
	function addEvent(evnt, elem, func) {
		
		if (elem.addEventListener)  
			// W3C DOM
			elem.addEventListener(evnt,func,false);
		
		else if (elem.attachEvent) { 
			// IE DOM
			elem.attachEvent("on"+evnt, func);
		}
		else { 
			// No much to do
			elem[evnt] = func;
		}
	}

	//device width check
	function checkDeviceWidth(){

		 var device_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ; 

		 if( device_width > 600){

		 	//console.log("3개");
		 	// rolling_conts1.setFirst(3,0);
		 	
		 }else if( device_width> 480 && device_width <= 600){

		  	//console.log("2개");
		  	// rolling_conts1.setFirst(2,1);
			 		
		 }else{
			 	
			//console.log("1개");
			 // rolling_conts1.setFirst(1,2);
		}

	}








	//screen width 값 가져오기 
	var screen_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	//초기세팅
		//해우서 
	//메소드 할당 
	// var rolling_conts1= document.getElementById("rolling_conts1");
	// rolling_conts1.setFirst = setFirst;
	// rolling_conts1.setCurrent = setCurrent;

	// //오늘의 북 
	// var rolling_conts2 = document.getElementById("rolling_conts2");
	// 	//메소드 할당 
	// rolling_conts2.setFirst = setFirst;
	// rolling_conts2.setCurrent = setCurrent;

	//주간베스트  
	var weeklyRanking = document.getElementById("weekly_ranking");
		//메소드 할당 
	weeklyRanking.setFirst = setFirst;
	weeklyRanking.setCurrent = setCurrent;
		

		//현재 보여지는 값 가져오기 
		//setFirst
		function setFirst(setnum, setdot){

			//console.log(idx);
		this.prd_li = this.getElementsByTagName("DIV")[0].getElementsByTagName("A"); 

		//dotpaging
		this.dotnav = document.getElementById(this.id+"_paging");
		this.dotnav_a = this.dotnav.getElementsByTagName("DIV")[setdot].getElementsByTagName("A");
		this.dotnav_count = this.dotnav_a.length;
		this.dotnav_num;

		//prev
		this.prev = document.getElementById(this.id+"_prev");
		
		//next
		this.next = document.getElementById(this.id+"_next");

		//총 li count
		this.count = this.prd_li.length;

		//current
		this.current = 0;
		this.current_sum; 

		//한 화면에 보여지는 item 롤링 셋트 갯수 
		this.setnum = setnum ;

		//한 화면에 보여지는 dot paging
		this.setdot = setdot ;

		//롤링 간격 
		this.time = 2000;

			//모든 상품을 hide 한다  	
			for(var k=0; k < this.count; k++){

				this.prd_li[k].className = "hide";
				//this.dotnav_a[k].className= ""
			
				//처음 보여질 item show 로 셋팅
				if(  k < this.setnum){

					this.prd_li[k].className = "show";
					//this.dotnav_a[k].className= "on"
				}

			}

		}


		//setCurrent 
		function setCurrent(idx){

			//console.log("idx", idx);
			this.current_sum = idx + this.setnum;
			//console.log("current_sum", this.current_sum);
			this.dotnav_num = Number(idx / this.setnum);
			//console.log("dotnav_num", this.dotnav_num);

			//item hide
			for(var k=0; k < this.count; k++){

				this.prd_li[k].className = "hide";
				
			}

			//dotnav hide
			for(var i=0; i < this.dotnav_count; i++){

				//console.log( "dotnav_count", this.dotnav_count );
				this.dotnav_a[i].className= "";
					
			}

			//item show & dotnav show
			for(var k = idx ; k < this.current_sum ; k++){

				this.prd_li[k].className = "show";
				//this.dotnav_a[this.dotnav_num].className= "on";
			}

			this.dotnav_a[this.dotnav_num].className= "on";
		}


		//이전
	function setPrev(){
		var x = this.parentNode.parentNode;
		//alert(x.next.id);
		//alert(x.count);
		
		x.current = Number(x.current - x.setnum);

			if( x.current < 0){
				x.current = x.count - x.setnum;
			}

			x.setCurrent(x.current);

			return false;
		
	}
		

		//다음
	function setNext(){

		var x = this.parentNode.parentNode;
		//alert(x.next.id);
		//alert(x.count);
		x.current = Number(x.current + x.setnum);
			
			if( x.current > x.count || x.current === x.count){

			 	x.current = 0;
			 	x.current_sum = 0;
			}

		x.setCurrent(x.current);

		return false;
	}


	// alert(screen_width);
	 //초기 class setting 함수 // response 대응
	if(screen_width > 600){
	 	
	 	// rolling_conts1.setFirst(3,0);
	 	
	 }else if( screen_width > 480 && screen_width <= 600){

	  	// rolling_conts1.setFirst(2,1);
		 		
	 }else{
		 	
		 // rolling_conts1.setFirst(1,2);
		 	
	}
	
	weeklyRanking.setFirst(1,0);
		

	weeklyRanking.next.onclick = setNext;
	weeklyRanking.prev.onclick = setPrev;




	addEvent('orientationchange', window, function() {
		checkDeviceWidth();
	});

	addEvent('resize', window, function() {
		checkDeviceWidth();
	});