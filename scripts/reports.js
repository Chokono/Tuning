let index = 1;
let numberOfObjects = document.querySelectorAll('.reportsConteiner').length;
let prev = document.querySelectorAll('.switch1');
let next = document.querySelectorAll('.switch2');

prev[0].style.color = '#777';	

prev[0].addEventListener('click', (e) => {	
	if (index !== 1){
		document.querySelectorAll(`.reportsConteiner`)[index-1].style.display = 'none';
		index-=1;
		document.querySelectorAll(`.reportsConteiner`)[index-1].style.display = 'block';
		if (index === 1) {
			prev[0].style.color = '#777';
		} else {
			prev[0].style.color = 'orange';
		}
		if (index !== numberOfObjects) {
			next[0].style.color = 'orange';
		}
	}	
})

next[0].addEventListener('click', (e) => {	
	if (index !== document.querySelectorAll('.reportsConteiner').length){
		document.querySelectorAll(`.reportsConteiner`)[index-1].style.display = 'none';
		index++;
		document.querySelectorAll(`.reportsConteiner`)[index-1].style.display = 'block';
		if (index === numberOfObjects) {
			next[0].style.color = '#777';
		} else {
			next[0].style.color = 'orange';
		}
		if (index !== 1) {
			prev[0].style.color = 'orange';
		}
	}	
})
