import React, {Component} from "react";

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
        // This would produce an error due to being in an infinite loop
        // this.setState({count: this.state.count + 1});
        // This would also produce infinite loop when we exceed 10 clicks
        // if(this.state.count > 10) {
        //     this.setState({overTen: True});
        // }
        // This fixes infinite loop but is still being called every click, reducing performance
        // if(this.state.count > 10 && this.state.count != state.count) {
        //         console.log("Updating over ten");
        //         this.setState({overTen: true});
        //     }
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
                {/* This is an inline way of writing an if statement in the html */}
                {(this.state.overTen) ?
                    <h3>Beat high score of 10!</h3>
                    : null
                }
                
                <span>
                    {/* On Click is a property. 'e' is short for event. If there is no event we can leave the parenthesis blank. */}
                    <button onClick={() => this.handleClick()}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default Application;