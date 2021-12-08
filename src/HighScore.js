import React, {Component} from "react";

class HighScore extends Component {
    // In React, every component needs to return something from the render method
    render(){
        if (this.props.overTen){
            return (
                <h3>Beat high score of 10!</h3>
            )
        } else {
            return null;
        }
    }
}

export default HighScore;