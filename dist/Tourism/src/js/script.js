document.addEventListener('DOMContentLoaded', function () {
    const Progress = document.querySelector('.rightside__block-top');
    const a0 = document.querySelector('#f');
    const a1 = document.querySelector('#fl');
    const a2 = document.querySelector('#fll');
    const a3 = document.querySelector('#flll');

    window.addEventListener('scroll', function () {
        let h = document.documentElement;

        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || document.body.scrollHeight;

        let percent = st / (sh - h.clientHeight) * 100;

        Progress.style.height = percent + "%";

        if (percent > 0) {
            a0.style.color = '#FBD784';
        } else {
            a0.style.color = '#FFFFFF';
        }
        if (percent > 24) {
            a1.style.color = '#FBD784';
        } else {
            a1.style.color = '#FFFFFF';
        }
        if (percent > 49) {
            a2.style.color = '#FBD784';
        } else {
            a2.style.color = '#FFFFFF';
        }
        if (percent > 74) {
            a3.style.color = '#FBD784';
        } else {
            a3.style.color = '#FFFFFF';
        }
    })
})