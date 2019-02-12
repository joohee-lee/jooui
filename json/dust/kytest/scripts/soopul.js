	
	var soopul = {
		bind: function(obj) {
			/* Metadata */
			obj.dataset.currentItem; 
			obj.dataset.currentGroup;
			obj.dataset.groupItemSize;
			obj.dataset.itemHeight; 
			obj.dataset.contentsLength;
			obj.dataset.gPosition;

			/* element */
			obj._contents_; 
			obj._contentsBox_;

			/* object */
			obj._interval_; 

			/* Method */
			obj._current = function(su) {
				if(su === undefined) {
					return this.dataset.currentItem; 
				}

				this._contents_[this.dataset.currentItem].className = ''; 
				this._contents_[su].className = '_current'; 
				// this._contents_[su].focus(); 

				this.dataset.currentItem = su; 

				/* 논리적인 그룹의 위치 변경 */
				this.dataset.currentGroup = Math.floor(su / parseInt(this.dataset.groupItemSize));
				this._contentsBox_.style.marginTop = 
					'-' 
					+ parseInt(this.dataset.itemHeight) 
					* parseInt(this.dataset.currentGroup) 
					+ 'px'; 

				/* LOG */
				// console.log('this.dataset.currentItem', parseInt(this.dataset.currentItem));
			};

			obj._move = function(name) {
				var su; 

				switch(name) {
					case 'next-item': 
						su = parseInt(this.dataset.currentItem) + 1; 
						if(su === this.contentsLength) { su = 0; }
						break;
					case 'prev-item': 
						su = parseInt(this.dataset.currentItem) - 1; 
						if(su < 0) { su = this.contentsLength - 1; }
						break; 
					case 'next-group': 
						su = (parseInt(this.dataset.currentGroup) + 1) * parseInt(this.dataset.groupItemSize); 
						if(su >= this.contentsLength)  { su = 0; }
						break; 
					case 'prev-group': 
						su = (parseInt(this.dataset.currentGroup) - 1) * parseInt(this.dataset.groupItemSize); 
						if(su < 0) { su = this.contentsLength - parseInt(this.dataset.groupItemSize); }
						break; 
					default: 
						break; 
				}

				this._current(su); 
			};

			return obj; 
		}
	};
