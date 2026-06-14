const sections = document.querySelectorAll('section');
const navTitle = document.querySelector(".nav-title");

function updateVisibility() {
    const currentHash = window.location.hash || '#';

    sections.forEach(section => {
        const isCurrent = `#${section.id}` === currentHash || `#/${section.id}` === currentHash || (currentHash === '#' && section.id === 'main-content');
        section.classList.toggle('hidden', !isCurrent);
    });

    if (navTitle) {
        const isHome = currentHash === '#' || currentHash === '#/';
        navTitle.classList.toggle('transparent-title', isHome);
    }
}

updateVisibility();
window.addEventListener('hashchange', updateVisibility);

document.getElementById("current-year").innerHTML = "© 2021 - " + new Date().getFullYear();