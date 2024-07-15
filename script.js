document.querySelector('#contact').addEventListener('click', () => {
    console.log('Clicked');
    document.querySelector('.cform').style.display = 'flex';

})
document.querySelector('#close').addEventListener('click', () => {
    console.log('Clicked');
    document.querySelector('.cform').style.display = 'none';

})


document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('contact');

    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', function () {
            // Scroll to the top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.error('Button not found. Make sure the ID matches the HTML.');
    }
});

const elementToToggle = document.querySelector('.cform');

// Add a scroll event listener to the window
window.addEventListener('scroll', function () {
    // Check if the user has scrolled past a certain point (e.g., 200px)
    if (window.scrollY > 200) {
        // If scrolled past 200px, hide the element
        elementToToggle.style.opacity = '0';
    } else {
        // Otherwise, show the element
        elementToToggle.style.opacity = '1';
    }
});



let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')

let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')

btn2.addEventListener('click', () => {
    img2.style.display = 'block';
    img1.style.display = 'none';
    img3.style.display = 'none';

    btn2.classList.add('btnActive')
    btn1.classList.remove('btnActive')
    btn3.classList.remove('btnActive')
})
btn1.addEventListener('click', () => {
    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';

    btn1.classList.add('btnActive')
    btn2.classList.remove('btnActive')
    btn3.classList.remove('btnActive')
})
btn3.addEventListener('click', () => {
    img3.style.display = 'block';
    img2.style.display = 'none';
    img1.style.display = 'none';

    btn3.classList.add('btnActive')
    btn2.classList.remove('btnActive')
    btn1.classList.remove('btnActive')
})