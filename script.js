const draggableElement = document.querySelector(".primary_homes_items")
let isDragging = false;
let offsetX;
const transitionDuration = 300; // час анімації в мілісекундах

let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

draggableElement.addEventListener('mousedown', (e) => {
    // Перевірка ширини екрана
    if (window.innerWidth <= 1242) {
        return;
    }
    if (window.innerWidth >= 1580) {
        return
    }
    if (window.innerWidth <= 1350) {
        isDragging = true;
        offsetX = e.clientX + screenWidth/40  - draggableElement.getBoundingClientRect().left;
        draggableElement.style.cursor = 'grabbing';
        e.preventDefault();
        return
    }
    if (window.innerWidth <= 1400) {
        isDragging = true;
        offsetX = e.clientX + screenWidth/19 - draggableElement.getBoundingClientRect().left;
        draggableElement.style.cursor = 'grabbing';
        e.preventDefault();
        return
    }

    isDragging = true;
    offsetX = e.clientX + screenWidth/9 - draggableElement.getBoundingClientRect().left;
    draggableElement.style.cursor = 'grabbing';
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    draggableElement.style.transform = `translateX(${x}px)`;

    // Забороняємо виділення тексту під час перетягування
    e.preventDefault();
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;

    isDragging = false;
    draggableElement.style.cursor = 'grab';
    draggableElement.style.transition = `transform ${transitionDuration}ms ease-in-out`;

    // Повертаємо об'єкт на своє місце плавно
    draggableElement.style.transform = 'translateX(0)';

    // Знуляємо анімацію після завершення
    setTimeout(() => {
        draggableElement.style.transition = '';
        draggableElement.style.boxShadow = 'none';
    }, transitionDuration);
});
