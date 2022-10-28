/* ------------------------------------------------------------------------------------------------------
                                    VARIATION IN NAVBAR'S BACKGROUND
------------------------------------------------------------------------------------------------------- */

// Using window.scrollY to bring the variation in the navbar's background
let nav = document.querySelector('nav');

changenavBack();

window.addEventListener('scroll', changenavBack);
function changenavBack()
{
    if (window.scrollY >= 100) {
        nav.classList.add('active_nav');
    } else {
        nav.classList.remove('active_nav');
    }
}