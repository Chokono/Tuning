var quests = document.querySelectorAll('.vopros');
if (quests.length) {
    [].map.call(quests, (e) => {
        e.addEventListener('click', (e) => {
            console.log(111);
            var quest = e.target;
            var parent_quest = quest.parentNode.parentNode.getElementsByTagName('div')[2];
            var parent_p = quest.parentNode.parentNode.getElementsByTagName('div')[1];
            var height = parent_quest.offsetHeight;
            if (parent_p.style.height === height + 'px') {
                parent_p.style.height = '0px';
                parent_p.style.transition = '0.5s';
            } else {
                parent_p.style.height = height + 'px';
                parent_p.style.transition = '0.5s';
            }
        });
    })
}