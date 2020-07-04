/* Toggle "top" class on header based on scroll */
function onscroll(){
    if(window.scrollY==0){
        document.querySelector("header").classList.add("top");
    }else{
        document.querySelector("header").classList.remove("top");
    }
    document.querySelectorAll(".card").forEach(el => {
        if(elementInViewport(el)){
            el.classList.add("visible-card")
        }
    })
}
document.addEventListener("scroll", onscroll); // calll on scroll everytime scrolled

const hamburger = document.querySelector('#hamburger');
const appbar = document.querySelector('#appbar');
hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('opened');
  appbar.classList.toggle('open');
});
$('.mobile-link').click(()=>{
    hamburger.classList.toggle('opened');
    appbar.classList.toggle('open');
})
function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}
