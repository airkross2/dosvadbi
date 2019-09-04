
window.onload = function () {
    let ostD, ostCh, ostMin, ostSec;
    var d, h, m, s;
    d = document.getElementById('d');
    h = document.getElementById('h');
    m = document.getElementById('m');
    s = document.getElementById('s');
    let interval = setInterval(function () {
        let dateNow = new Date();
        let dateFuture = new Date(2021, 06, 1);

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
        }
    }, 1000)

}