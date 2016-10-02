function genereteSlider(back) {
    if (this == back.getElementsByTagName('img')[0]) {
        back.style.backgroundImage = `url(${this.src}) `;
        back.style.width = `${this.offsetWidth}px`;
        back.style.height = `${this.offsetHeight}px`;
        this.style.display = 'none';
    } else {
        let innerDiv = document.createElement('div');
        back.appendChild(innerDiv);

        innerDiv.style.backgroundImage = `url(${this.src}) `;
        innerDiv.style.width = `${this.offsetWidth/2}px`;
        innerDiv.style.height = `${this.offsetHeight}px`;
        innerDiv.className = 'innerComporizon';
        this.style.display = 'none';
        let arrows = document.createElement('span');
        innerDiv.appendChild(arrows);
    }

}

[].forEach.call(document.querySelectorAll('.comporison'), (back) => {
    [].map.call(back.getElementsByTagName('img'), (img) => {
        if (img.complete) {
            genereteSlider.bind(img)(back);
        } else {
            img.onload = () => {
                genereteSlider.bind(img)(back);
            };
        }

    });

    back.addEventListener('mousemove', (el) => {
        if (~el.target.className.indexOf('comporison') || ~el.target.className.indexOf('innerComporizon')) {
            back._newCoord = el.layerX + 'px';
        }
        if (!back._priv_flag) {
            back._priv_flag = true;
            back.getElementsByTagName('div')[0].style.width = back._newCoord;
            setTimeout((flag_el) => {
                flag_el._priv_flag = false;
                back.getElementsByTagName('div')[0].style.width = back._newCoord;
            }, 100, back);
        }
    });
});
