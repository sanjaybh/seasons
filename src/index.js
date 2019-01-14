import React from "react";
import ReactDOM from "react-dom"


class App extends React.Component {
    constructor(props) {
        super(props)
        
        //this is the only time we do the direct assignment
        this.state = { lat: null, errorMsg: '' }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // only use setState to update state !!!
                this.setState({
                  lat: position.coords.latitude
                })
            },
            err => {
                this.setState({
                  errorMsg: err.message
                })
            }
        );
    }
    
    //React says we have to define render!!
    render () {        
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMsg}
            </div>
        )
    }    
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);

//document.querySelector(#root)