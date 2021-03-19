
window.onload = function () {
    let ostD, ostCh, ostMin, ostSec;
    var d, h, m, s, newStart;
    d = document.getElementById('d');
    h = document.getElementById('h');
    m = document.getElementById('m');
    s = document.getElementById('s');
    newStart = document.getElementById('newStart');
    let interval = setInterval(function () {
        let dateNow = new Date();
        let dateFuture = new Date(2021, 03, 8);

        ostD = Math.trunc((dateFuture - dateNow) / (1000 * 60 * 60 * 24));
        ostCh = Math.trunc((dateFuture - dateNow) / (1000 * 60 * 60));
        ostMin = Math.trunc((dateFuture - dateNow) / (1000 * 60));
        ostSec = Math.trunc((dateFuture - dateNow) / (1000));

        d.textContent = ostD;
        h.textContent = ostCh;
        m.textContent = ostMin;
        s.textContent = ostSec;
        if(ostSec == 0){
            clearInterval(interval);
            newStart.textContent = 'Теперь ты моя навечно ❤ И в горе и в радости ❤ И пока смерть не разлучит нас ❤ Ты мой маленький ангелочек и жизни моей нет без тебя ❤ Эльмира, я люблю тебя и спасибо что ты есть у меня ❤';
        }
    }, 1000)

}