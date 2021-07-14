	var menu__about_link = document.getElementById("menu__about_link").href = "#";
	var menu__education_link = document.getElementById("menu__education_link").href = "#";
	var menu__skills_link = document.getElementById("menu__skills_link").href = "#";
	$('.menu__link-about').click(function(event) {
		setScrollIntoView(about);
	});
	$('.menu__link-education').click(function(event) {
		setScrollIntoView(education);
	});
	$('.menu__link-skills').click(function(event) {
		setScrollIntoView(skills);
	});
	$('.menu__link-work').click(function(event) {
		setScrollIntoView(work);
	});