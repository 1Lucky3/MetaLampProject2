import './style.scss'
import './slider.ts'

const sliderBtn = document.querySelector(".slider__btn");
sliderBtn.onmousedown = function(event){
  moveAt(event.pageX);
  function moveAt(pageX) {
    sliderBtn.style.left = pageX + 'px';
  }
  function onMouseMove(event) {
    moveAt(event.pageX);
  }
  document.addEventListener('mousemove', onMouseMove);

  sliderBtn.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sliderBtn.onmouseup = null;
  };
  sliderBtn.ondragstart = function() {
    return false;
  };
}
