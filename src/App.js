import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/custom.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'
import FlipCardList from './FlipCardList'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        introduction: {},
        conclusion: {},
    };
  }



  componentDidMount() {
    //console.log(this);
    axios.get("data.json").then((response) => {
      this.setState({
        introduction: response.data.introductionContent,
        conclusion: response.data.conclusionContent,
        flipCards: response.data.flipCards,
      });
    });
  }

  render() {
    const intro = this.state.introduction;
    const conclu= this.state.conclusion;
   
    return (
      <div className="container">
        <div className="row">
          <header className="header">
            <div className="h-img-container">
              <img src={intro.asset} alt="design thinking" className="h-img" />
            </div>
            <div className="h-title">{intro.title}</div>
            <div className="h-content font-normal">{intro.description}</div>
          </header>
        </div>

        <div className="row mt-3">
         {this.state.flipCards && <FlipCardList flipCards={this.state.flipCards}></FlipCardList>}
          
        </div>
        <div className="row  mt-3 mb-3 d-none">
          <footer className="footer">
            <div className="f-img-container">
              <img src={conclu.asset} alt="Well done" className="f-img" />
            </div>
            <div className="f-title mt-3">{conclu.title}</div>
            <div className="f-content font-normal">{conclu.description}</div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
