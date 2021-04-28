let div = document.querySelectorAll('tr th');
let box = document.querySelector('.box');

div.forEach(i => {
	i.addEventListener('click', (e) => {
		if (i.classList.contains('blue')) {
			e.target.classList.toggle('green');
		} else {
			e.target.classList.toggle('yellow');
		}
	})
	i.addEventListener('contextmenu', (e) => {
		if (i.classList.contains('yellow')) {
			e.target.classList.toggle('green');
		} else {
			e.target.classList.toggle('blue');
		}
		e.preventDefault();
	})
})
document.body.addEventListener('keydown', (event) => {
	switch (event.code) {
		case 'Numpad4':
			box.style.left = (parseInt(getComputedStyle(box).left) - 10) + 'px';
			break;
		case 'Numpad6':
			box.style.left = (parseInt(getComputedStyle(box).left) + 10) + 'px';
			break;
		case 'Numpad2':
			box.style.top = (parseInt(getComputedStyle(box).top) + 10) + 'px';
			break;
		case 'Numpad8':
			box.style.top = (parseInt(getComputedStyle(box).top) - 10) + 'px';
			break;
		case 'Numpad7':
			box.style.left = (parseInt(getComputedStyle(box).left) - 10) + 'px';
			box.style.top = (parseInt(getComputedStyle(box).top) - 10) + 'px';
			break;
		case 'Numpad3':
			box.style.left = (parseInt(getComputedStyle(box).left) + 10) + 'px';
			box.style.top = (parseInt(getComputedStyle(box).top) + 10) + 'px';
			break;
		case 'Numpad1':
			box.style.left = (parseInt(getComputedStyle(box).left) - 10) + 'px';
			box.style.top = (parseInt(getComputedStyle(box).top) + 10) + 'px';
			break;
		case 'Numpad9':
			box.style.left = (parseInt(getComputedStyle(box).left) + 10) + 'px';
			box.style.top = (parseInt(getComputedStyle(box).top) - 10) + 'px';
			break;
		default: {
			console.log(event)
			box.textContent = e.code;
			event.preventDefault();
		}
	}
})