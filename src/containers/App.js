import React, {Component} from "react";
import Counter from "../components/Counter";
import ContactContainer from "../components/ContactContainer";

class App extends Component{
    render() {
        return (
            <div>
                <p>Counter</p>
                <ContactContainer/>
            </div>
        );
    }
}

export default App;