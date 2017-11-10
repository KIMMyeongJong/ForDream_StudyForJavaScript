var func = function(){
	alert('함수1');
	/*익명함수는 익명함수가 실행될 때 생성되기 때문에 나중에 실행됨*/
}

function func(){
	alert('함수2')
	/*선언적 함수는 처음에 실행될때 먼저 처리함*/
}
func();