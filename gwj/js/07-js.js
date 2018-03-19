var btn = document.getElementById('gwj-btn1');
var btns = document.getElementById('gwj-btn2');
var ipt = document.getElementById('inpp');

window.onload = function() {
	var divs = getElementByAttr("div", "data-box", "buy");
	for(var i = 0; i < divs.length; i++) {
		calculate(divs[i]);
	}
}

function calculate() {
	var number = parseInt(ipt.value);
	btn.onclick = function() {
		number--;
		if(number < 0) {
			number = 0;
		}
		ipt.value = number;
	}
	btns.onclick = function() {
		number++;
		ipt.value = number;
	}
}

function getElementByAttr(tag, attr, value){
	var aElements = document.getElementsByTagName(tag);
	var aEle = [];
	for(var i = 0; i < aElements.length; i++) {
		if(aElements[i].getAttribute(attr) == value)
			aEle.push(aElements[i]);
	}
	return aEle;
}