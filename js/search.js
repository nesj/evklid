document.addEventListener("DOMContentLoaded", function () {
	const headerButton = document.querySelector(".header__button");
	const headerWrapperSearch = document.querySelector(".header__wrapper-search");
	const headerMenu = document.querySelector(".header__menu");
	const searchClose = document.querySelector(".header__search-close");
	const logo = document.querySelector(".logo");
	const burger = document.querySelector(".burger");
	
	headerButton.addEventListener("click", function () {
	headerWrapperSearch.classList.add("search-active");
	headerButton.classList.add("header__button--color");
	});
	
	searchClose.addEventListener("click", function () {
	headerWrapperSearch.classList.remove("search-active");
	headerButton.classList.remove("header__button--color");
	document.querySelector('input').value = "";
	});
	});