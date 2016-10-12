[].forEach.call(document.querySelectorAll('a'), (e) => {
	e.onclick = ()=>{return false;}
});

require ("./comporison");
require ("./questions");
require ("./reports");
require ("./galery");
//require ("./bootstrap");