/* Open Stories */

var buttons = document.getElementsByClassName('storyBtn');
var overlays = document.getElementsByClassName('overlay');
var body = document.getElementsByTagName('body');
var close = document.getElementsByClassName('close');
var article = document.getElementsByClassName('article');

function Open(e) {
    e.preventDefault();
    for (var i = 0; i < overlays.length; i++) {
        if (buttons[i] == this) {
            overlays[i].setAttribute("aria-hidden", false);
            overlays[i].scrollTop = 0;
            if (article[i].classList) {
                article[i].classList.add('adjustArticle');
            } else {
                article[i].className = "article adjustArticle";
            }
        }
    }
    if (body[0].classList) {
        body[0].classList.add("noscroll");
    } else {
        body[0].className = "noscroll";
    }
}

function Close(e) {
    e.preventDefault();
    for (var i = 0; i < overlays.length; i++) {
        if (close[i] == this) {
            overlays[i].setAttribute("aria-hidden", true);
            if (article[i].classList) {
                article[i].classList.remove('adjustArticle');
            } else {
                article[i].className = "article";
            }
        }
    }
    if (body[0].classList) {
        body[0].classList.remove("noscroll");
    } else {
        body[0].className = "";
    }
}

if (buttons[0].addEventListener) {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", Open, false);
    }

    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", Close, false);
    }
    
} else {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].attachEvent("onclick", Open, false);
    }

    for (var i = 0; i < close.length; i++) {
        close[i].attachEvent("onclick", Close, false);
    }
}

$('.overlay').click(function(e) {
    for (var i = 0; i < overlays.length; i++) {
        if (close[i] == this) {
            overlays[i].setAttribute("aria-hidden", true);
            if (article[i].classList) {
                article[i].classList.remove('adjustArticle');
            } else {
                article[i].className = "article";
            }
        }
    }
});

$('.article').click(function(e){
    e.stopPropagation();
});


/* Image bounce */

var circle = document.getElementsByClassName('circle');
var flower = document.getElementsByClassName('flower');
var timer = setInterval(Bounce, 500);

function Bounce() {
    for (var i = 0; i < circle.length; i++) {
        circle[i].classList.toggle('adjustCircle');
    }
    for (var i = 0; i < flower.length; i++) {
        flower[i].classList.toggle('adjustFlower');
    }
}

/* Play video */

var blank = document.getElementsByClassName('blank');
var video = document.getElementsByClassName('video');
var play = document.getElementsByClassName('playbutton');
var test = document.getElementsByClassName('test');

function Play(e) {
    e.preventDefault();
    video[0].setAttribute("aria-hidden", false);
    video[0].innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/EsGktrVN11M?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>';
    body[0].classList.add('noscroll');
}

$('body').click(function() {
    video[0].innerHTML = "";
    video[0].setAttribute('aria-hidden', true);
    body[0].classList.remove('noscroll');
});

$('.playbutton').click(function(e){
    e.stopPropagation();
});

$('.storyBtn').click(function(e){
    e.stopPropagation();
});

play[0].addEventListener("click", Play, false);
