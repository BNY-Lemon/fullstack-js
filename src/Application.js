import React, {Component} from "react";
import HighScore from "./HighScore";

class Application extends Component {
    // This only runs when application component is insantiated, not every time it re-renders
    constructor(props){
        // Instantiates the parent class with props
        super(props);
        // This will remove the 'useless constructor' error
        this.state = {
            count: 0,
            overTen: false
        }
    }
    // This is how we will be writing methods so we do not need to bind them ourselves.
    handleClick = () => {
        // console.log("Clicked");
        // This takes a an object as a parameter and an optional callback
        this.setState({count: this.state.count + 1});
    }
    // Every time we click the button, the state changes and didupdate always gets called
    componentDidUpdate(props, state){
        // console.log("Updated from", state, "to", this.state);
        // This says if count is greater than 10, current state is not equal to old state, and overTen resolves to false then set new state
        // This ensures it is only set once when these conditions are met
        if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen) {
            console.log("Updating over ten");
            this.setState({overTen: true});
        }
    }

    render(){
        // Gets count variable from the state
        let {count} = this.state;

        return (
            <div>
                <h1>You clicked the button {count} times</h1>
                <HighScore 
                    overTen = {this.state.overTen}
                />
                
                <span>
                    {/* On Click is a property. 'e' is short for event. If there is no event we can leave the parenthesis blank. */}
                    <button onClick={() => this.handleClick()}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default Application;