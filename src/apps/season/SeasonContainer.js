import React from "react";
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner";

class SeasonContainer extends React.Component {
    /*constructor(props) {
        super(props);

        //this is the only time we do the direct assignment
        //this.state = { lat: null, errorMsg: "" };
    }*/

    state = { time: new Date().toLocaleTimeString(), lat: null, errorMsg: '', spinnerMsg:"Please accept location request" }

    //Lifecycle method
    componentDidMount() {
        console.log("component Did Mount");

        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString()})
        }, 1000);
        //this will be called ONE time
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

    //Lifecycle method
    componentDidUpdate = (prevProps, prevState) => {
        //Sit and wait for updates...gets called any single time
        //when a component is updated
        console.log("component Did Update");
        return true;
    };

    //Lifecycle method
    componentWillUnmount = () => {
        //Sit and wait until this component is not longer shown
        //mostly used to do the clean up
        console.log("component Will Unmount");
    };

    /* 
      //ARE very infrequently used
      shouldComponentUpdate(nextProps, nextState, nextContext) {
           
      }
      static getDerivedStateFromProps(nextProps, prevState) {
          
      }
      getSnapshotBeforeUpdate(){
  
      }
  */

    //React says we have to define render!! this is a must to have function
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay time={this.state.time} lat={this.state.lat} />;
        }

        return <Spinner message={this.spinnerMsg} />;
    }

    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }    
}

export default SeasonContainer;