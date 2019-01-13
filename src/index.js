import React from "react";
import ReactDOM from "react-dom"


const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position.coords.latitude)
        },
        (err) => {
            console.log(err.message)
        }
    );
    return <h1>Latitude: </h1>
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);

//document.querySelector(#root)