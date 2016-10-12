let index = 1;
let numberOfObjects = document.querySelectorAll('.reportsConteiner').length;
let prev1 = document.querySelectorAll('.switch1');
let next1 = document.querySelectorAll('.switch2');

prev1[0].style.color = '#777';	

prev1[0].addEventListener('click', (e) => {	
	if (index !== 1){
		document.querySelectorAll(`.reportsConteiner`)[index-1].style.display = 'none';
		index-=1;
		document.querySelectorAll(`.reportsConteiner`)[index-1].style.display = 'block';
		if (index === 1) {
			prev1[0].style.color = '#777';
		} else {
			prev1[0].style.color = 'orange';
		}
		if (index !== numberOfObjects) {
			next1[0].style.color = 'orange';
		}
	}	
})

next1[0].addEventListener('click', (e) => {	
	if (index !== document.querySelectorAll('.reportsConteiner').length){
		document.querySelectorAll(`.reportsConteiner`)[index-1].style.display = 'none';
		index++;
		document.querySelectorAll(`.reportsConteiner`)[index-1].style.display = 'block';
		if (index === numberOfObjects) {
			next1[0].style.color = '#777';
		} else {
			next1[0].style.color = 'orange';
		}
		if (index !== 1) {
			prev1[0].style.color = 'orange';
		}
	}	
})
