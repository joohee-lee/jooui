# array

ㅡcf mdn : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array>

## 배열 리터럴 

```
	var a1 = [1, 2, 3, 4]; // 숫자로 구성된 배열 
	
	var a2 = [1, 'two', 3, null];  // 여러가지 타입으로 구성된 배열
	
	var a3 = [
		"what the hammer? what her chain?",
		"iI what furnace was thy brain?",
		"what the anvil? what dread grasp",
		"what the anvil? what dread grasp",
	]; // 여러줄로 정의한 배열 
	
	var a4 = [
		{ name: "ruby", hardness: 9 },
		{ name: "Diamond", hardness: 10 },
		{ name: "Topaz", hardnee: 8},

	]// 객체가 들어 있는ㄴ 배열 
	
	var a5 =[
		
		[1, 3, 5],
		[2, 4, 6],

	];
	//배열이 들어있는 배열 


	//배열과 객체 리터럴의 마지막에는 항상 쉼표 - trailing comma, dangling comma, terminal comma()
	//객체 리터럴 json 에서는 마지막 쉼표를 허용하지 않음 !!  

```


## Properties

### Array.length
- 배열의 길이를 반환
```
var clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length)
//4


const arr = ['a','b','c']

// 배열 길이 
arr.length
//3

// 배열 요소 접근 
arr[0]
//a
arr[arr.length-1];
//c

var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;
for (var i = 0; i < length; i++) {
  numbers[i] *= 2;

 console.log(numbers[i]);

}

var arr = [1, 2, 3];
printEntries(arr);

// 1
// 2
// 3
// === printed ===

arr.length = 5; // set array length to 5 while currently 3.
printEntries(arr);

function printEntries(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    console.log(arr[i]);
  }
  console.log('=== printed ===');
}

// 1
// 2
// 3
// undefined
// undefined
// === printed ===

```

## Methods

> push()
> pop()
> shift()
> unshift()


- push()
메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
배열 끝에 여러 값을 추가 

```
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));

//4

배열에 엘리먼트를 추가
var sports = ['축구', '야구'];
var total = sports.push('미식축구', '수영');

console.log(sports); // ['축구', '야구', '미식축구', '수영']
console.log(total);  // 4

두개의 배열 합치기 

var v = ['설탕당근', '감자'];
var m = ['파', '셀러리'];
Array.prototype.push.apply(v, m);
4
['설탕당근', '감자', '파', '셀러리']

```


- pop()
배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.

```
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

```

- shift()
배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
이 메서드는 배열의 길이를 변하게 합니다.

```
var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```

- unshift()

메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.

```
var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

```

- concat()
인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환

```
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

var new_array = old_array.concat([...values])

```

- splice()
메서드는 배열의 기존 요소를 삭제 또는 교체 하거나 새 요소를 추가여 배열의 내용을 변경
> 매개변수
- start
배열의 변경을 시작할 인덱스입니다(초기 index : 0).  만약 배열 길이보다 길면, 실제 시작 인덱스는 배열의 길이로 설정됩니다. 음수의 경우, 배열의 끝에서 부터 요소를 세어나가며 (초기 index : -1), 그 값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정됩니다.

-deleteCount Optional
배열에서 제거를 할 요소의 수 입니다. 만약  deleteCount가 0의 경우, 아무런 요소도 제거되지 않습니다. 이경우, 최소한 하나의 새 요소를 특정해 주어야 합니다. 만약, deleteCount가 start에서 부터의 남은 요소 수 보다 많을 경우, 남은 요소를 모두 제거합니다.

-item1, item2, ... Optional
배열에 추가될 요소입니다. 만약 아무런 요소도 특정되지 않을 경우,  splice()는 요소를 오직 삭제만 할 것입니다.


```
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

```

- indexOf()
메서드는 배열에서 지정된 요소를 찾을 수있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
배열 내의 요소의 최초의 인덱스. 발견되지 않으면 -1


arr.indexOf(searchElement[, fromIndex])

- searchElement : 배열에서 찾을 요소입니다.
- 
```
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

```


-slice() 
메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 수정되지 않습니다.

egin Optional
0을 시작으로 하는 추출 시작점에 대한 인덱스를 의미합니다.
음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. slice(-2) 는 배열에서 마지막 두 개의 엘리먼트를 추출합니다.
begin 이 undefined인 경우에는, 0번 인덱스부터 slice 합니다.
end Optional
추출을 종료 할 0 기준 인덱스입니다. slice 는 end 인덱스를 제외하고 추출합니다.
예를들어, slice(1,4)는 두번째 요소부터 네번째 요소까지 (1, 2 및 3을 인덱스로 하는 요소) 추출합니다.
음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. 예를들어 slice(2,-1) 는 세번째부터 끝에서 두번째 요소까지 추출합니다.
end가 생략되면 slice는 배열의 끝까지(arr.length) 추출합니다.
만약 end값이 배열의 길이보다 크다면, silce는 배열의 끝까지(arr.length) 추출합니다


> arr.slice([begin[, end]])
```

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

```

- join()
join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
> arr.join([separator])

```
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain


var myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
var myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
var myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
var myVar4 = a.join('');    // myVar4에 '바람비불'을 대입
```

- Array.isArray() 메서드는 인자가 Array인지 판별
> Array.isArray(obj)
> 객체가 Array라면 true를 반환하고, 아니라면 false를 반환합니다.

```


//  모두 true

Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));

/ 모두 false 반환
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });











