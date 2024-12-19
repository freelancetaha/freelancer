// Initialize Locomotive Scroll
const scrollContainer = document.querySelector('#content');
if (scrollContainer) {
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
    });
} else {
    console.warn('LocomotiveScroll: #content not found.');
}

// Select DOM elements safely
const img = document.querySelector('.hacker');
const box = document.querySelector('.box');

if (img && box) {
    // Event handlers
    const handleMouseEnter = () => {
        img.classList.add('active');
        img.style.position = 'absolute'; // Ensure the image moves freely
        img.style.pointerEvents = 'none'; // Prevent interference with mouse events
    };

    const handleMouseLeave = () => img.classList.remove('active');

    const handleMouseMove = (e) => {
        const rect = box.getBoundingClientRect();
        const mouseX = e.clientX - rect.left; // Mouse X relative to the box
        const mouseY = e.clientY - rect.top;  // Mouse Y relative to the box

        // Position image at the mouse pointer
        const offsetX = mouseX - img.offsetWidth / 2; // Center horizontally
        const offsetY = mouseY - img.offsetHeight;    // Top of the image aligns with mouse Y

        requestAnimationFrame(() => {
            img.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
        });
    };

    // Add event listeners
    box.addEventListener('mouseenter', handleMouseEnter);
    box.addEventListener('mousemove', handleMouseMove);
    box.addEventListener('mouseleave', handleMouseLeave);
} else {
    console.warn('.hacker or .box not found in the DOM.');
}

document.addEventListener("DOMContentLoaded", () => {
    let scrollContainers = document.querySelector('#scrollContainer');
    let leftBtn = document.querySelector('#left-btn');
    let rightBtn = document.querySelector('#right-btn');

    scrollContainers.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainers.scrollLeft += evt.deltaY;
    });

    leftBtn.addEventListener('click', ()=>{
        scrollContainers.scrollLeft -= 900;
    });
    rightBtn.addEventListener('click', ()=>{
        scrollContainers.scrollLeft += 900;
    });
});