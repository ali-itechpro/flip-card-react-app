import React, { Component } from 'react'
import FlipCard from './FlipCard'


class FlipCardList extends Component {

    constructor(props){
        super(props);
        this.state={
            flipCards: props.flipCards
    }
    //this.activeCardRef=React.createRef();
    }

    render() {
    
        return (
          <React.Fragment>
           {this.state.flipCards && this.state.flipCards.map(card => {
           return <FlipCard  counterId={card.id} frontTitle={card.front.title} frontAsset={card.front.asset} backAsset={card.back.asset} backTitle={card.back.title} backDescription={card.back.description} key={card.id}></FlipCard> })} 
          </React.Fragment>
        )
    }
}

export default FlipCardList
