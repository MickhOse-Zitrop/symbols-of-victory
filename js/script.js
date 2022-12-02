var header__show = document.querySelector('.header__show')
var header__wrapper = document.querySelector('.header__wrapper')
var show1 = document.querySelector('#show1')
var open1 = document.querySelector('#open1')
var show2 = document.querySelector('#show2')
var open2 = document.querySelector('#open2')
var list1 = document.querySelector('#list1')
var list2 = document.querySelector('#list2')

header__show.addEventListener('click', function () {
	header__wrapper.classList.toggle('active');
	header__show.classList.toggle('active');
})

show1.addEventListener('click', function () {
	open1.classList.toggle('close1')
	show1.classList.toggle('right1')
	list1.classList.toggle('close')
})
show2.addEventListener('click', function () {
	open2.classList.toggle('close1')
	show2.classList.toggle('right1')
	list2.classList.toggle('close')
})

window.onload = function () {
	document.querySelector('.preloader').classList.add("preloader-remove");
	document.querySelector('.unactive').classList.remove("unactive");
};

function background(e_id) {
	var e = document.getElementById(e_id)
	e.classList.toggle('active');
	var styleElem = document.head.appendChild(document.createElement("style"));
	styleElem.innerHTML = ".section__show.active#" + e_id + ":after {background-image: url('img/" + e_id + ".jpg');}";
}

