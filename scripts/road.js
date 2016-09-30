[].forEach.call(document.querySelectorAll('.comporison'), (e) => {
    e.addEventListener('mousemove', (el) => {
        console.log(e.getElementsByTagName('div')[0]); 
            e.getElementsByTagName('div')[0].style.width = el.layerX + 'px';
    });
})
