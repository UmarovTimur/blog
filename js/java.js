$(document).ready(function () {
	$('.header__burger').click(function (event) {//меню бургер
		$('.sidebar,.container,.header__burger_item,.sidebar__after').toggleClass('active');
	});
	$('.sidebar__after').click(function (event) {
		$('.sidebar,.container,.header__burger_item,.sidebar__after').removeClass('active');
	});
	$('.link_1').click(function (event) {//главное меню
		$('.portfolio__line').addClass('position_1');
		$('.portfolio__line').removeClass('position_2')
		$('.portfolio__line').removeClass('position_3')
		$('.portfolio__line').removeClass('position_4')
		$('.branding').addClass('active')
		$('.design').removeClass('active')
	});
	$('.link_2').click(function (event) {
		$('.portfolio__line').addClass('position_2');
		$('.portfolio__line').removeClass('position_1')
		$('.portfolio__line').removeClass('position_3')
		$('.portfolio__line').removeClass('position_4')
		$('.design').addClass('active')
		$('.branding').removeClass('active')
	});
	$('.link_3').click(function (event) {
		$('.portfolio__line').addClass('position_3');
		$('.portfolio__line').removeClass('position_1')
		$('.portfolio__line').removeClass('position_2')
		$('.portfolio__line').removeClass('position_4')
	});
	$('.link_4').click(function (event) {
		$('.portfolio__line').addClass('position_4');
		$('.portfolio__line').removeClass('position_1')
		$('.portfolio__line').removeClass('position_2')
		$('.portfolio__line').removeClass('position_3')
	});
});
// функия для картинок которая делает из них фон 
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

//JS-функция записи информации в fonts.scss

function fontsStyle(params) {
	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		})
	}
}

function cb() {}

$(window).resize(function(event) {
	adaptive__function();
});

function adaptive__work(w,h) {
	var workMessageRight =$('.work__message_right');
	var workItemLeft =$('.work__item_left');
	var workItemRight =$('.work__item_right');

	if (w < 701) {
		$('.work__message_right').prependTo(workItemLeft);
		workItemRight.removeClass('work__item');
	}else {
		workItemRight.addClass('work__item');
		$('.work__message_right').prependTo(workItemRight);
	}
}

function adaptive__education(w,h) {
	var workMessageRight =$('.education__message_right');
	var educationItemLeft =$('.education__item_left');
	var educationItemRight =$('.education__item_right');

	if (w < 741) {
		$('.education__message_right').prependTo(educationItemLeft);
		educationItemRight.removeClass('education__item');
	}else {
		educationItemRight.addClass('education__item');
		$('.education__message_right').prependTo(educationItemRight);
	}
}

function adaptive__function() {
	const windowInnerWidth = window.innerWidth;
	const windowInnerHeight = window.innerHeight;
	adaptive__work(windowInnerWidth,windowInnerHeight);
	adaptive__education(windowInnerWidth,windowInnerHeight);
}
adaptive__function();

//========================= Scrool To Element ==================================

function setScrollIntoView(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop - 80,
		behavior: 'smooth',
	})
}
var about = document.querySelector('.about');
var work = document.querySelector('.work');
var education = document.querySelector('.education');
var skills = document.querySelector('.skills');
var message = document.querySelector('.message');

$('.menu__link-contacts').click(function(event) {
		setScrollIntoView(message);
});


if(location.href.split(location.host)[1] != "/kod/index.html") {
	console.log(location.href)
	var menu__about_link = document.getElementById("menu__about_link").href = "index.html";
	var menu__education_link = document.getElementById("menu__education_link").href = "index.html";
	var menu__skills_link = document.getElementById("menu__skills_link").href = "index.html";
}


// Стрелка вверх
let arowTop = document.createElement('div');

arowTop.className = "arow_top";
arowTop.innerHTML = "<span></span>";

document.body.append(arowTop);

function windowScroll(wst,wsl) {
	if (wst <= 40) {
		$('.arow_top').removeClass('active')
	}
	if (wst > 40) {
		$('.arow_top').addClass('active')
	}
}

$('.arow_top').click(function(event) {
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	})
});

$(window).scroll(function() {
	const windowScrollTop = window.pageYOffset;
	const windowScrollleft = window.pageXOffset;
	windowScroll(windowScrollTop,windowScrollleft);
});

// Обращение к элементу по номеру
// var dom_trigger = document.getElementsByClassName('trigger'),
// 		dom_status = document.getElementById('status');
// for(var i = 0; i < dom_trigger.length; i++){
// 	dom_trigger[1].addEventListener('click', fc_trigger, false);
// }
// function fc_trigger(){
// 	dom_status.innerHTML = Date.now();
// }
// Задерживает выполнение функии 
// console.log("Привет");
// setTimeout(() => { console.log("мир"); }, 3000);