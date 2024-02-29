// function toggleMenu() {
//     const dropdownContent = document.querySelector('.dropdown-content');
//     dropdownContent.classList.toggle('show');
// }

// Анимация диаграмм навыков
document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        skill.style.width = percent;
    });
});

// Плавный скроллинг к якорным ссылкам
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Инициализация карусели
let carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Увеличение скорости прокрутки
    carousel.scrollLeft = scrollLeft - walk;
});

function toggleMenu() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

// Закрытие меню при клике вне его области
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}