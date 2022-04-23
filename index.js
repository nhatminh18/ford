// NAVBAR

(function () {
    var doc = document.documentElement;
    var w = window;

    var curScroll = prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = prevDirection =  0;


    var header = document.getElementById('navbar');

    var threshold = 180;
    var toggled;

    var checkScroll = function () {
        curScroll = w.scrollY || doc.scrollTop;

        if (curScroll > prevScroll) {
            curDirection = 2;
        }

        else {
            curDirection = 1;
        }

        if (curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        if(toggled) {
            prevDirection = curDirection;
        }

        
        prevScroll = curScroll;
    };

    var toggleHeader = function () {
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header.classList.add('hide');
        } 
        else if (curDirection === 1 ) {
            header.classList.remove('hide');
        }

        else {
            toggled = false;
        }

        return toggled;
    };

    window.addEventListener('scroll', checkScroll);
})();

// VIDEO

var video = document.getElementById('electric-video');

document.getElementById('play').onclick = function () {
    document.getElementById('play').style.display = "none";
    document.getElementById('electric-img').style.display = "none";
    if (video.paused) {
        video.play();
    }
}

document.getElementById('electric-img').onclick = function () {
    document.getElementById('play').style.display = "none";
    document.getElementById('electric-img').style.display = "none";
    if (video.paused) {
        video.play();
    }
}

document.querySelector('#num-click').onclick = function() {
    document.querySelector('#pop-up').style.display = "block";
}
document.querySelector('#close-img').onclick = function() {
    document.querySelector('#pop-up').style.display = "none";
}

