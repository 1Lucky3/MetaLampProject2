import './style.scss'
import './sliderController.ts'

const sliderBtn = document.querySelector(".slider__btn");
const sliderBar = document.querySelector(".slider__bar");
const slider = document.querySelector(".slider");
const sliderProgressBar = document.querySelector(".slider__progress");

sliderBar.onclick = function(event){
  let sliderPos = sliderBar.getBoundingClientRect();
  let btnPos = sliderBtn.getBoundingClientRect();
  let leftShift = event.clientX -sliderPos.left;
  sliderBtn.style.left = leftShift - btnPos.width/2 + "px";
  sliderProgressBar.style.width = leftShift  +"px";
}
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
    progressBarMove(leftShift);
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
  function sliderTipMove(leftShift){
    if(document.querySelector(".slider__tip")!=null){
      let sliderTip = document.querySelector(".slider__tip");
      let sliderBtnWidth = sliderBtn.getBoundingClientRect().width;
      let sliderTipWidth = sliderTip.getBoundingClientRect().width;
      let sliderTipShift = sliderTipWidth/2 - sliderBtnWidth/2;
      sliderTip.style.left = leftShift - sliderTipShift + "px";
      sliderTip.innerHTML = leftShift;
    }else{
      return;
    }
  }
  /* Progress Bar Logic */
  function progressBarMove(leftShift){
    let sliderBtnWidth = sliderBtn.getBoundingClientRect().width;
    sliderProgressBar.style.width = leftShift + "px";
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

/*  Tip checkbox logic  */


function addSliderTip () {
  let sliderTip = document.createElement("span");
  sliderTip.className = "slider__tip";
  slider.appendChild(sliderTip);
  let sliderBtnWidth = sliderBtn.getBoundingClientRect().width;
  let sliderTipWidth = sliderTip.getBoundingClientRect().width;
  let sliderTipShift = sliderTipWidth/2 - sliderBtnWidth/2;
  sliderTip.style.left = sliderBtn.offsetLeft - sliderTipShift + "px";
  sliderTip.innerHTML = sliderBtn.offsetLeft;
}
function clearSliderTip(){
  let sliderTip = document.querySelector(".slider__tip")
  sliderTip.parentNode.removeChild(sliderTip);
}
const tipBtn = document.getElementById("tip")
tipBtn.addEventListener("change", function(event){
  if(this.checked){
    addSliderTip();
  }else{
    clearSliderTip();
  }
});

/* slider scale logic*/
function addSliderScale(){
  let sliderScale = document.createElement("div");
  sliderScale.className = "slider__scale";
  slider.appendChild(sliderScale)
  for(let i = 0; i <= 9; i++){
    let scaleNumber = document.createElement("span")
    scaleNumber.className = "slider__scale_number"
    sliderScale.appendChild(scaleNumber)
    scaleNumber.innerHTML = i;
  }
}
function clearSliderScale() { 
  let sliderScale = document.querySelector(".slider__scale")
  sliderScale.parentNode.removeChild(sliderScale)
}
const scaleBtn = document.getElementById("scale");
scaleBtn.addEventListener("click", function(){
  if(this.checked){
    addSliderScale()

  }
  else{
    clearSliderScale()
  }
});