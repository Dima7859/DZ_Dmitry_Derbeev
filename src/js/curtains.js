const btnImgComeBack =document.getElementById('btnImgComeBack');
const btnImgBLockHeder = document.getElementById('btnImgBLockHeder');
const reamerBtn = document.getElementById('reamerBtn');
const menuAllPersonage = document.getElementById('menuAllPersonage');
const allBLockHederJs = document.getElementById('allBLockHederJs');
const enterCurtains = document.getElementById('enterCurtains');
const hederBlockEntryChaildCurtains = document.getElementById('hederBlockEntryChaildCurtains');
const textEnterCurtains = document.getElementById('textEnterCurtains');

const strelkaRight = document.getElementById('strelkaRight');
const strelkaLeft = document.getElementById('strelkaLeft');


if (window.location.pathname === '/Alliance.html' || window.location.pathname === '/Horde.html') {


    btnImgComeBack.onclick  = () => {
        window.location.href = '/';
    }

    reamerBtn.onclick = () => {
        const isClicked = reamerBtn.getAttribute('clicked');
        if (!isClicked) {
            reamerBtn.setAttribute('clicked', true);
            menuAllPersonage.style.transitionDuration = '1s';
            menuAllPersonage.style.marginLeft = '0px';
            reamerBtn.style.left = '230px';
            strelkaLeft.style.display = 'flex';
            strelkaRight.style.display = 'none';
        } else {
            reamerBtn.removeAttribute('clicked');
            menuAllPersonage.style.marginLeft = '-230px';
            reamerBtn.style.left = '0px';
            strelkaRight.style.display = 'flex';
            strelkaLeft.style.display = 'none';
        }
    };

    btnImgBLockHeder.onclick = () => {
        const isClicked = btnImgBLockHeder.getAttribute('clicked');
        if (!isClicked) {
            btnImgBLockHeder.setAttribute('clicked', true);
            allBLockHederJs.style.top = '0px';
        } else {
            btnImgBLockHeder.removeAttribute('clicked');
            allBLockHederJs.style.top = '-357px';
        }
    };

};

if (window.location.pathname === '/') {

    const mainPageEntryBlockCurtains = () => {
        const isClicked = enterCurtains.getAttribute('clicked');
        if (!isClicked) {
            enterCurtains.setAttribute('clicked', true);
            textEnterCurtains.setAttribute('clicked', true);
            hederBlockEntryChaildCurtains.style.top = '0px';
        } else {
            enterCurtains.removeAttribute('clicked');
            textEnterCurtains.removeAttribute('clicked');
            hederBlockEntryChaildCurtains.style.top = '-136px';
        }
    };

    enterCurtains.onclick = mainPageEntryBlockCurtains;
    textEnterCurtains.onclick = mainPageEntryBlockCurtains;

};
