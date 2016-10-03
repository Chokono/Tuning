let index = 1;
let prev = document.querySelectorAll(".prev")[0];
let next = document.querySelectorAll(".next")[0];
let slideNumber = document.querySelectorAll('.image').length;
prev.addEventListener('click', (e) => {	
	document.querySelectorAll(`.image`)[index-1].style.height = '0';
	console.log (document.querySelectorAll(`.image`)[index-1]);
	if (index !== 1){	
		index-=1;
	}	else {
		index = slideNumber;
	}
	document.querySelectorAll(`.image`)[index-1].style.height = 'auto';
	document.querySelectorAll(`.image`)[index-1].style.transition = '5s';
})

next.addEventListener('click', (e) => {	
	document.querySelectorAll(`.image`)[index-1].style.height = '0';
	console.log(slideNumber);
	if (index !== slideNumber){		
		index+=1;
		console.log(index);
	}	else {
		index = 1;
	}
	document.querySelectorAll(`.image`)[index-1].style.height = 'auto';
	document.querySelectorAll(`.image`)[index-1].style.transition = '5s';
});