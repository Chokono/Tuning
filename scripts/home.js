[].forEach.call(document.querySelectorAll('.steklo'), (e) => {
    var t = [Math.floor(Math.random() * 220), Math.floor(Math.random() * 220), Math.floor(Math.random() * 220)];
    e.style.backgroundColor = `rgba(${t[0]},${t[1]},${t[2]},0.30)`;
});

[].forEach.call(document.querySelectorAll('a'), (e) => {
	e.onclick = ()=>{return false;}
});

BG.addEventListener('click', function() {
    if (BG.style.backgroundImage === "") {
        BG.style.backgroundImage = "url('../assets/img/land1920.png')";
    } else {
        BG.style.backgroundImage = "";
    };
});

require ("./road");
require ("./questions");