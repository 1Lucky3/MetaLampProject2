import './Models/sliderBtn.ts'
import './style.scss'


class sliderModel{
  

  
}


class sliderView {
  
  constructor(){
    let body = document.body;
    let slider = document.createElement("div");
  }
  
  createSlider():void{
    
    let slider = document.createElement("div");
    slider.className = "slider";
    body.appendChild(slider)
  }
  createThumb():void{
    let thumb = document.createElement("span")
    thumb.className = "slider__btn"

  }
}

class sliderController {

}

let view = new sliderView;
view.createSlider()