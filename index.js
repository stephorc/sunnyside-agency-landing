// Hamburger Menu
const hamMenuBtn = document.getElementById('ham-menu-btn');
const hamMenuItems = document.getElementById('ham-menu-items');

hamMenuBtn.addEventListener('click', () => {
  hamMenuBtn.classList.toggle('open');
  hamMenuItems.classList.toggle('unfold');
  hamMenuItems.classList.toggle('close');
});


// animated arrow, onclick to main
function toMain() {
  let scrollToTransformText = document.getElementById('firstText');
  scrollToTransformText.scrollIntoView();
}


// Intersection Observer API for back-to-top button, visibility on scroll and animation via clasList.add
const target = document.querySelector('.topBtn');
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('topBtn-anim');
    } else {
      entry.target.classList.remove('topBtn-anim');
    }
  });
}
const observer = new IntersectionObserver(handleIntersection);
observer.observe(target);


// back to top button, onclick to hero
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
