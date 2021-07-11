import './style.scss'
import './slider.ts'

const sliderBtn = document.querySelector(".slider__btn");
const sliderBar = document.querySelector(".slider__bar");
const slider = document.querySelector(".slider");

sliderBtn.onmousedown = function(event){
  event.preventDefault();
  let sliderPos = sliderBar.getBoundingClientRect();
  let btnPos = sliderBtn.getBoundingClientRect();
  let btnShift = event.clientX - btnPos.left;
  
  function onMouseMove(event) {
    let leftShift = event.clientX - sliderBar.getBoundingClientRect().left - btnShift;
    let leftShiftMax = sliderPos.width - btnPos.width;
    if(leftShift<0){
      leftShift = 0;
    }
    if(leftShift>leftShiftMax){
      leftShift = leftShiftMax;
    }
    sliderBtn.style.left = leftShift + "px";
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseUp (){
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  sliderBtn.ondragstart = function() {
    return false;
  };
}
