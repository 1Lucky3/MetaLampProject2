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
    sliderTipMove(leftShift);
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
  /* sliderTip logic */
  let sliderTipPosition = sliderTip.getBoundingClientRect();
  function sliderTipMove(leftShift){
     let sliderBtnWidth = sliderBtn.getBoundingClientRect().width;
     let sliderTipWidth = sliderTip.getBoundingClientRect().width;
     let sliderTipShift = sliderTipWidth/2 - sliderBtnWidth/2;
    sliderTip.style.left = leftShift - sliderTipShift + "px";
  }
}

/*  vertical/horizontal logic  */

const verticalBtn = document.getElementById("vertical")
let sliderWidth   = sliderBar.getBoundingClientRect().width;
let sliderHeight  = sliderBar.getBoundingClientRect().height;
verticalBtn.addEventListener("change", function(){
  if(this.checked){
    slider.style.width  = sliderHeight + "px";
    slider.style.height = sliderWidth + "px";
  }else{
    slider.style.width  = sliderWidth + "px";
    slider.style.height = sliderHeight + "px";
  }
});

/*  Tip logic  */

function addSliderTip () {
  let sliderTip = document.createElement("span");
  sliderTip.className = "slider__tip";
  slider.appendChild(sliderTip);
}

const tipBtn = document.getElementById("tip")
tipBtn.addEventListener("change", function(event){
  if(this.checked){
    addSliderTip();
  }else{

  }
});