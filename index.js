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


// animated arrow, onclick to main
function toMain() {
  let scrollToTransformText = document.getElementById('firstText');
  scrollToTransformText.scrollIntoView();
}