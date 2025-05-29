$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('ul li  ').click(function () {
        $('li ').removeClass("active");
        $(this).addClass("active");
    });
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
        $(".top-bar").addClass("remove-bar"); // you don't need to add a "." in before your class name
    } else {
        $(".top-bar").removeClass("remove-bar");
    }
});


//   FOOTER

// Contact

const contactform = document.querySelector('.contact-form');
const container = document.querySelector('.contact-container');

contactform.addEventListener('submit', (event) => {
    event.preventDefault();
    container.innerHTML = '<p>Thanks for your message. <br /> I\'ll respond to you shortly</p>';
});

const connectbtn = document.querySelector('.connect-btn');
const crossbtn = document.querySelector('.cross-btn');
const socialcontainer = document.querySelector('.social-container');

connectbtn.addEventListener('click', () => {
    socialcontainer.classList.toggle('visible')
});

crossbtn.addEventListener('click', () => {
    socialcontainer.classList.remove('visible')
});

// Contact



// Get the modal 
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal 
var modalImg = document.getElementById("img01");
var items = document.querySelectorAll('box');
items.forEach(box => {
    box.onclick = function () {
        modal.style.display = "block"; modalImg.src = this.style.backgroundImage.slice(5, -2);
    }
});
// Get the <span> element that closes the modal 
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () { 
    modal.style.display = "none"; 
}