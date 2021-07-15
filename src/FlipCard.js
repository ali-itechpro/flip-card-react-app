import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import images from "./images";

class FlipCard extends Component {
  constructor(props) {
    super(props);


    this.state = {
      isFlipped: false,
      activeCardCss:"",
      activeCardFuncSt:this.activeCardFunc,
      activatedCard:0,
      counter:0
    };

     this.activeCardRef=React.createRef();
    
  }

  activeCardFunc=(e)=>{
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped , counter:1}));
   // this.componentDidMount(); 
   this.refCheck(2);
   this.refCheck(3);
   this.refCheck(4);
   this.refCheck(5);
   this.refCheck(6);
  }

  refCheck=(num=1)=>{
    const activeCardRef= this.activeCardRef.current.dataset.counterid;
    if(activeCardRef == num){
      console.log("active ref:",activeCardRef, ", acrivated card:", this.state.activeCardCss);
      this.setState({activatedCard:1, activeCardCss: "active-card", activeCardFuncSt:this.activeCardFunc, counter: this.state.counter + num})
    }

    //if()
}

  componentDidMount(e) {
    this.refCheck();
    //console.log(this.state.activeCardRef);
  }

  render() {
    //console.log("activated card:",this.state.activatedCard)
    console.log("flipped",this.state.isFlipped);
     return (
       <React.Fragment>
         <div className="col-md-6 col-sm-12 ">
           {this.props && (<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" className="card" >
               <div className="front in-active card" onClick={this.state.activeCardFuncSt}>
                 <div><img src={images.incomplete} className="img-incomplete" alt="incomplete" /></div>
                 <div className="div-main-inactive">
                   <img src={this.props.frontAsset} alt="inactive" className="img-main-inactive" /></div>
                 <div className={"text-center title-inactive " + this.state.activeCardCss} ref={this.activeCardRef} data-counterid={this.props.counterId}>
                   {this.props.frontTitle}</div>
               </div>
               <div
                 className="back completed card" onClick={this.state.activeCardFuncSt}>
                 <div><img src={images.complete} className="img-completed" alt="completed"/></div>
                 <div className="text-center title-completed">{this.props.backTitle}</div>
                 <div className="text-center description-completed">{this.props.backDescription.replace(/(<([^>]+)>)/gi, "")}</div>
                 <div className="div-main-completed">
                   <img src={this.props.backAsset} alt="completed" className="img-main-completed" /></div>
                 <div className="div-img-back"><img src={images.back} alt="back" className="img-back" /></div>
               </div>
             </ReactCardFlip>
           )}
         </div>
       </React.Fragment>
     );
  }
}

export default FlipCard;
