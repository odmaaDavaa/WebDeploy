function hideAll(){
	document.getElementById("target1").style.display = "none";
	document.getElementById("target2").style.display = "none";
	document.getElementById("target3").style.display = "none";
	document.getElementById("target4").style.display = "none";
	document.getElementById("target5").style.display = "none";
	document.getElementById("target6").style.display = "none";
	document.getElementById("target7").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
      hideAll();
    });

var isHide = true;

function hideShow1(){
	if(isHide) {
		document.getElementById("target1").style.display = "block";
		isHide = false;
	} else{
		document.getElementById("target1").style.display = "none";
		isHide = true;
	}

}
function hideShow2(){
	if(isHide) {
		document.getElementById("target2").style.display = "block";
		isHide = false;
	} else{
		document.getElementById("target2").style.display = "none";
		isHide = true;
	}
}
function hideShow3(){
	if(isHide) {
		document.getElementById("target3").style.display = "block";
		isHide = false;
	} else{
		document.getElementById("target3").style.display = "none";
		isHide = true;
	}
}
function hideShow4(){
	if(isHide) {
		document.getElementById("target4").style.display = "block";
		isHide = false;
	} else{
		document.getElementById("target4").style.display = "none";
		isHide = true;
	}
}
function hideShow5(){
	if(isHide) {
		document.getElementById("target5").style.display = "block";
		isHide = false;
	} else{
		document.getElementById("target5").style.display = "none";
		isHide = true;
	}
}
function hideShow6(){
	if(isHide) {
		document.getElementById("target6").style.display = "block";
		isHide = false;
	} else{
		document.getElementById("target6").style.display = "none";
		isHide = true;
	}
}
function hideShow7(){
	if(isHide) {
		document.getElementById("target7").style.display = "block";
		isHide = false;
	} else{
		document.getElementById("target7").style.display = "none";
		isHide = true;
	}
}