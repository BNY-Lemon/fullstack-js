import React, {Component} from "react";

class Application extends Component {
    // This only runs when application component is insantiated, not every time it re-renders
    constructor(props){
        // Instantiates the parent class with props
        super(props);
    }
    // Life-cycle of a component: functions that determine when things must be updated or re-rendered
    // 
    componentWillMount(props, state){

    }
    componentDidMount(props, state){
        console.log("Mounted with", props, state);
    }
    // This will get called before it mounts because it recevies props when it mounts
    // When it re-renders or a prop changes it receives props all over again
    componentWillReceiveProps(props){

    }
    // These are the properties in state that it will update to
    componentWillUpdate(props, state){
        // these are the current props
        this.props
    }
    // Safer way to handle component updates, also gets triggered when a re-render happens
    // Props inside the parenthesis are the old properties
    componentDidUpdate(props, state){

    }

    render(){
        let name = "Ric";

        return (
            <div>
                <h1>Hello, {name}</h1>
                <span>This</span>
            </div>
        );
    }
}

export default Application;