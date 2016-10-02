var quests = document.querySelectorAll('.vopros');
if (quests.length) {
    [].map.call(quests, (e) => {
        e.addEventListener('click', (e) => {
            var quest = e.target;
            console.log (quest.parentNode.getElementsByTagName('div')[1])       
            var parentOtvet = quest.parentNode.getElementsByTagName('div')[2];    
            var otvet = quest.parentNode.getElementsByTagName('div')[3];
            var parentCross = quest.parentNode.getElementsByTagName('div')[0];
            var height = otvet.offsetHeight;
            console.log(height);
            console.log (parentOtvet);
            if (parentOtvet.style.height === height + 'px') {
                parentOtvet.style.height = '0px';
                parentOtvet.style.transition = '0.5s';
                parentCross.style.height = '18px';
            } else {
                parentOtvet.style.height = height + 'px';
                parentOtvet.style.transition = '0.5s';
                parentCross.style.height = '0px';
            }
        });
    })
}